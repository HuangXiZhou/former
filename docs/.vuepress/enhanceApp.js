import Vue from 'vue';
import ElementUI from 'element-ui';
// import iView from 'iview';
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';
import { Input, Form, FormItem, Radio, RadioGroup } from 'iview';
Vue.component(Input);
Vue.component(Form);
Vue.component(FormItem);
Vue.component(Radio);
Vue.component(RadioGroup);

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(ElementUI)
}
