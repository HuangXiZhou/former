# Custom

If `type = 'custom'`, the contents of the form are output via the `render` field:

::: demo
```html
<template>
  <Former ui="element-ui" :model="model" :schema="schema" :options="options"></Former>
</template>

<script>
export default {
  components: {
    Former: window.Former
  },

  data: () => ({
    model: { custom: '' },
    schema: [
      {
        label: 'Custom: ',
        name: 'custom',
        type: 'custom',
        render: (h) => h('p', { style: { color: 'red' } }, 'Custom red text')
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
    "https://cdn.jsdelivr.net/npm/@xizhouh/former/lib/former.umd.js"
  ]
}
```
:::
