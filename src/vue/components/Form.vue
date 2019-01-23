<script>
import config from '../../config.js';
import FormItem from './FormItem.vue';
import { transformUIelName } from '../../utils.js';
import mitt from 'mitt';
export default {
  name: config.namespace,

  provide () {
    return {
      statusEmitter: this.statusEmitter,
      formModel: this.$props.model
    };
  },

  components: { FormItem },

  props: {
    schema: { type: Array, default: () => [] },
    model: { type: Object, default: () => {} },
    options: { type: Object, default: () => {} },
    ui: { type: String, default: () => 'element-ui' }
  },

  data () {
    return {
      statusCenter: {},
      statusEmitter: { core: null }
    };
  },

  created () {
    // Init store
    const emitter = this.statusEmitter.core = mitt();
    emitter.on('init', statusObj => {
      this.statusCenter = { ...this.statusCenter, ...statusObj };
    });
  },

  mounted () {
    // onLoad form validate functions
    if (this.$refs[config.namespace]) {
      this.handleValidate = this.$refs[config.namespace].validate;
      this.handleValidateField = this.$refs[config.namespace].validateField;
      this.handleResetFields = this.$refs[config.namespace].resetFields;
      this.handleClearValidate = this.$refs[config.namespace].clearValidate;
    }
  },

  methods: {
    // Set form control status
    handleSetStatus (key, status) {
      this.statusEmitter.core.emit('update', { name: key, status });
      this.statusCenter[key] && (this.statusCenter[key] = status);
    },
    // Get form control status
    handleGetStatus (key) {
      return this.statusCenter[key];
    },
    // Set global form status
    handleSetGlobalStatus (status) {
      let statusCenter = this.statusCenter;
      status = status || 'EDIT';
      Object.keys(statusCenter).forEach(key => {
        statusCenter[key] = status;
        this.statusEmitter.core.emit('update', { name: key, status });
      });
      this.statusCenter = { ...statusCenter };
    },
    // Get global form status
    handleGetGlobalStatus () {
      return this.statusCenter;
    }
  },

  render (h) {
    const { schema, model, options, ui } = this.$props;
    const prefix = transformUIelName(ui);

    // Render form element
    return h(
      `${prefix}-form`,
      { ref: config.namespace, props: { ...options, model } },
      schema.map((item, idx) => h(FormItem, { key: idx, props: { attrs: item, ui } }))
    );
  }
};
</script>
