# Custom

If `type = 'custom'`, the contents of the form are output via the `render` field:

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
    "https://unpkg.com/@xizhouh/former@1.0.7/lib/former.umd.js"
  ]
}
```
:::
