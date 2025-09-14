import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueGtm from '@gtm-support/vue-gtm';
import { createHead } from '@vueuse/head';
// import FrontLayout from '@/js/layouts/FrontLayout.vue';
import App from '@/js/App.vue';
import router from '@/js/router';
import '@/scss/main.scss';
const app = createApp(App);
const head = createHead();
app.use(head);
app.use(VueGtm, {
    id: 'GTM-5V4XNM9W', // tu ID de GTM
    vueRouter: router, // opcional: si quieres rastrear las páginas
    enabled: true,     // puedes deshabilitar en dev si quieres
    debug: true,       // logs en consola
})
app.use(createPinia());
app.use(router);
app.mount('#app');
