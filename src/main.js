import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

import './plugins/excel-editor';
import './plugins/styles';

Vue.config.productionTip = false;

export default new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
