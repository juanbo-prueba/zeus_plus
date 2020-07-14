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
        name: 'route.listadoSegumientoClientes',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoClientesVentas')
    },
    {
        path: '/cumplimientoFucionario/seguimientoAnalisisCliente/:codCliente',
        name: 'seguimientoAnalisisCliente',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoAnalisisCliente'),
        redirect: {
            name: 'route.ventascobranzas'
        },
        children: [
            { alias: '',
              path: 'details',
              name: 'route.ventascobranzas',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/comportamientoVentasCliente'),
            },
            { path: 'secondary',
                name: 'route.ventaslineaventa',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/ventasPorLineaVentaDeCliente'),
            },
            { path: 'ventasLineasBphCliente',
                name: 'route.ventaslineasMktBphCliente',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/ventasPorLineaDeMktBPHCliente'),
            },
            { path: 'ventasLineasCofarCliente',
                name: 'route.ventaslineasMktCofarCliente',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/analisisClientes/ventasPorLineaDeMktCofarCliente'),
            },

        ]
    },
    {
        path: '/cumplimientoFucionario/seguimientoDashboardFuncionario',
        name: 'route.dashboarFuncionarioCumplimiento',
        component: () => import(/* webpackChunkName: "todos-update" */ '@/pages/cumplimientoFucionario/seguimientoDashboardFuncionario'),
        redirect: {
            name: 'route.cumplimientoFucionarioLineaVenta'
        },
        children: [
            { alias: '',
                path: 'cumplimientoFucionarioLineaVenta',
                name: 'route.cumplimientoFucionarioLineaVenta',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/dashboardFuncionarioCumplimiento/cumplimientoFuncionarioLineaVenta'),
            },
            { alias: '',
                path: 'cumplimientoFucionarioLineaMktBPH',
                name: 'route.cumplimientoFucionarioLineaMktBPH',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/dashboardFuncionarioCumplimiento/cumplimientoFuncionarioLineaMktBPH'),
            },
            { alias: '',
                path: 'cumplimientoFucionarioLineaMktCOFAR',
                name: 'route.cumplimientoFucionarioLineaMktCOFAR',
                component: () => import(/* webpackChunkName: "todos-update" */ '@/components/presupuestoFuncionario/dashboardFuncionarioCumplimiento/cumplimientoFuncionarioLineaMktCOFAR'),
            },
        ]
    },
]

const router = new VueRouter({
    routes
})

export default router

