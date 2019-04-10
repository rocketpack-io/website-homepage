import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import GetStarted from './pages/GetStarted.vue';
import About_WhatIs from './pages/about/what-is.vue';
import MainNavbar from './layout/MainNavbar.vue';
import MainFooter from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 100 },
        footer: { backgroundColor: 'primary' }
      }
    },
    {
      path: '/get-started',
      name: 'get-started',
      components: { default: GetStarted, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    },
    {
      path: '/about/what-is',
      name: 'what-is',
      components: { default: About_WhatIs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'primary' }
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
