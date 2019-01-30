export default [
  { label: 'none',
    name: 'none',
    type: 'input',
    when: false
  },
  { label: 'input',
    name: 'input',
    type: 'input',
    style: { width: '350px' },
    class: [ 'custom-class' ],
    top: 'top',
    prefix: 'prefix',
    suffix: 'suffix',
    bottom: 'bottom',
    htmlAttr: {
      placeholder: 'input placeholder'
    },
    rules:
    [
      { required: true, trigger: 'blur' }
    ],
    when: true
  },
  { label: 'textarea',
    name: 'textarea',
    type: 'textarea',
    style: { width: '350px' },
    class: [ 'custom-class' ],
    top: (h) => h('div', 'top'),
    prefix: (h) => h('div', 'prefix'),
    suffix: (h) => h('div', 'suffix'),
    bottom: (h) => h('div', 'bottom'),
    htmlAttr: {
      placeholder: 'textarea placeholder'
    },
    when: () => true
  },
  {
    label: 'select',
    name: 'select',
    type: 'select',
    style: { width: '350px' },
    class: [ 'custom-class' ],
    options: [{
      value: 'foo',
      label: 'foo'
    }, {
      value: 'bar',
      label: 'bar'
    }]
  }
];
