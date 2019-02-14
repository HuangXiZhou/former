# Quick Start

::: tip
The following demo codes are available for running in [JSFiddle][JSFiddle] and [Codepen][Codepen].
:::

So far, the UI libraries we support are as follows:

- [Element UI][ElementUI]
- [iView][iView]

```js
// main.js
import Vue from 'vue';
import Former from '@xizhouh/former';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// or use iView
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView);

Vue.component('Former', Former);
```

If you are familiar with the use of these ui libraries, then you will be kind to the Former. Former also provides field `merge` to override the same field in UI libraries and `JSON schema` like `type`.

::: demo
```html
<template>
  <div>
    <el-select :style="selectStyle" v-model="uiLib">
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
    selectStyle: {
      marginBottom: '20px'
    },
    uiLib: 'element-ui',
    uiLibs: [
      { value: 'element-ui', label: 'Element UI' },
      { value: 'iview', label: 'iView' }
    ],
    model: { Name: '', Sex: '' },
    schema: [
      { label: 'Name: ', name: 'name', type: 'input', style: { maxWidth: '350px', width: '100%' },
        rules: [
          { required: true, message: 'name is required', trigger: 'blur' }
        ]
      },
      { label: 'Sex: ', name: 'sex', type: 'input', style: { maxWidth: '350px', width: '100%' } }
    ],
    options: { labelWidth: '80px', labelPosition: 'left' }
  })
}
</script>
```
```json
{
  "cssLib": [
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
    "https://unpkg.com/iview@3.2.2/dist/styles/iview.css"
  ],
  "jsLib": [
    "https://unpkg.com/element-ui/lib/index.js",
    "https://unpkg.com/iview@3.2.2/dist/iview.min.js",
    "https://unpkg.com/@xizhouh/former@1.1.0/lib/former.umd.js"
  ]
}
```
:::

[JSFiddle]: https://jsfiddle.net
[Codepen]: https://codepen.io
[ElementUI]: https://github.com/ElemeFE/element
[iView]: https://github.com/iview/iview
