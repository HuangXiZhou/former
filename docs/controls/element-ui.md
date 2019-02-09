# Element UI Demos

<div class="2333">

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
    model: {
      input: '',
      textarea: '',
      select: 'foo',
      inputNumber: '',
      radio: 'foo',
      checkbox: false,
      switch: false,
      slider: 0,
      datePicker: '',
      timeSelect: '',
      timePicker: '',
      tree: '',
      rate: null,
      cascader: [],
      upload: ''
    },
    schema: [
      {
        label: 'Input: ',
        name: 'input',
        type: 'input'
      },
      {
        label: 'Textarea: ',
        name: 'textarea',
        type: 'textarea'
      },
      {
        label: 'Select: ',
        name: 'select',
        type: 'select',
        options: [ {
          value: 'foo',
          label: 'foo'
        }, {
          value: 'bar',
          label: 'bar'
        } ]
      },
      {
        label: 'InputNumber: ',
        name: 'inputNumber',
        type: 'inputNumber',
      },
      {
        label: 'Radio: ',
        name: 'radio',
        type: 'radio',
        options: [
          { value: 'foo', name: 'foo' },
          { value: 'bar', name:'bar' }
        ]
      },
      {
        label: 'Checkbox: ',
        name: 'checkbox',
        type: 'checkbox',
        options: [
          { value: true, name: 'foo' }
        ]
      },
      {
        label: 'Switch: ',
        name: 'switch',
        type: 'switch'
      },
      {
        label: 'Slider: ',
        name: 'slider',
        type: 'slider'
      },
      {
        label: 'DatePicker: ',
        name: 'datePicker',
        type: 'datePicker'
      },
      {
        label: 'TimeSelect: ',
        name: 'timeSelect',
        type: 'timeSelect'
      },
      {
        label: 'TimePicker: ',
        name: 'timePicker',
        type: 'timePicker'
      },
      {
        label: 'Tree: ',
        name: 'tree',
        type: 'tree',
        data: [ {
          label: 'foo',
          children: [ {
            label: 'bar',
            children: [ { label: 'foo' } ]
          } ]
        } ],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      },
      {
        label: 'Rate: ',
        name: 'rate',
        type: 'rate'
      },
      {
        label: 'Cascader: ',
        name: 'cascader',
        type: 'cascader',
        options: [ {
          value: 'foo',
          label: 'foo',
          children: [ {
            value: 'bar',
            label: 'bar'
          } ]
        } ]
      },
      {
        label: 'Upload: ',
        name: 'upload',
        type: 'upload',
        action: 'https://foo.bar',
        slots: [
          (h) => h('el-button', { props: { type: 'primary' } }, '点击上传')
        ]
      }
    ],
    options: { labelWidth: '100px', labelPosition: 'left' }
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

</div>
