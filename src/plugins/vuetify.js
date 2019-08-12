import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueDraggable from 'vue-draggable'

Vue.use(Vuetify,VueDraggable);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
