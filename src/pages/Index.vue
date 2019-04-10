<template>
  <div class="index-page">
    <HeaderSection />
    <AboutSection />
    <WhenToUseSection />
    <WhereToUseSection />
    <FeaturesSection />
    <DocumentsSection />
    <FaqSection />
    
    <!-- <basic-elements></basic-elements> -->
    <!-- <navigation></navigation>
    <tabs-section></tabs-section>
    <progress-pagination></progress-pagination>
    <notifications></notifications>
    <typography></typography>
    <javascript-components></javascript-components>
    <carousel-section></carousel-section>
    <nucleo-icons-section></nucleo-icons-section>
    <div class="section">
      <div class="container text-center">
        <div class="row justify-content-md-center">
          <div class="col-md-12 col-lg-8">
            <h2 class="title">Completed with examples</h2>
            <h5 class="description">
              The kit comes with three pre-built pages to help you get started
              faster. You can change the text and images and you're good to go.
              More importantly, looking at them will give you a picture of what
              you can built with this powerful Bootstrap 4 ui kit.
            </h5>
          </div>
        </div>
      </div>
    </div>
    <signup-form></signup-form>
    <examples-section></examples-section>
    <download-section></download-section> -->
  </div>
</template>
<script>
// import BasicElements from './components/BasicElementsSection';
// import Navigation from './components/Navigation';
// import TabsSection from './components/Tabs';
// import ProgressPagination from './components/ProgressPagination';
// import Notifications from './components/Notifications';
// import Typography from './components/Typography';
// import JavascriptComponents from './components/JavascriptComponents';
// import CarouselSection from './components/CarouselSection';
// import NucleoIconsSection from './components/NucleoIconsSection';
// import SignupForm from './components/SignupForm';
// import ExamplesSection from './components/ExamplesSection';
// import DownloadSection from './components/DownloadSection';
import HeaderSection from './home-page-partials/header';
import AboutSection from './home-page-partials/about';
import WhenToUseSection from './home-page-partials/when-to-use';
import WhereToUseSection from './home-page-partials/where-to-use';
import FeaturesSection from './home-page-partials/features';
import DocumentsSection from './home-page-partials/documents';
import FaqSection from './home-page-partials/faq';

export default {
  name: 'index',
  bodyClass: 'index-page',
  components: {
    // BasicElements,
    // Navigation,
    // TabsSection,
    // ProgressPagination,
    // Notifications,
    // Typography,
    // JavascriptComponents,
    // CarouselSection,
    // NucleoIconsSection,
    // SignupForm,
    // ExamplesSection,
    // DownloadSection,
    HeaderSection,
    AboutSection,
    WhenToUseSection,
    WhereToUseSection,
    FeaturesSection,
    DocumentsSection,
    FaqSection
  }
};
</script>
<style></style>
