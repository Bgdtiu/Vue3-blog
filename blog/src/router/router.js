import {createRouter, createWebHashHistory} from "vue-router";

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home/frontPage',
        },
        {
            path: '/home',
            component: () => import('/src/views/homeChildren/Home.vue'),
            children: [
                {
                    path: '/home/frontPage',
                    component: () => import('/src/views/homeChildren/FrontPage.vue'),
                },
                {
                    path: '/home/articleContent/:id',
                    component: () => import('/src/views/homeChildren/articleContent.vue'),
                }
            ]
        }
    ]
});
