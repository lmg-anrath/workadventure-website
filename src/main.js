import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Redirect from './components/Redirect.vue'
import Map from './components/Map.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Redirect,
            beforeEnter() {
                window.location.href = 'https://www.lmg-anrath.de/workadventure/';
            }
        },
        {
            path: '/map',
            component: Map
        }
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
