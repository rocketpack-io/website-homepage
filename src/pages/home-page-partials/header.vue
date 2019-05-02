<template>
    <div class="page-header clear-filter">
      <!-- <parallax
        class="page-header-image"
        style="background-image:url('img/header.jpg')"
      >
      </parallax> -->
      <div class="container">
        <div class="d-flex align-items-center">
          <img class="hero-img" src="img/ide_welcome.png" />
          <div class="hero-text">
            <!-- <img class="n-logo" src="img/now-logo.png" alt="" /> -->
            <h1 class="h1-seo" v-text-scramble="scrableConfig">rocketpack</h1>
            <h3 class="mb-2">base solution for your next application</h3>
            <p>
              rocketpack is a BaaS (Backend as a Service) cloud infrastructure for developers who need to cover their backend needs.
            </p>
            <div>
              <a class="btn btn-white" href="/#/get-started">Get Started</a>
              <a class="btn btn-danger" href="//console.rocketpack.io/">Developer Console</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Parallax } from '@/components';
export default {
    components: {
        Parallax,
    },
    data: () => ({
      scrableConfig: {
        phrases: [ 'rocketpack' ],
        delay: 5000
      }
    })
}
</script>
