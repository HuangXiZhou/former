import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/index.styl';

export default ({
  Vue,
  options,
  router,
  siteData
}) => Vue.use(ElementUI)
