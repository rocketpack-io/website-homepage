<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="https://github.com/rocketpack-io">
              <i class="fab fa-github"></i>
              github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/rocketpack-io">
              <i class="fab fa-linkedin"></i>
              linkedin
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <span style="color: #e25555;">❤</span> from developers for developers.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
