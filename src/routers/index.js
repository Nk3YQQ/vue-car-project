import { createRouter, createWebHistory } from "vue-router";
import Register from "@/components/RegisterView.vue";
import Login from "@/components/LoginView.vue";
import HomePage from "@/components/HomePage.vue";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;