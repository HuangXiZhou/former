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
        render: (h) => h('p', 
          { 
            style: { 
              color: 'red',
              margin: 0,
              padding: 0,
              lineHeight: '40px'
            } 
          }, 
          'Custom red text')
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
    "https://unpkg.com/@xizhouh/former@1.0.5/lib/former.umd.js"
  ]
}
```
:::
