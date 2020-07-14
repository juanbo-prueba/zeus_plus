<template>
    <div>
        <div class="profile-content vertical-box with-grid bg-white p-t-5">
            <!-- begin tab-content -->
            <div class="tab-content p-0">

                <h3 class="m-t-0 m-b-15 f-w-500">Dashboard Funcionario</h3>

                <fecha-actualizacion-ventas-vertical></fecha-actualizacion-ventas-vertical>

                <kpi-cumplimiento-fucionario></kpi-cumplimiento-fucionario>

                <div class="card border-grey m-b-10">

                    <div class="m-10">
                        <h4 class="title text-blue-darker">Graficos de comportamiento de ventas del cliente.</h4>
                        <p class="location">Los graficos muestran datos de ventas y cobranzas agrupados por mes de los ultimos 20 meses.</p>
                    </div>

                    <div class="container">
                        <!--<ul class="nav nav-pills justify-content-center">-->
                        <ul class="nav nav-pills">
                            <li class="nav-item" v-on:click="tab = 1">
                                <router-link :to="{ name: 'route.cumplimientoFucionarioLineaVenta' }" class="btn btn-default m-r-3 " v-bind:class="{ 'active': tab === 1 }" >Linea de venta BPH y COFAR</router-link>
                            </li>
                            <li class="nav-item"  v-on:click="tab = 2">
                                <router-link :to="{ name: 'route.cumplimientoFucionarioLineaMktBPH' }" class="btn btn-default m-r-3"  v-bind:class="{ 'active': tab === 2 }">Linea de Marketing BPH</router-link>
                            </li>
                            <li class="nav-item"  v-on:click="tab = 3">
                                <router-link :to="{ name: 'route.cumplimientoFucionarioLineaMktCOFAR' }" class="btn btn-default m-r-3"  v-bind:class="{ 'active': tab === 3 }">Lineas de Marketing COFAR</router-link>
                            </li>
                        </ul>
                    </div>
                    <br/>

                    <router-view/>


                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageOptions from '../../config/PageOptions'
    import accounting from 'accounting'
    import Vue from 'vue'

    import KpiCumplimientoFucionario from "@/components/presupuestoFuncionario/dashboardFuncionarioCumplimiento/kpiCumplimientoFucionario";
    import FechaActualizacionVentasVertical from "@/components/presupuestoFuncionario/fechaActualizacionVentasVertical";

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor,"", 0, ".", ",");
    })

    export default {
        name: "seguimientoDashboardFuncionario",
        components: { KpiCumplimientoFucionario, FechaActualizacionVentasVertical },
        data() {
            return {
                tab: 1,
            }
        },
        created() {
            PageOptions.pageContentFullWidth = true;
        },
        beforeRouteLeave(to, from, next) {
            PageOptions.pageContentFullWidth = false;
            next();
        },
    }
</script>

<style scoped>

</style>