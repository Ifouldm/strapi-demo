import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/Portfolio.vue';
import ProjectDetails from '../views/ProjectDetails.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio/:id',
        name: 'ProjectDetails',
        component: ProjectDetails,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
