# iView Control Demos

::: demo
```html
<template>
  <Former ui="iview" :model="model" :schema="schema" :options="options"></Former>
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
      inputNumber: 0,
      radio: 'foo',
      checkbox: [ 'foo' ],
      switch: false,
      slider: 0,
      datePicker: '',
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
          { value: 'foo', name: 'foo' }
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
        label: 'TimePicker: ',
        name: 'timePicker',
        type: 'timePicker'
      },
      {
        label: 'Tree: ',
        name: 'tree',
        type: 'tree',
        data: [
          {
            title: 'foo',
            children: [
              {
                title: 'bar',
                children: [
                  {
                    title: 'foo'
                  }
                ]
              }
            ]
          }
        ]
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
        data: [ {
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
          (h) => h('i-button', { props: { type: 'primary' } }, 'Click to upload')
        ]
      }
    ],
    options: { labelWidth: 100, labelPosition: 'left' }
  })
}
</script>
```
```json
{
  "cssLib": [
    "https://unpkg.com/iview@3.2.2/dist/styles/iview.css"
  ],
  "jsLib": [
    "https://unpkg.com/iview@3.2.2/dist/iview.min.js",
    "https://unpkg.com/@xizhouh/former@1.0.7/lib/former.umd.js"
  ]
}
```
:::

</div>
