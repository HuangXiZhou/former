# Slot

Many times, we need to be more detailed to customize our form controls. At this time, the slot becomes very useful. We can look at the common slot distribution: 

<div style="text-align:center;">
  <img height="140" width="350" :src="$withBase('/slot.png')" alt="slot">
</div>

Around our form controls, Former has provided some slots for users to use. In our `JSON schema`, we can income fields like `top`, `prefix`, `bottom`, `suffix`.

```js
...
{
  label: 'input',
  name: 'input',
  type: 'input',
  top: 'top',
  prefix: 'prefix',
  suffix: 'suffix',
  bottom: 'bottom'
}
...
```

::: demo
```html
<template>
  <div>
    <Former ui="element-ui" :model="model" :schema="schema" :options="options"></Former>
    <el-button :style="buttonStyle" @click="renderSlot('top', 'top')">top</el-button>
    <el-button :style="buttonStyle" @click="renderSlot('prefix', 'prefix')">prefix</el-button>
    <el-button :style="buttonStyle" @click="renderSlot('suffix', 'suffix')">suffix</el-button>
    <el-button :style="buttonStyle" @click="renderSlot('bottom', (h) => h('div', { style: { color: 'red' } }, 'custom render'))">custom render bottom</el-button>
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
    model: { name: '' },
    schema: [
      {
        label: 'Name: ',
        name: 'name',
        type: 'input',
        top: '',
        prefix: '',
        bottom: '',
        suffix: ''
      }
    ],
    options: { labelWidth: '80px', labelPosition: 'left' }
  }),

  methods: {
    renderSlot(slotName, value) {
      this.schema[0][slotName] = this.schema[0][slotName] 
        ? ''
        : value;
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
    "https://unpkg.com/@xizhouh/former@1.0.4/lib/former.umd.js"
  ]
}
```
:::
