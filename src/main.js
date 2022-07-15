import 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from './mixins'

createApp(App)
.mixin(mixins)
.use(store)
.use(router)
.mount('#app');

window.Kakao.init('4f117a4b68dbaa7046253d5074e266ca');
