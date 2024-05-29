import {createRouter, createWebHashHistory} from "vue-router";

export const router =  createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('/src/views/Home.vue'),
        }
    ]
});
