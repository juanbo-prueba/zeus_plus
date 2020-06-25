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
    },
    {
        path: '/cumplimientoFucionario/seguimientoFuncionarioCliente',
        name: 'seguimiento de ventas a cliente',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoClientesVentas')
    },
    {
        path: '/cumplimientoFucionario/seguimientoAnalisisCliente/:codCliente',
        name: 'seguimientoAnalisisCliente',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoAnalisisCliente'),
        redirect: {
            name: 'route.details'
        },
        children: [
            { alias: '',
              path: 'details',
              name: 'route.details',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/comportamientoVentasCliente'),
            },
            { path: 'secondary',
                name: 'route.secondary',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/ventasPorLineaVentaDeCliente'),
            },

        ]
    }
]

const router = new VueRouter({
    routes
})

export default router

