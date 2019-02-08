# Linkage

When our forms become more and more complex, we may need to use linkage between form controls. Former has provided field `onChange` to control our controls:

::: demo
```html
<template>
  <div>
    <Former ui="element-ui" :model="model" :schema="schema" :options="options"></Former>
  </div>
</template>

<script>
export default {
  components: {
    Former: window.Former
  },

  data: () => ({
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
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css"
  ],
  "jsLib": [
    "https://unpkg.com/element-ui/lib/index.js",
    "https://unpkg.com/@xizhouh/former@1.0.4/lib/former.umd.js"
  ]
}
```
:::

`onChange` will return two values, one is current input value, the other is `model` obejct.

::: warning
`model` is observed, if you change the value of the `model`, it will update the view. Hope you know what you are doing.
:::
