import {createApp} from 'vue'
import App from './App'
import router from './routes/index.js'

// import * as jQuery from './assets/vendor/jquery/jquery'
// import * as jQueryEasing from './assets/vendor/jquery-easing/jquery.easing'
// import * as sbadmin from './assets/js/sb-admin-2'
// import * as bootBundle from './assets/vendor/bootstrap/js/bootstrap.bundle'
// import * as dbjQuery from './assets/vendor/datatables/jquery.dataTables'
// import * as dbBoot from './assets/vendor/datatables/dataTables.bootstrap4'
// import * as dbDemo from './assets/js/demo/datatables-demo'


createApp(App)
.use(router)
.mount('#app')
