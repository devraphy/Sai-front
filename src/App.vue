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
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>

<style lang="scss">
@import "~/scss/main"; // main.scss 사용

.left-container {
  // border: 1px solid red;
  margin-right: 5%;
}

.right-container {
  // border:1px solid green;
  width:75%;
}
</style>