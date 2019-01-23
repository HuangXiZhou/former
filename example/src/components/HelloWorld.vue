<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Formless ui="element-ui" :model="model" :schema="schema" :options="options"></Formless>
  </div>
</template>

<script>
import Vue from 'vue';
import { Form, FormItem, Input } from 'element-ui';
import { Formless } from '@xizhouh/formless/lib/vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.component('el-input', Input);
Vue.component('el-form', Form);
Vue.component('el-form-item', FormItem);
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Formless
  },
  data: () => ({
    model: {
      name: '',
      sex: ''
    },
    schema: [
      { label: 'name:',
        name: 'name',
        type: 'input',
        style: { width: '350px' },
        rules:
        [
          { required: true, message: 'name is required', trigger: 'blur' }
        ]
      },
      { label: 'sex:',
        name: 'sex',
        type: 'input',
        style: { width: '350px' }
      }
    ],
    options: {}
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
