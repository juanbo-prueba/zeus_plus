<template>
    <div>

        <!-- begin card -->
        <div class="card border-grey m-b-10">
            <div class="m-10 text-grey-darker"><b>SEGUIMIENTO DE CLIENTES</b> <span class="ml-2">
                                        <i class="fa fa-info-circle" title="Top products with units sold"
                                           v-b-popover.hover="'Informacion de clientes asignados al funcionario.'"></i></span>
            </div>
            <div class="card-body p-0">
                <ul class="profile-header-tab nav nav-tabs">
                    <li class="nav-item"><a href="javascript:;" v-on:click="showGrafico('lineaMkt')" v-bind:class="{ 'active': tab.lineaMkt }" class="nav-link" data-toggle="tab">Linea de Marketing</a></li>
                    <li class="nav-item"><a href="javascript:;" v-on:click="showGrafico('lineaVenta')" v-bind:class="{ 'active': tab.lineaVenta }" class="nav-link" data-toggle="tab">Linea de venta</a></li>
                </ul>
                <div  class="widget-chart-full-width nvd3-inverse-mode" >
                    <div class="profile-content">
                        <!-- begin tab-content -->
                        <div class="tab-content p-0">
                            <div class="tab-pane fade" v-bind:class="{ 'show active': tab.lineaMkt }">



                                <div class="vertical-box with-grid with-border-top">
                                        <grafico-apex-chart :options="columnChart.options" :series="columnChart.series"></grafico-apex-chart>
                                </div>
                            </div>
                            <!-- begin #profile-about tab -->
                            <div class="tab-pane fade" v-bind:class="{ 'show active': tab.lineaVenta }">
                                <!-- begin table -->
                                <div class="table-responsive form-inline">
                                    Lineas de ventas
                                </div>
                                <!-- end table -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end card -->



    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';
    import GraficoApexChart from "@/components/presupuestoFuncionario/graficoApexChart";

    export default {
        name: "kpiGraficoPromotorLineas",
        components: {GraficoApexChart},
        data(){
            return {
                tab: {
                    lineaMkt: true,
                    lineaVenta: false
                },

            }
        },

        mounted() {

            this.cargarGraficoCumplimientoFucionarioLineaMkt(
                {
                    codPersonal: this.datosUsuario.usuario.id,
                    codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
                }
            );
        },

        methods: {
            ...mapActions('seguimientoClienteKpiGraficos',['cargarGraficoCumplimientoFucionarioLineaMkt']),
            showGrafico: function(x) {
                this.tab.lineaMkt = false;
                this.tab.lineaVenta = false;
                switch (x) {
                    case 'lineaVenta':
                        this.tab.lineaVenta = true;
                        break;
                    default:
                        this.tab.lineaMkt = true;
                        break;
                }
            },
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteKpiGraficos', ['columnChart']),
        },
    }
</script>

<style scoped>

</style>