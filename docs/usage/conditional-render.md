# Conditional Render

Compared to the linkage, conditional rendering is more focused on element display control. Same as linkage, Former has provided field `when` to control our controls display or not:

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
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
    "https://unpkg.com/iview@3.2.2/dist/styles/iview.css"
  ],
  "jsLib": [
    "https://unpkg.com/element-ui/lib/index.js",
    "https://unpkg.com/iview@3.2.2/dist/iview.min.js",
    "https://unpkg.com/@xizhouh/former@1.0.6/lib/former.umd.js"
  ]
}
```
:::

Field `when` will return `model` object to let you determine if the target form control needs to be rendered. filed `when` can receive a `boolean` value or a `function` that expect return a `boolean` value.
