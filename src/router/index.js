import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home';
import UserLoginV3 from '@/pages/User-login-v3.vue';
import AdmClientesHome from '@/pages/clientes/AdmClientes.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/', name: 'Home', component: Home
    },
    {
        path: '/login', name: 'Login', component: UserLoginV3
    },
    {
        path: '/clientes', name: 'Clientes', component: AdmClientesHome
    },
    {
        path: '/cumplimientoFucionario/dashboard',
        name: 'dashboard-funcionario',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/DashboardFucionario.vue')
    },
    {
        path: '/cumplimientoFucionario/seguimientoCliente',
        name: 'seguimiento cliente',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoClienteFuncionario')
    }
]

const router = new VueRouter({
    routes
})

export default router

