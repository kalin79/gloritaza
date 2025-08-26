import { createRouter, createWebHistory } from 'vue-router';


import Home from '@/js/pages/Home.vue';

import NotFound from '@/js/pages/NotFound.vue';



const routes = [
    { path: '/', component: Home },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]




const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Siempre hacer scroll al inicio al cambiar de ruta
        return { top: 0 }
    }
});


export default router;