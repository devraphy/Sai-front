<template>
  <div class="wrapper d-flex flex-row">
    <div class="left-container">
      <Sidebar class="sidebar" />
    </div>
    <div class="right-container">
      <Header />
      <RouterView />
      <Footer />
    </div>
    <a
      class="scroll-to-top rounded"
      href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Sidebar from './components/navbar/Sidebar'
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'

export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss">
@import "./scss/main.scss"; // main.scss 사용

// .left-container {
//   // border: 1px solid red;
// }

.right-container {
  // border:1px solid green;
  width:100%;
}
</style>