# Validate

## Control
Former allows you to write the verification information in `JSON schema`. All the rules will inject into UI library controls.

in `Element UI`, you need to maintain multiple copies of the data, and the verification rules are taken separately:

```html
...
<el-form :model="model" :rules="rules">
</el-form>
...
```

but in Former, all in `JSON schema`:

```js
{
  label: 'input',
  name: 'input',
  type: 'input',
  rules:[ { required: true, trigger: 'blur' } ]
}
```

Or some more complicated verification:

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
    model: { age: 18 },
    schema: [
      {
        label: 'Age: ',
        name: 'age',
        type: 'inputNumber',
        rules: [
          { 
            validator (rule, value, callback, source, options) {
              value < 18 ? callback(['Age must be greater than 18 years old']) : callback([]);     
            } 
          }
        ]
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
    "https://unpkg.com/@xizhouh/former@1.0.3/lib/former.umd.js"
  ]
}
```
:::

## Global

Former has provided some functions to validate form fields:

::: demo
```html
<template>
  <div>
    <Former ref="form" ui="element-ui" :model="model" :schema="schema" :options="options"></Former>
    <el-button :style="buttonStyle" @click="validate">Validate</el-button>
    <el-button :style="buttonStyle" @click="validateField">Validate One Field</el-button>
    <el-button :style="buttonStyle" @click="resetFields">Reset Fields</el-button>
    <el-button :style="buttonStyle" @click="clearValidate">Clear Validate</el-button>
  </div>
</template>

<script>
export default {
  components: {
    Former: window.Former
  },

  data: () => ({
    buttonStyle: {
      margin: '5px 3px'
    },
    model: { firstName: '', lastName: '' },
    schema: [
      {
        label: 'First name: ',
        name: 'firstName',
        type: 'input',
        rules: [
          { required: true, trigger: 'blur' },
          { min: 3, max: 5, message: 'First Name must be between 3 and 5 characters', trigger: 'blur' } 
        ]
      }, {
        label: 'Last name: ',
        name: 'lastName',
        type: 'input',
        rules: [
          { required: true, trigger: 'blur' }
        ]
      }
    ],
    options: { labelWidth: '120px', labelPosition: 'left' }
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    validateField() {
      this.$refs.form.validateField('firstName');
    },
    resetFields() {
      this.$refs.form.resetFields();
    },
    clearValidate() {
      this.$refs.form.clearValidate();
    }
  }
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
    "https://unpkg.com/@xizhouh/former@1.0.3/lib/former.umd.js"
  ]
}
```
:::

### Methods

| Method        | Description | Parameters |
| ------------- | ----------- | ---------- |
| validate      | validate the whole form. Takes a callback as a param. After validation, the callback will be executed with two params: a boolean indicating if the validation has passed, and an object containing all fields that fail the validation. Returns a promise if callback is omitted | Function(callback: Function(boolean, object)) |
| validateField | validate one or serveral form items | Function(props: string) |
| resetFields   | reset all the fields and remove validation result | - |
| clearValidate | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared | Function(props: string) |