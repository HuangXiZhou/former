::: tip
The following demo codes are available for running in [JSFiddle][JSFiddle] and [Codepen][Codepen].
:::

## Vue

### Element UI

In `main.js` :

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import Former from '@xizhouh/former/lib/vue';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.component(Former);
```

In `example.vue` :

```vue
<template>
  <Former
    ui="element-ui"
    :options="options"
    :model="model"
    :schema="schema">
  </Former>
</template>
```

```js
export default {
  data: () => ({
    model: { name: '', sex: '' },
    schema: [
      { label: 'name:', name: 'name', type: 'input', style: { width: '100%' },
        rules: [
          { required: true, message: 'name is required', trigger: 'blur' }
        ]
      },
      { label: 'sex:', name: 'sex', type: 'input', style: { width: '100%' } }
    ],
    options: { labelWidth: '80px', labelPosition: 'left' }
  })
}
```

::: demo
```html
<template>
  <div>
    <Former ui="element-ui" :model="model" :schema="schema" :options="options"></Former>
    <p>{{model}}</p>
  </div>
</template>

<script>
export default {
  components: {
    Former: window.Former.Former
  },

  data: () => ({
    model: { name: '', sex: '' },
    schema: [
      { label: 'name:', name: 'name', type: 'input', style: { maxWidth: '350px', width: '100%' },
        rules: [
          { required: true, message: 'name is required', trigger: 'blur' }
        ]
      },
      { label: 'sex:', name: 'sex', type: 'input', style: { maxWidth: '350px', width: '100%' } }
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
    "https://cdn.jsdelivr.net/npm/@xizhouh/former/lib/vue/index.js"
  ]
}
```
:::

[JSFiddle]: https://jsfiddle.net
[Codepen]: https://codepen.io
