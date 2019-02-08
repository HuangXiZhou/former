# Quick Start

::: tip
The following demo codes are available for running in [JSFiddle][JSFiddle] and [Codepen][Codepen].
:::

So far, the UI libraries we support are as follows:

- [Element UI][ElementUI]

## Element UI

```js
// main.js
import Vue from 'vue';
import ElementUI from 'element-ui';
import Former from '@xizhouh/former';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component('Former', Former);
```

::: demo
```html
<template>
  <div>
    <el-select v-model="uiLib">
      <el-option
        v-for="item in uiLibs"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <Former :ui="uiLib" :model="model" :schema="schema" :options="options"></Former>
    <p>{{model}}</p>
  </div>
</template>

<script>
export default {
  components: {
    Former: window.Former
  },

  data: () => ({
    uiLib: 'element-ui',
    uiLibs: [
      { value: 'element-ui', label: 'Element UI' },
      { value: 'iview', label: 'iView' }
    ],
    model: { name: '', sex: '' },
    schema: [
      { label: 'name:', name: 'name', type: 'input', style: { maxWidth: '350px', width: '100%' },
        rules: [
          { required: true, message: 'name is required', trigger: 'blur' }
        ]
      },
      { label: 'sex:', name: 'sex', type: 'input', style: { maxWidth: '350px', width: '100%' } }
    ],
    options: { labelWidth: '80px', labelPosition: 'left' }
  })
}
</script>
```
```json
{
  "cssLib": [
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
  ],
  "jsLib": [
    "https://unpkg.com/element-ui/lib/index.js",
    "https://unpkg.com/@xizhouh/former@1.0.4/lib/former.umd.js"
  ]
}
```
:::

[JSFiddle]: https://jsfiddle.net
[Codepen]: https://codepen.io
[ElementUI]: https://github.com/ElemeFE/element
