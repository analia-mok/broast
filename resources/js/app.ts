// require('./bootstrap'); // TODO: Re-import as module later.
import Vue from 'vue';
import DefaultLayout from './layouts/DefaultLayout.vue';
import App from './App.vue';
import router from './router';

// Make console clean.
Vue.config.productionTip = false;

// Global Components.
Vue.component('Layout', DefaultLayout);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
