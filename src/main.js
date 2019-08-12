import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import './assets/fonts/stylesheet.css';
import '../node_modules/pixel-glass/styles.css'
import VueDraggable from 'vue-draggable'
import PixelGlass from '../node_modules/pixel-glass/script.js'

Vue.use(VueDraggable,PixelGlass);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
