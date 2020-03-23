import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//公共css
import './assets/css/base.css';
import 'leaflet/dist/leaflet.css'
import "./map/mars2d/mars2d.css";

//引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入fontawesome
import 'font-awesome/css/font-awesome.min.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
