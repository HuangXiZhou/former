# Linkage

When our forms become more and more complex, we may need to use linkage between form controls. Former has provided field `onChange` to control our controls:

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
    model: { url: '', protocol: 0 },
    schema: [
      {
        label: 'Protocol: ',
        name: 'protocol',
        type: 'radio',
        options: [
          { value: 0, name: 'http' },
          { value: 1, name:'https' }
        ],
        onChange: (e, model) => {
          model.url = e > 0 ? 'https://' : 'http://';
        }
      }, {
        label: 'Url: ',
        name: 'url',
        type: 'input'
      }
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
    "https://unpkg.com/@xizhouh/former@1.0.9/lib/former.umd.js"
  ]
}
```
:::

`onChange` will return two values, one is current input value, the other is `model` obejct.

::: warning
`model` is observed, if you change the value of the `model`, it will update the view. Hope you know what you are doing.
:::
