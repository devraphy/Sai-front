import {createApp} from 'vue'
import App from './App'
import router from './routes/index.js'

import * as jQuery from './assets/vendor/jquery/jquery'
import * as jQueryEasing from './assets/vendor/jquery-easing/jquery.easing'
import * as sbadmin from './assets/js/sb-admin-2'
import * as bootBundle from './assets/vendor/bootstrap/js/bootstrap.bundle'
import * as dbjQuery from './assets/vendor/datatables/jquery.dataTables'
import * as dbBoot from './assets/vendor/datatables/dataTables.bootstrap4'
import * as dbDemo from './assets/js/demo/datatables-demo'


createApp(App)
.use(router)
.mount('#app')
.loadScript(jQuery, jQueryEasing, bootBundle, sbadmin, dbjQuery, dbBoot, dbDemo)
// Vue 전체 사이클 이해할 것. 언제 JS 로딩되는지 알아야함. 
