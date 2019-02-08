# Conditional Render

Compared to the linkage, conditional rendering is more focused on element display control. Same as linkage, Former has provided field `when` to control our controls display or not:

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
    model: { name: '', sex: 0 },
    schema: [
      {
        label: 'Name: ',
        name: 'name',
        type: 'input'
      }, {
        label: 'Sex: ',
        name: 'sex',
        type: 'radio',
        options: [
          { value: 0, name: 'female' },
          { value: 1, name:'male' }
        ],
        when: (model) => !!model.name
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

Field `when` will return `model` object to let you determine if the target form control needs to be rendered. filed `when` can receive a `boolean` value or a `function` that expect return a `boolean` value.
