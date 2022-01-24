import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/Login', component: Login},
]


export default createRouter({
    history: createWebHistory(),
    routes,
})