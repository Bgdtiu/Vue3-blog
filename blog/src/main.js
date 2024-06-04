import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {router} from "./router/router.js";
import {createPinia} from "pinia";
import VueLazyload from "vue-lazyload";

let app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueLazyload, {
    preLoad: 1.3,
    error: 'src/assets/image/imgError.gif',
    loading: 'src/assets/image/imgLoading.gif',
    attempt: 1,
})


app.mount('#app');
