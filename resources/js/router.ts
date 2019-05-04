import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/Home.vue';
import StyleGuide from './pages/StyleGuide.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'style-guide',
      name: 'styleGuide',
      component: StyleGuide //() => import(/* webpackChunkName:  "page-style-guide" */ './pages/StyleGuide.vue')
    }
  ]
});
