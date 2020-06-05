<template>
  <aside
    v-bind:class="['sidebar', { collapsed: isCollapsed, hovered: isHovered }]"
  >
    <div class="sidebar-inner">
      <div class="sidebar-top">
        <div v-if="shouldDisplayLogo" class="logo-container">
          <img v-bind:src="logoUrl" alt="" />
        </div>
        <span
          v-if="shouldDisplayBrandName"
          class="sidebar-top-title"
          v-bind:style="{ color: brandNameColor }"
        >
          {{ brandName }}
        </span>
      </div>
      <ul
        class="menu-list"
        v-on:mouseover="handleMouseOver"
        v-on:mouseleave="handleMouseLeave"
      >
        <li
          v-for="menuItem in menuItemList"
          v-bind:key="menuItem.id"
          v-bind:class="[
            'menu-item',
            { active: isMenuItemActive(menuItem.id) }
          ]"
          v-bind:data-expanded="Boolean(menuItem.isOpen)"
        >
          <component
            class="menu-link"
            v-bind:is="menuItem.children ? 'button' : 'router-link'"
            v-bind:to="menuItem.children ? undefined : menuItem.path"
            v-on:click="
              menuItem.children ? toggleMenuItem(menuItem.id) : undefined
            "
          >
            <span class="menu-link-icon-container">
              <svg-icon v-bind:name="menuItem.icon" />
            </span>
            <span class="menu-link-name">{{ menuItem.name }}</span>
            <span
              class="arrow-icon-container"
              v-show="Array.isArray(menuItem.children)"
            >
              <svg-icon name="expandMore" />
            </span>
          </component>
          <ul class="child-menu-list" v-if="Array.isArray(menuItem.children)">
            <li
              class="child-menu-item"
              v-for="childItem of menuItem.children"
              v-bind:key="childItem.path"
            >
              <router-link
                active-class="active"
                class="child-menu-link"
                v-bind:to="childItem.path"
                exact
              >
                {{ childItem.name }}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script lang="js">
import Vue from 'vue';

import { BASE_PATH } from '@/constants/common';
import SvgIcon from '@/components/SvgIcon.vue';

export default Vue.extend({
  components: { SvgIcon },
  props: {
    isCollapsed: {
      type: Boolean,
      required: true
    },
    menuItemList: {
      type: Array,
      required: true
    },
    brandConfig: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false
    };
  },
  computed: {
    logoUrl() {
      if (this.isCollapsed && !this.isHovered) {
        return this.brandConfig.small['logo-ext']
          ? BASE_PATH + '/logo-small.' + this.brandConfig.small['logo-ext']
          : '';
      } else {
        return this.brandConfig.large['logo-ext']
          ? BASE_PATH + '/logo.' + this.brandConfig.large['logo-ext']
          : '';
      }
    },
    brandName() {
      if (this.isCollapsed && !this.isHovered) {
        return this.brandConfig.small.name ?? '';
      } else {
        return this.brandConfig.large.name ?? '';
      }
    },
    brandNameColor() {
      if (this.isCollapsed && !this.isHovered) {
        return (
          this.brandConfig.small['name-color'] ??
          this.brandConfig.large['name-color'] ??
          undefined
        );
      } else {
        return (
          this.brandConfig.large['name-color'] ??
          this.brandConfig.small['name-color'] ??
          undefined
        );
      }
    },
    shouldDisplayLogo() {
      return Boolean(this.logoUrl);
    },
    shouldDisplayBrandName() {
      if (this.isCollapsed && !this.isHovered) {
        return !this.shouldDisplayLogo && Boolean(this.brandName);
      } else {
        return Boolean(this.brandName);
      }
    }
  },
  methods: {
    handleMouseOver() {
      this.isHovered = true;
    },
    handleMouseLeave() {
      this.isHovered = false;
    },
    toggleMenuItem(itemId) {
      console.log('toggleMenuItem', itemId);
      const foundItem = this.menuItemList.find(
        menuItem => menuItem.id === itemId
      );

      if (foundItem) {
        foundItem.isOpen = !foundItem.isOpen;
      }
    },
    isMenuItemActive(itemId) {
      const foundItem = this.menuItemList.find(
        menuItem => menuItem.id === itemId
      );

      if (!foundItem) return false;

      return foundItem.children
        ? foundItem.children.some(
            childItem => childItem.path === this.$route.path
          )
        : foundItem.path === this.$route.path;
    }
  }
});
</script>

<style scoped lang="scss">
.sidebar {
  background-color: #fff;
  bottom: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  transition: width 0.3s linear;
  width: 280px;
  z-index: 1000;

  &.collapsed:not(.hovered) {
    width: 70px;

    .sidebar-top {
      width: 70px;
      border-bottom: 1px solid transparent;
      justify-content: center;
    }

    .sidebar-top-title {
      text-align: center;
      margin-left: 0;
    }

    .menu-item[data-expanded='true'] .child-menu-list,
    .menu-link-name,
    .arrow-icon-container {
      display: none;
    }

    .menu-link-icon-container {
      margin-right: 0;
    }
  }
}

.sidebar-inner {
  position: relative;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.0625);
}

.sidebar-top {
  border-bottom: 1px solid rgba(0, 0, 0, 0.0625);
  line-height: 0;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  white-space: nowrap;

  height: 66px;
}

.logo-container {
  height: calc(70px - 1rem);
  width: auto;
  flex-shrink: 0;
  max-width: 100%;
  margin: 0 auto;

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }
}

.logo {
  vertical-align: middle;
}

.sidebar-top-title {
  display: block;
  text-align: center;

  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;
  margin-left: 1rem;
  flex: 1;
}

.menu-list {
  list-style-type: none;
  height: calc(100vh - 65px);
  padding: 30px 0 0;
  overflow: auto;
}

.menu-item {
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &.active {
    background-color: #d5fafe;

    .menu-link {
      font-weight: 600;
    }
  }

  &[data-expanded='true'] {
    .arrow-icon-container svg {
      transform: rotate(180deg);
    }

    .child-menu-list {
      display: block;
    }
  }
}

.menu-link {
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 500;
  color: #666;
  padding: 5px 30px 5px 15px;
  position: relative;
  white-space: nowrap;
  min-width: 1px;

  &:hover {
    color: #333;
    text-decoration: none;
  }
}

.menu-link-name {
  font-size: 1rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.menu-link-icon-container {
  width: 35px;
  height: 35px;
  margin-right: 1rem;
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    display: block;
  }
}

.arrow-icon-container {
  margin-left: auto;

  svg {
    transition: transform 0.1s ease-in;
    display: block;
  }
}

.child-menu-list {
  display: none;
  padding-left: 50px;
}

.child-menu-item {
}

.child-menu-link {
  display: block;
  color: #888;
  padding: 10px 15px;
  white-space: nowrap;
  font-size: 0.95rem;

  &:hover {
    color: #555;
    text-decoration: underline;
  }

  &.active {
    color: #555;
    font-weight: 500;
    text-decoration: underline;
  }
}
</style>
