import Vue from 'vue';
import VueRouter from 'vue-router';

import '@/assets/css/index.css';

import BaseLayout from '@/components/BaseLayout.vue';
import { api, configStore } from '@/services';
import { BASE_PATH } from '@/constants/common';

const TEST_CONFIG = {
  APP_NAME: 'PresetBox',
  TITLE_TEMPLATE: 'PresetBox Admin - {{title}}',
  LANGUAGE: 'EN',
  BRAND: {
    small: {
      'logo-ext': 'svg',
      name: null,
      'name-color': null
    },
    large: {
      'logo-ext': 'svg',
      name: 'Preset Box',
      'name-color': '#0b2525'
    }
  },
  IS_SPLASH_SCREEN_ENABLED: true
};

configStore.setConfig(TEST_CONFIG);
api.setApiOrigin('https://presetbox.dev.ozitag.com');

const router = new VueRouter({
  mode: 'history',
  base: BASE_PATH,
  routes: []
});

new Vue({
  router,
  render: h => h(BaseLayout)
}).$mount('#app');
