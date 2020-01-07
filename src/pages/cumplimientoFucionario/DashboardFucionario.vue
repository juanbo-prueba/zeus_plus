<template>
    <div>
        <!-- begin profile
        <div class="profile ">
            <div class="profile-header ">


                <ul class="profile-header-tab nav nav-tabs">
                    <li class="nav-item"><a href="javascript:;" v-on:click="show('dashboard')" v-bind:class="{ 'active': tab.dashboard }" class="nav-link" data-toggle="tab">DASHBOARD</a></li>
                    <li class="nav-item"><a href="javascript:;" v-on:click="show('clientes')" v-bind:class="{ 'active': tab.clientes }" class="nav-link" data-toggle="tab">CLIENTES</a></li>

                </ul>

            </div>
        </div>
    -->
        <div class="vertical-box with-grid inbox bg-light">
            <div class="vertical-box-column width-200 hidden-xs">
                <!-- begin vertical-box -->
                <div class="vertical-box">

                        <div class="d-flex align-items-center justify-content">
                            <ul class="profile-header-tab nav nav-tabs">
                                <li class="nav-item"><a href="javascript:;" v-on:click="show('dashboard')" v-bind:class="{ 'active': tab.dashboard }" class="nav-link" data-toggle="tab">DASHBOARD</a></li>
                                <li class="nav-item"><a href="javascript:;" v-on:click="show('clientes')" v-bind:class="{ 'active': tab.clientes }" class="nav-link" data-toggle="tab">CLIENTES</a></li>

                            </ul>
                        </div>

                </div>
                <!-- end vertical-box -->
            </div>
        </div>
        <!-- end profile -->
        <!-- begin profile-content -->
        <div class="profile-content">
            <!-- begin tab-content -->
            <div class="tab-content p-0">
                <!-- begin #profile-post tab -->
                <div class="tab-pane fade" v-bind:class="{ 'show active': tab.dashboard }">
                    <!-- begin dashboard -->

                    <div class="row">
                        <!-- begin col-8 -->
                        <div class="col-xl-8 col-lg-6">
                            <!-- begin card -->
                            <div class="card bg-dark border-0 text-white mb-3">
                                <div class="card-body">
                                    <div class="mb-3 text-grey"><b>CLIENTES DE FUNCIONARIO</b> <span class="ml-2">
                                        <i class="fa fa-info-circle" title="Top products with units sold" v-b-popover.hover="'Informacion de clientes asignados al funcionario.'"></i></span></div>
                                    <div class="row">
                                        <div class="col-xl-3 col-4">
                                            <h3 class="mb-1">30</h3>
                                            <div>Linea Cofar</div>
                                            <div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 25.5% from previous 7 days</div>
                                        </div>
                                        <div class="col-xl-3 col-4">
                                            <h3 class="mb-1">20</h3>
                                            <div>Linea BPH</div>
                                            <div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 5.33% from previous 7 days</div>
                                        </div>
                                        <div class="col-xl-3 col-4">
                                            <h3 class="mb-1">766.8K</h3>
                                            <div>Total Page Views</div>
                                            <div class="text-grey f-s-11 text-truncate"><i class="fa fa-caret-up"></i> 0.323% from previous 7 days</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!-- end card -->
                        </div>
                    </div>


                    <cumplimiento-funcionario-resumen
                            :cumplimientoFuncionarioGeneral="cumplimientoFuncionarioGeneral">

                    </cumplimiento-funcionario-resumen>

                    <grafico-cumplimiento-funcionario
                            :options="columnChart.options"
                            :series="columnChart.series">

                    </grafico-cumplimiento-funcionario>

                    <cumplimiento-linea-mkt-fucionario
                            :cumplimientoFuncionarioLineaMkt="cumplimientoFuncionarioLineaMkt">

                    </cumplimiento-linea-mkt-fucionario>

                    <cumplimiento-presentacion-funcionario
                            :filtrarPresentacionesMkt="filtrarPresentacionesMkt"
                            :filtroCodLineaMkt="filtroCodLineaMkt"
                            :options="options"
                            @update="updateFiltro">

                    </cumplimiento-presentacion-funcionario>
                    <!-- end dashboard -->
                </div>
                <!-- end #profile-post tab -->
                <!-- begin #profile-about tab -->
                <div class="tab-pane fade" v-bind:class="{ 'show active': tab.clientes }">
                    <!-- begin table -->
                    <div class="table-responsive form-inline">
                        tabla
                    </div>
                    <!-- end table -->
                </div>
                <!-- end #profile-about tab -->

            </div>
            <!-- end tab-content -->
        </div>
        <!-- end profile-content -->
    </div>
</template>
<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import accounting from 'accounting'
    import PageOptions from '../../config/PageOptions'
    import Vue from 'vue'
    import GraficoCumplimientoFuncionario from "@/components/presupuestoFuncionario/graficoCumplimientoFuncionario";
    import CumplimientoLineaMktFucionario from "@/components/presupuestoFuncionario/cumplimientoLineaMktFucionario";
    import CumplimientoPresentacionFuncionario from "@/components/presupuestoFuncionario/cumplimientoPresentacionFuncionario";
    import CumplimientoFuncionarioResumen from '@/components/presupuestoFuncionario/cumplimientoFuncionarioResumen';

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor,"", 2, ".", ",");
    })
    export default {
        name: "DashboardFucionario",
        components: {CumplimientoPresentacionFuncionario,
            CumplimientoLineaMktFucionario,
            GraficoCumplimientoFuncionario,
            CumplimientoFuncionarioResumen},
        data(){
            return {
                inverseMode: false,
                key: "",
                copia: null,
                options: [
                    { text: 'Todos', value: 0 },
                    { text: 'ANTIBIOTICOS', value: 2 },
                    { text: 'CARDIO', value: 3 },
                    { text: 'DOLOR - NEURO', value: 1 },
                    { text: 'FLEXICAM', value: 12 },
                    { text: 'GASTRO', value: 5 },
                    { text: 'OSTEOARTICULAR MIX', value: 9 },
                    { text: 'PEDIATRICA', value: 11 },
                    { text: 'VIDILINE', value: 8}
                ],
                tab: {
                    dashboard: true,
                    clientes: false,
                    video: false,
                    photo: false,
                    friend: false,
                }
            }
        },
        mounted() {
            this.cargarCumplimientoFucionarioGeneral(this.datosUsuario.usuario.id);
            this.cargarCumplimientoFucionarioLineaMkt(this.datosUsuario.usuario.id);
            this.cargarCumplimientoFucionarioPresentacion(this.datosUsuario.usuario.id);
        },
        methods: {
            ...mapActions('cumplimientoFuncionario', ['cargarCumplimientoFucionarioGeneral', 'cargarCumplimientoFucionarioLineaMkt', 'cargarCumplimientoFucionarioPresentacion']),
            show: function(x) {
                this.tab.dashboard = false;
                this.tab.clientes = false;
                this.tab.video = false;
                this.tab.photo = false;
                this.tab.friend = false;

                switch (x) {
                    case 'clientes':
                        this.tab.clientes = true;
                        break;
                    default:
                        this.tab.dashboard = true;
                        break;
                }
            },
            updateFiltro (filtroCodLineaMkt) {
                this.filtroCodLineaMkt = filtroCodLineaMkt
            }

        },
        computed: {
            ...mapGetters('cumplimientoFuncionario', ['columnChart', 'filtrarPresentacionesMkt']),
            ...mapState('cumplimientoFuncionario', ['cumplimientoFuncionarioGeneral', 'cumplimientoFuncionarioLineaMkt']),
            ...mapState('authModule', ['datosUsuario']),
            filtroCodLineaMkt: {
                get () {
                    return this.$store.state.filtroCodLineaMkt;
                },
                set (value) {
                    this.$store.commit('cumplimientoFuncionario/setFiltroCodLineaMkt', value );
                }
            }
        },
        created() {
            PageOptions.pageContentFullWidth = true;
        },
        beforeRouteLeave (to, from, next) {
            PageOptions.pageContentFullWidth = false;
            next();
        },
    }
</script>