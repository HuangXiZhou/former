# Status

In the form, the transition between states is frequent. Through state control, the same code can be used in traditional `New`, `Edit`, and `Preview` to improve development efficiency:

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
    <Former ref="form" :ui="uiLib" :model="model" :schema="schema" :options="options"></Former>
    <h4>Global status</h4>
    <el-button :style="buttonStyle" @click="setGlobalStatus('EDIT')">Edit</el-button>
    <el-button :style="buttonStyle" @click="setGlobalStatus('PREVIEW')">Preview</el-button>
    <el-button :style="buttonStyle" @click="setGlobalStatus('DISABLED')">Disabled</el-button>
    <h4>Name field status</h4>
    <el-button :style="buttonStyle" @click="setStatus('name', 'EDIT')">Edit</el-button>
    <el-button :style="buttonStyle" @click="setStatus('name', 'PREVIEW')">Preview</el-button>
    <el-button :style="buttonStyle" @click="setStatus('name', 'DISABLED')">Disabled</el-button>
    <h4>Sex field status</h4>
    <el-button :style="buttonStyle" @click="setStatus('sex', 'EDIT')">Edit</el-button>
    <el-button :style="buttonStyle" @click="setStatus('sex', 'PREVIEW')">Preview</el-button>
    <el-button :style="buttonStyle" @click="setStatus('sex', 'DISABLED')">Disabled</el-button>
    <h4>Face value field status</h4>
    <el-button :style="buttonStyle" @click="setStatus('faceValue', 'EDIT')">Edit</el-button>
    <el-button :style="buttonStyle" @click="setStatus('faceValue', 'PREVIEW')">Preview</el-button>
    <el-button :style="buttonStyle" @click="setStatus('faceValue', 'DISABLED')">Disabled</el-button>
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
    model: { name: '', sex: 'Female', faceValue: 0 },
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
          { value: 'Female', name: 'Female' },
          { value: 'Male', name:'Male' }
        ]
      }, {
        label: 'Face value: ',
        name: 'faceValue',
        type: 'rate',
        showTooltip: true
      }
    ],
    options: { labelWidth: '100px', labelPosition: 'left' }
  }),
  methods: {
    setStatus(field, state) {
      this.$refs.form.setStatus(field, state);
    },
    setGlobalStatus(state) {
      this.$refs.form.setGlobalStatus(state);
    }
  }
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
    "https://unpkg.com/@xizhouh/former@1.0.9/lib/former.umd.js"
  ]
}
```
:::

### Methods

| Method        | Description | Parameters |
| ------------- | ----------- | ---------- |
| setStatus     | Set individual control status | Function(props: (String: field name, String: status)) |
| getStatus     | Get individual control status | Function(props: (String: field name)) |
| setGlobalStatus | Set global form status | Function(props: (String: status)) |
| getGlobalStatus | Get global form status | - |
