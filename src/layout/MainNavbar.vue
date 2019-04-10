<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link class="navbar-brand" to="/">
        rocketpack
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <router-link class="nav-link" to="/">
          <p>Home</p>
        </router-link>
      </li>
      <drop-down
        tag="li"
        title="About"
        class="nav-item"
      >
        <nav-link to="/about/what-is">
          What is RocketPack
        </nav-link>
        <nav-link to="/about/where-to-use">
          Where to use RocketPack
        </nav-link>
        <nav-link to="/about/ecosystem">
          RocketPack Ecosystem
        </nav-link>
        <nav-link to="/about/ecosystem">
          RocketPack For Enterprises
        </nav-link>
        <nav-link to="/about/ecosystem">
          RocketPack Team
        </nav-link>
      </drop-down>

      <!-- <drop-down
        tag="li"
        title="Features"
        class="nav-item"
      >
        <nav-link to="/about/what-is">
          Data Service
        </nav-link>
        <nav-link to="/about/where-to-use">
          Authentication Service
        </nav-link>
        <nav-link to="/about/ecosystem">
          Function Service
        </nav-link>
      </drop-down> -->

      <li class="nav-item">
        <router-link class="nav-link" to="/get-started">
          <p>Get Started</p>
        </router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="//docs.rocketpack.io/">
          <p>Documents</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link btn btn-neutral"
          href="https://console.rocketpack.io/"
          target="_blank"
        >
          <p>Developer Console</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="github page"
          data-placement="bottom"
          href="https://github.com/rocketpack-io"
          target="_blank"
        >
          <i class="fab fa-github"></i>
          <p class="d-lg-none d-xl-none">github</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="check out our linkedin page"
          data-placement="bottom"
          href="https://www.linkedin.com/company/rocketpack-io"
          target="_blank"
        >
          <i class="fab fa-linkedin-in"></i>
          <p class="d-lg-none d-xl-none">linkedin</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';
export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style scoped></style>
