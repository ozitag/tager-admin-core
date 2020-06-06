import Vue from 'vue';
import VueRouter from 'vue-router';

import '@/assets/css/index.css';

import BaseLayout from '@/components/BaseLayout.vue';
import { configStore } from '@/services';
import { BASE_PATH } from '@/constants/common';

const TEST_CONFIG = {
  APP_NAME: 'OZiTAG_ADMIN',
  TITLE_TEMPLATE: 'OZiTAG Admin - {{title}}',
  LANGUAGE: 'EN',
  BRAND: {
    small: {
      logo: 'logo-small.svg',
      label: 'OZi',
      'label-color': '#DD6900'
    },
    large: {
      logo: 'logo.svg',
      label: 'OZiTAG',
      'label-color': '#DD6900'
    }
  },
  SPLASH_SCREEN: {
    enabled: true,
    logo: 'logo.svg',
    background: '#1e1e1e'
  }
};

configStore.setConfig(TEST_CONFIG);

const router = new VueRouter({
  mode: 'history',
  base: BASE_PATH,
  routes: []
});

new Vue({
  router,
  render: h => h(BaseLayout)
}).$mount('#app');
