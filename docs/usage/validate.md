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
    "https://unpkg.com/element-ui/lib/theme-chalk/index.css",
    "https://unpkg.com/iview@3.2.2/dist/styles/iview.css"
  ],
  "jsLib": [
    "https://unpkg.com/element-ui/lib/index.js",
    "https://unpkg.com/iview@3.2.2/dist/iview.min.js",
    "https://unpkg.com/@xizhouh/former@1.1.0/lib/former.umd.js"
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
    <el-select :style="selectStyle" v-model="uiLib" @change="onChange">
      <el-option
        v-for="item in uiLibs"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <Former ref="form" :ui="uiLib" :model="model" :schema="schema" :options="options"></Former>
    <el-button :style="buttonStyle" @click="validate">Validate</el-button>
    <el-button :style="buttonStyle" @click="validateField">Validate One Field</el-button>
    <el-button :style="buttonStyle" @click="resetFields">Reset Fields</el-button>
    <el-button v-if="uiLib !== 'iview'" :style="buttonStyle" @click="clearValidate">Clear Validate</el-button>
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
    },
    onChange(e) {
      window.location.href = `${window.location.href}?ui=${e}`;
    }
  },

  created() {
    this.uiLib = getParameterByName('ui', window.location.href) || 'element-ui';
  }
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
  results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
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
    "https://unpkg.com/@xizhouh/former@1.1.0/lib/former.umd.js"
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
| clearValidate(Element UI) | clear validation message for certain fields. The parameter is prop name or an array of prop names of the form items whose validation messages will be removed. When omitted, all fields' validation messages will be cleared | Function(props: string) |