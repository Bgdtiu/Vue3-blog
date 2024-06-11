import {createRouter, createWebHashHistory} from "vue-router";
import {systemStore} from "../store/SystemStore.js";

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
        },
        {
            path: '/system',
            component: () => import('/src/views/system/System.vue'),
            redirect: '/system/dashboard',
            children: [
                {
                    path: '/system/dashboard',
                    component: () => import('/src/views/system/Dashboard.vue'),

                },
                {
                    path: '/system/articleManagement',
                    component: () => import('/src/views/system/ArticleManagement.vue'),

                },
                {
                    path: '/system/classificationManagement',
                    component: () => import('/src/views/system/ClassificationManagement.vue'),

                },
                {
                    path: '/system/tagManagement',
                    component: () => import('/src/views/system/TagManagement.vue'),

                },
                {
                    path: "/system/pictureManagement",
                    component: () => import('/src/views/system/PictureManagement.vue'),
                }
            ]
        }
    ]
});

router.beforeEach((to, from, next) => {
    let path = to.path;
    let pathArr = to.path.split('/');

    if (pathArr[1] === 'system') {
        let status = -1;
        systemStore().$state.horizontalMenu.forEach(h => {
            if (h.path === path) {
                status = 1;
            }
        });

        if (status === -1) {
            systemStore().$state.verticalMenu.forEach(v => {
                if (v.path === path) {
                    systemStore().$state.horizontalMenu.push({
                        name: v.name,
                        path: v.path
                    })
                }
            });
        }
    }

    next();
});
