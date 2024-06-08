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
                    component: () => import('/src/views/homeChildren/ArticleContent.vue'),
                },
                {
                    path: '/home/classify',
                    component: () => import('/src/views/homeChildren/Classify.vue'),
                },
                {
                    path: '/home/tag',
                    component: () => import('/src/views/homeChildren/Tag.vue'),
                },
                {
                    path: '/home/photo',
                    component: () => import('/src/views/homeChildren/Photo.vue'),
                },
                {
                    path: '/home/pigeonhole',
                    component: () => import('/src/views/homeChildren/Pigeonhole.vue'),

                }
            ]
        },
        {
            path: '/login',
            component: () => import('/src/views/homeChildren/Login.vue'),
        }
    ]
});
