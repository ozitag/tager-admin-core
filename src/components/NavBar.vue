<template>
  <div v-bind:class="['navbar', { 'sidebar-collapsed': isSidebarCollapsed }]">
    <div class="navbar-inner">
      <div class="left-block">
        <base-button variant="icon" v-on:click="toggleSidebar">
          <svg-icon name="menu" />
        </base-button>

        <div class="breadcrumbs">
          <ul>
            <li
              v-for="(breadcrumb, index) of breadcrumbList"
              v-bind:key="index"
            >
              <router-link
                exact
                active-class="active"
                v-bind:to="breadcrumb.path"
              >
                {{ breadcrumb.label }}
              </router-link>
              <svg-icon name="chevronRight" />
            </li>
          </ul>
        </div>
      </div>

      <div>
        <span class="user-name">{{ userName }}</span>
        <base-button
          variant="outline-secondary"
          v-on:click="logout"
          v-bind:loading="isSignOutInProgress"
        >
          {{ $t('logout') }}
        </base-button>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Vue from 'vue';

import { api, RequestError } from '@/services';
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';

function signOut() {
  return api.post({ path: '/self/logout' });
}

export default Vue.extend({
  components: { SvgIcon, 'base-button': Button },
  props: {
    isSidebarCollapsed: Boolean,
    userName: String
  },
  data() {
    return {
      isSignOutInProgress: false
    };
  },
  computed: {
    breadcrumbList() {
      const routeMeta = this.$route?.meta;
      return routeMeta?.getBreadcrumbs
        ? routeMeta.getBreadcrumbs(this.$route)
        : [];
    }
  },
  methods: {
    logout() {
      const handleError = () => {
        this.$toast({
          variant: 'danger',
          title: 'Error',
          body: 'Server error'
        });
        this.isSignOutInProgress = false;
      };

      this.isSignOutInProgress = true;

      signOut()
        .then(response => {
          if (response.success) {
            localStorage.removeItem('accessToken');
            window.location.href = '/admin/auth';
          } else {
            handleError();
          }
        })
        .catch(error => {
          console.error(error);

          if (error instanceof RequestError && error.status.code === 401) {
            window.location.href = '/admin/auth';
          } else {
            handleError();
          }
        });
    },
    toggleSidebar() {
      this.$emit('sidebar:toggle');
    }
  }
});
</script>

<style scoped lang="scss">
.navbar {
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
  display: block;
  margin-bottom: 0;
  padding: 0;
  position: fixed;
  transition: width 0.3s linear;
  width: calc(100% - 280px);
  z-index: 800;

  &.sidebar-collapsed {
    width: calc(100% - 70px);
  }
}

.navbar-inner {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-block {
  display: flex;
  align-items: center;
}

.breadcrumbs {
  margin-left: 2rem;

  ul {
    display: flex;
  }

  li {
    display: inline-flex;
    align-items: center;
    line-height: 1.5rem;

    a {
      &:hover:not(.active) {
        text-decoration: underline;
      }

      &.active {
        cursor: default;
      }
    }

    &:last-child {
      svg {
        display: none;
      }
    }

    svg {
      margin: 0 0.3rem;
    }
  }
}

.user-name {
  font-weight: 600;
  margin-right: 2rem;
}
</style>
