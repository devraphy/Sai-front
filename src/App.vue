<template>
  <div class="wrapper d-flex flex-row">
    <div class="left-container">
      <RouterView name="sidebar" class="sidebar" />
    </div>
    <div class="right-container">
      <RouterView name="header" />
      <div class="right-content-wrapper">
        <RouterView />
        <RouterView name="footer" />
      </div>
    </div>
    <a
      class="scroll-to-top rounded"
      href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import * as jQuery from './assets/vendor/jquery/jquery.min.js'
import * as jQueryEasing from './assets/vendor/jquery-easing/jquery.easing.min.js'
import * as jQueryDataTable from './assets/vendor/datatables/jquery.dataTables.min.js'
import * as BootStrap from './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import * as DataTableBootStrap from './assets/vendor/datatables/dataTables.bootstrap4.min.js'
import * as SbAdminScript from './assets/js/sb-admin-2.min.js'

import Sidebar from './components/navbar/Sidebar'
import Footer from './components/navbar/Footer'
import Header from './components/navbar/Header'

export default {
  components: {
    Header,
    Sidebar,
    Footer
  },
}
</script>

<style lang="scss">
@import "./scss/main.scss"; // main.scss 사용
@import "./assets/css/sb-admin-2.css";

.left-container {
  min-height:100vh;
}
.right-container {
  // border:1px solid green;
  width:100%;
  min-height:100vh; // 이거 고치려고 했다. notfound 들어가서 확인해봐라 
}
</style>