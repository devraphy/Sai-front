import {createApp} from 'vue'
import App from './App'
import router from './routes/router.js'

createApp(App)
.use(router)
.mount('#app')