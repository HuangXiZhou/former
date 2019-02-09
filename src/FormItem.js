import config from './config.js';
import set from 'set-object-path';
import omit from 'object.omit';
import isFunction from 'is-function';
import createFormControl from './adapter/index.js';
import { cloneDeep, parsePath, checkWhen, transformUIelName } from './utils.js';
import './style.css';

export default {
  name: `${config.namespace}-item`,

  inject: [ 'statusEmitter', 'model' ],

  props: {
    ui: { type: String, default: () => 'element-ui' },
    fields: { type: Object, default: () => {} } // schema item fields
  },

  data: () => ({ status: 'EDIT' }),

  mounted () {
    const { fields } = this.$props;
    if (fields.name && this.statusEmitter) {
      this.statusEmitter.core.emit('init', { [fields.name]: 'EDIT' });
      this.statusEmitter.core.on('update', (obj) => {
        if (!obj) return;
        if (obj.name === fields.name && this.status !== obj.status) {
          this.status = obj.status;
          this.$forceUpdate();
        }
      });
    }
  },

  render (h) {
    let { fields, ui } = this.$props;
    fields = cloneDeep(fields) || {};
    const attrs = {
      // Props will mount on the UI component
      props: {
        ...omit(fields, [
          'on',
          'class',
          'style',
          'type',
          'top',
          'prefix',
          'suffix',
          'bottom',
          'onChange',
          'when',
          'htmlAttr'
        ]),
        // Form validate
        prop: fields.name || '',
        // Control status
        disabled: false
      } || {},
      // Event handlers are nested under `on`
      on: fields.on || {},
      // Class will mount on the UI component
      class: fields.class || [],
      // Style will mount on the UI component
      style: fields.style || {},
      // Native html element attributes
      htmlAttr: fields.htmlAttr || {},
      // Form status
      status: this.$data.status || 'EDIT',
      // Form control type
      type: fields.type || 'input',
      // onChange event
      onChange: fields.onChange || null,
      // Form control linkage
      when: fields.hasOwnProperty('when') ? fields.when : true
    };
    const surrounds = {
      top: fields.top,
      prefix: fields.prefix,
      suffix: fields.suffix,
      bottom: fields.bottom
    };

    // `DISABLE` status
    if (attrs.status === 'DISABLED') {
      attrs.props.disabled = true;
    }

    // Emit event
    attrs.on.input = (e) => {
      this.$emit('input', e);
      // Linkage
      attrs.onChange && attrs.onChange(e, this.model);
    };

    // Init UI component value
    attrs.props.value = parsePath(this.model, attrs.props.name);

    this.$on('input', (e) => {
      set(this.model, attrs.props.name, e);
    });

    // Conditional render
    const isWhen = checkWhen(attrs.when, cloneDeep(this.model));
    if (attrs.hasOwnProperty('when') && !isWhen) {
      return null;
    };

    return h(transformUIelName(ui, 'FORM_ITEM'), { props: attrs.props }, [
      // Top slot
      surrounds.top && h('div', { class: [ `${config.namespace}-top` ] }, [ isFunction(surrounds.top) ? surrounds.top(h) : surrounds.top ]),
      // Main slot
      h('div', { class: [ `${config.namespace}-wrapper` ] }, [
        // Prefix slot
        surrounds.prefix && h('div', { class: [ `${config.namespace}-prefix` ] }, [ isFunction(surrounds.prefix) ? surrounds.prefix(h) : surrounds.prefix ]),
        h('div', { class: [ `${config.namespace}-main` ] }, [
          //  Main control
          createFormControl[ui](h, attrs)
        ]),
        // Suffix slot
        surrounds.suffix && h('div', { class: [ `${config.namespace}-suffix` ] }, [ isFunction(surrounds.suffix) ? surrounds.suffix(h) : surrounds.suffix ])
      ]),
      // Bottom slot
      surrounds.bottom && h('div', { class: [ `${config.namespace}-bottom` ] }, [ isFunction(surrounds.bottom) ? surrounds.bottom(h) : surrounds.bottom ])
    ]);
  }
};
