<template>
  <div>
    <toast-provider />

    <splash-screen
      v-show="isSplashScreenVisible"
      :config="splashScreenConfig"
    />
    <div v-show="!isSplashScreenVisible">
      <sidebar
        :is-collapsed="isSidebarCollapsed"
        :menu-item-list="sidebarMenuList"
        :brand-config="brandConfig"
      />
      <div
        :class="['page-container', { 'sidebar-collapsed': isSidebarCollapsed }]"
      >
        <navbar
          :is-sidebar-collapsed="isSidebarCollapsed"
          :user-name="userName"
          @sidebar-toggle="handleSidebarToggle"
        ></navbar>
        <main class="main">
          <slot></slot>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

import ToastPlugin, { ToastProvider } from '@/components/Toast';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/NavBar.vue';
import SplashScreen from '@/components/SplashScreen.vue';
import { api, configStore, RequestError } from '@/services';
import { TranslatePlugin } from '@/i18n';
import { isProduction, removeTokenAndRedirectToLogin } from '@/utils/common';

function getProfile() {
  return api.get({ path: '/self' });
}

Vue.use(ToastPlugin);
Vue.use(TranslatePlugin);

export default Vue.extend({
  name: 'BaseLayout',
  components: { Sidebar, Navbar, ToastProvider, SplashScreen },
  props: {
    sidebarMenuList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    const isSidebarCollapsed =
      localStorage.getItem('isSidebarCollapsed') === 'true';
    const config = configStore.getConfig();

    return {
      isSidebarCollapsed,
      profile: null,
      isLoading: true,
      isSplashScreenEnabled: Boolean(config.SPLASH_SCREEN?.enabled),
      isTimeoutInProgress: false
    };
  },
  computed: {
    splashScreenConfig() {
      return configStore.getConfig().SPLASH_SCREEN;
    },
    brandConfig() {
      return configStore.getConfig().BRAND;
    },
    userName() {
      return this.profile?.name ?? '';
    },
    isSplashScreenVisible() {
      return (
        this.isSplashScreenEnabled &&
        (this.isTimeoutInProgress || this.isLoading)
      );
    }
  },
  mounted() {
    getProfile()
      .then(response => {
        this.profile = response.data;
        this.isLoading = false;
      })
      .catch(error => {
        console.error(error);

        if (
          error instanceof RequestError &&
          error.status.code === 401 &&
          isProduction()
        ) {
          removeTokenAndRedirectToLogin();
        } else {
          this.isLoading = false;

          this.$toast({
            variant: 'danger',
            title: 'Error',
            body: 'Server error'
          });
        }
      });

    if (this.isSplashScreenEnabled) {
      this.isTimeoutInProgress = true;
      setTimeout(() => {
        this.isTimeoutInProgress = false;
      }, 3000);
    }
  },
  methods: {
    handleSidebarToggle() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      localStorage.setItem(
        'isSidebarCollapsed',
        String(this.isSidebarCollapsed)
      );
    }
  }
});
</script>

<style scoped lang="scss">
.page-container {
  position: relative;
  min-height: 100vh;
  transition: all 0.3s linear;
  padding-left: 280px;
  z-index: 1;

  &.sidebar-collapsed {
    padding-left: 70px;
  }
}

.main {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 85px 20px 20px;
  display: flex;
  flex-direction: column;
}
</style>
