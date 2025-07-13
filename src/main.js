import Vue from 'vue'
import App from './App.vue'
// 引入全套elementui
//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select,Row } from 'element-ui';

Vue.config.productionTip = false;

//Vue.use(ElementUI);
Vue.component(Button.name, Button);
Vue.component(Select.name, Button);
Vue.component(Row.name, Button);
new Vue({
  render: h => h(App),
}).$mount('#app')
