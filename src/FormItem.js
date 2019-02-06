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
          'when',
          'htmlAttr'
        ]),
        // Form validate
        prop: fields.name || ''
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
    };

    // Init UI component value
    attrs.props.value = parsePath(this.model, attrs.props.name);

    this.$on('input', (e) => {
      set(this.model, attrs.props.name, e);
    });

    // Linkage
    const isWhen = checkWhen(attrs.when);
    if (attrs.hasOwnProperty('when') && !isWhen) {
      return null;
    };

    return h(`${transformUIelName(ui)}-form-item`, { props: attrs.props }, [
      // Main slot
      h('div', { class: [ 'wrapper' ] }, [
        // Prefix slot
        surrounds.prefix && h('div', { class: [ 'prefix' ] }, [ isFunction(surrounds.prefix) ? surrounds.prefix(h) : surrounds.prefix ]),
        h('div', { class: [ 'main' ] }, [
          // Top slot
          surrounds.top && h('div', { class: [ 'top' ] }, [ isFunction(surrounds.top) ? surrounds.top(h) : surrounds.top ]),
          //  Main control
          createFormControl[ui](h, attrs),
          // Bottom slot
          surrounds.bottom && h('div', { class: [ 'bottom' ] }, [ isFunction(surrounds.bottom) ? surrounds.bottom(h) : surrounds.bottom ])
        ]),
        // Suffix slot
        surrounds.suffix && h('div', { class: [ 'suffix' ] }, [ isFunction(surrounds.suffix) ? surrounds.suffix(h) : surrounds.suffix ])
      ])
    ]);
  }
};
