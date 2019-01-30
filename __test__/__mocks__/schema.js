export default [
  {
    label: 'none',
    name: 'none',
    type: 'input',
    when: false
  },
  {
    label: 'input',
    name: 'input',
    type: 'input',
    top: 'top',
    prefix: 'prefix',
    suffix: 'suffix',
    bottom: 'bottom',
    htmlAttr: { placeholder: 'input placeholder' },
    rules:
    [
      { required: true, trigger: 'blur' }
    ],
    when: true
  },
  {
    label: 'textarea',
    name: 'textarea',
    type: 'textarea',
    top: (h) => h('div', 'top'),
    prefix: (h) => h('div', 'prefix'),
    suffix: (h) => h('div', 'suffix'),
    bottom: (h) => h('div', 'bottom'),
    htmlAttr: { placeholder: 'textarea placeholder' },
    when: () => true
  },
  {
    label: 'select',
    name: 'select',
    type: 'select',
    style: { width: '350px' },
    class: [ 'custom-class' ],
    options: [ {
      value: 'foo',
      label: 'foo'
    }, {
      value: 'bar',
      label: 'bar'
    } ]
  },
  {
    label: 'inputNumber',
    name: 'inputNumber',
    type: 'inputNumber',
  },
  {
    label: 'radio',
    name: 'radio',
    type: 'radio',
    options: [
      { value: 'foo', name: 'foo' },
      { value: 'bar', name:'bar' }
    ]
  },
  {
    label: 'checkbox',
    name: 'checkbox',
    type: 'checkbox',
    options: [
      { value: 'foo', name: 'foo' }
    ]
  },
  {
    label: 'switch',
    name: 'switch',
    type: 'switch'
  },
  {
    label: 'slider',
    name: 'slider',
    type: 'slider'
  },
  {
    label: 'datePicker',
    name: 'datePicker',
    type: 'datePicker'
  },
  {
    label: 'timeSelect',
    name: 'timeSelect',
    type: 'timeSelect'
  },
  {
    label: 'timePicker',
    name: 'timePicker',
    type: 'timePicker'
  },
  {
    label: 'tree',
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
    label: 'rate',
    name: 'rate',
    type: 'rate'
  },
  {
    label: 'cascader',
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
    label: 'upload',
    name: 'upload',
    type: 'upload',
    action: 'https://foo.bar'
  },
  {
    label: 'custom',
    name: 'custom',
    type: 'custom',
    render: (h) => h('div', 'foo')
  }
];
