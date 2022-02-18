import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { 
            path: '/', 
            component: () => import('views/home/home.vue'),
            meta: { title: 'home page' }
        },
        { 
            path: '/room', 
            component: () => import('views/room/room.vue'),
            meta: { title: 'room management page' }
        }
    ]
});

export default router;
