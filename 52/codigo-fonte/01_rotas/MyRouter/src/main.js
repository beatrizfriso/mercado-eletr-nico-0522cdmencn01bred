import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/sobre',
            component: About
        }
    ]
})

const app = createApp(App)

app.use(router)

app.mount('#app')
