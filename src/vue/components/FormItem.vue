<script>
import config from '../../config.js';
import { cloneDeep, parsePath, checkWhen, transformUIelName } from '../../utils.js';
import isFunction from 'is-function';
import set from 'set-object-path';
import createFormControl from '../adapter/index.js';

export default {
  name: `${config.namespace}-item`,

  inject: ['statusEmitter', 'formModel'],

  props: {
    ui: { type: String, default: () => 'element-ui' },
    attrs: { type: Object, default: () => {} }
  },

  data () {
    return {
      status: 'EDIT'
    };
  },

  mounted () {
    if (this.attrs.name && this.statusEmitter) {
      this.statusEmitter.core.emit('init', { [this.attrs.name]: 'EDIT' });
      this.statusEmitter.core.on('update', obj => {
        if (!obj) return;
        if (obj.name === this.$props.attrs.name && this.status !== obj.status) {
          this.status = obj.status;
          this.$forceUpdate();
        }
      });
    }
  },

  render (h) {
    const props = cloneDeep(this.$props.attrs) || {};
    const mainAttrs = { props: props || {}, on: props.on || {}, style: props.style || {} };
    const deputyAttrs = { top: props.top, prefix: props.prefix, suffix: props.suffix, bottom: props.bottom };

    // set validate rules name
    mainAttrs.props.prop = props.name;

    // init `EDIT` status
    mainAttrs.status = this.status || 'EDIT';

    // `DISABLE` status
    if (mainAttrs.status === 'DISABLED') {
      mainAttrs.props.disabled = true;
    }

    // emit
    mainAttrs.on.input = e => {
      this.$emit('input', e);
    };

    // init data
    mainAttrs.props.value = parsePath(this.formModel, props.name);

    this.$on('input', e => {
      set(this.formModel, props.name, mainAttrs.props.transformValue ? mainAttrs.props.transformValue(e) : e);
    });

    const hasWhen = mainAttrs.props.hasOwnProperty('when');
    const isWhen = checkWhen(mainAttrs.props.when);
    if (hasWhen && !isWhen) return null;

    return h(`${transformUIelName(this.$props.ui)}-form-item`, { props: mainAttrs.props }, [
      // main slot
      h('div', { class: ['wrapper'] }, [
        // prefix slot
        props.prefix && h('div', { class: ['prefix'] }, [ isFunction(deputyAttrs.prefix) ? deputyAttrs.prefix(h) : deputyAttrs.prefix ]),
        h('div', { class: ['main'] }, [
          // top slot
          props.top && h('div', { class: ['top'] }, [ isFunction(deputyAttrs.top) ? deputyAttrs.top(h) : deputyAttrs.top ]),
          //  main control
          createFormControl[this.$props.ui](h, mainAttrs, props.type),
          // bottom slot
          props.bottom && h('div', { class: ['bottom'] }, [ isFunction(deputyAttrs.bottom) ? deputyAttrs.bottom(h) : deputyAttrs.bottom ])
        ]),
        // suffix slot
        props.suffix && h('div', { class: ['suffix'] }, [ isFunction(deputyAttrs.suffix) ? deputyAttrs.suffix(h) : deputyAttrs.suffix ])
      ])
    ]);
  }
};
</script>

<style lang="css" scoped>
.wrapper {
  display: flex;
}

.main {
  width: 100%;
}

.top {
  padding-bottom: 5px;
}

.bottom {
  padding-top: 5px;
}

.top,
.bottom {
  color: #909399;
  line-height: normal;
}

.control {
  width: 100%;
}

.suffix {
  margin-left: 10px;
}

.prefix {
  margin-right: 10px;
}
</style>
