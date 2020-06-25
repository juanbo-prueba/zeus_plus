<template>
    <div>

      <div class="vertical-box with-grid inbox bg-light">
            <div class="vertical-box-column width-200 hidden-xs">

                <div class="vertical-box">

                    <div class="d-flex align-items-center justify-content">
                        <ul class="profile-header-tab nav nav-tabs">
                            <li class="nav-item"><a href="javascript:;" v-on:click="show('dashboard')" v-bind:class="{ 'active': tab.dashboard }" class="nav-link" data-toggle="tab">DASHBOARD</a></li>
                            <li class="nav-item"><a href="javascript:;" v-on:click="show('clientes')" v-bind:class="{ 'active': tab.clientes }" class="nav-link" data-toggle="tab">CLIENTES</a></li>

                        </ul>
                    </div>

                </div>

            </div>
        </div>
        <!-- end profile -->

        <!-- begin profile-content -->
        <div class="profile-content bg-white p-t-5">
            <!-- begin tab-content -->
            <div class="tab-content p-0">
                <!-- begin #profile-post tab -->
                <div class="tab-pane fade" v-bind:class="{ 'show active': tab.dashboard }">

                    <fecha-actualizacion-ventas></fecha-actualizacion-ventas>

                    <kpi-promotor-ventas
                            :resumenCumplimientoFuncionarioAnalisis="resumenCumplimientoFuncionarioAnalisis">
                    </kpi-promotor-ventas>

                    <kpi-grafico-promotor-lineas></kpi-grafico-promotor-lineas>

                    <kpi-seguimiento-lineas-mkt></kpi-seguimiento-lineas-mkt>

                    <kpi-seguimiento-presentaciones-funcionario></kpi-seguimiento-presentaciones-funcionario>


                </div>
                <!-- end #profile-post tab -->
                <!-- begin #profile-about tab -->
                <div class="tab-pane fade" v-bind:class="{ 'show active': tab.clientes }">
                    <fecha-actualizacion-ventas></fecha-actualizacion-ventas>

                    <resumen-cliente-funcionario-seguimiento
                            :resumenCumplimientoFuncionarioAnalisis="resumenCumplimientoFuncionarioAnalisis">
                    </resumen-cliente-funcionario-seguimiento>

                    <buscador-form-clientes-funcionario></buscador-form-clientes-funcionario>
                    <listado-clientes-funcionario-ventas></listado-clientes-funcionario-ventas>

                </div>
                <!-- end #profile-about tab -->

            </div>
            <!-- end tab-content -->
        </div>
        <!-- end profile-content -->



    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import accounting from 'accounting'
    import PageOptions from '../../config/PageOptions'
    import Vue from 'vue'
    import ListadoClientesFuncionarioVentas from "@/components/presupuestoFuncionario/listadoClientesFuncionarioVentas";
    import ResumenClienteFuncionarioSeguimiento
        from "@/components/presupuestoFuncionario/resumenClienteFuncionarioSeguimiento";
    import KpiPromotorVentas from "@/components/presupuestoFuncionario/kpiPromotorVentas";
    import FechaActualizacionVentas from "@/components/presupuestoFuncionario/fechaActualizacionVentas";
    import KpiGraficoPromotorLineas from "@/components/presupuestoFuncionario/kpiGraficoPromotorLineas";
    import KpiSeguimientoLineasMkt from "@/components/presupuestoFuncionario/kpiSeguimientoLineasMkt";
    import KpiSeguimientoPresentacionesFuncionario
        from "@/components/presupuestoFuncionario/kpiSeguimientoPresentacionesFuncionario";
    import BuscadorFormClientesFuncionario from "@/components/presupuestoFuncionario/buscadorFormClientesFuncionario";

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor, "", 2, ".", ",");
    })

    export default {
        name: "seguimientoClienteFuncionario",
        components: {
            BuscadorFormClientesFuncionario,
            KpiSeguimientoPresentacionesFuncionario,
            KpiSeguimientoLineasMkt,
            KpiGraficoPromotorLineas,
            FechaActualizacionVentas,
            KpiPromotorVentas,
            ResumenClienteFuncionarioSeguimiento,
            ListadoClientesFuncionarioVentas,
            },
        data() {
            return {
                tab: {
                    dashboard: true,
                    clientes: false,
                }
            }
        },
        mounted() {
            this.cargarResumenCumplimientoFuncionarioAnalisis({
                codPersonal: this.datosUsuario.usuario.id,
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
            });
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cargarResumenCumplimientoFuncionarioAnalisis']),
            show: function(x) {
                this.tab.dashboard = false;
                this.tab.clientes = false;
                switch (x) {
                    case 'clientes':
                        this.tab.clientes = true;
                        break;
                    default:
                        this.tab.dashboard = true;
                        break;
                }
            }
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteFuncionarioResumenStore', ['resumenCumplimientoFuncionarioAnalisis']),
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

