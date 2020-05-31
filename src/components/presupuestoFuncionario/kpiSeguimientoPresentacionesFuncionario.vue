<template>
    <div class="card border-grey m-b-10">
                    <div class="m-10 text-grey-darker"><b>Seguimiento Presentaciones</b></div>
        <div class="card-body p-0">
            <div class="table-responsive form-inline">
                <table class="table table-profile">

                    <tbody>
                    <tr>
                        <td class="field valign-middle">Linea de Marketing</td>
                        <td>
                            <b-form-select class="form-control form-control-sm"
                                           id="available"
                                           :options="options"
                                           v-model="codLineaMktFiltro"
                            >
                            </b-form-select>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>

            <!-- begin vertical-box -->
            <div class="vertical-box with-grid with-border-top">
                <!-- begin widget-table -->
                <table class="table table-bordered widget-table widget-table-rounded" v-bind:class="{ 'inverse-mode': inverseMode }">
                    <thead>
                    <tr>
                        <th>Presentacion</th>
                        <th>Monto</th>
                        <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="cum in filtrarPresentacionesMktVersion2" :key="cum.codPresentacion">
                        <td>
                            <h6 class="media-heading">{{cum.nombrePresentacion}}</h6>

                        </td>
                        <td class="text-nowrap">
                            <b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">{{cum.cumplimientoMonto | moneda}} %</b><br />
                            <div class="progress progress-sm rounded-corner m-b-5">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-orange f-s-10 f-w-600"
                                     v-bind:style="{width: cum.cumplimientoMonto + '%'}">{{cum.cumplimientoMonto | moneda}}%</div>
                            </div>
                            <small class="text-line-through"
                                   v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">
                                Bs.   {{cum.montoVenta | moneda}} / {{cum.montoPresupuesto | moneda}}
                            </small>
                        </td>
                        <td class="text-nowrap">
                            <b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">{{cum.cumplimientoCantidad | moneda}} %</b><br />
                            <div class="progress progress-sm rounded-corner m-b-5">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-blue f-s-10 f-w-600"
                                     v-bind:style="{width: cum.cumplimientoCantidad + '%'}">{{cum.cumplimientoCantidad | moneda}}%</div>
                            </div>
                            <small class="text-line-through"
                                   v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">
                                {{cum.cantidadVenta | moneda}} / {{cum.cantidadPresupuesto | moneda}}
                            </small>
                        </td>
                    </tr>

                    </tbody>
                </table>
                <!-- end widget-table -->
                <!-- end vertical-box-column -->
            </div>
            <!-- end vertical-box -->
        </div>
    </div>
    <!-- end card -->
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex';
    export default {
        name: "kpiSeguimientoPresentacionesFuncionario",
        data() {
            return {
                inverseMode: false,
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
                ]
            }
        },
        mounted() {
            this.cargarCumplimientoFucionarioPresentacionPresupuestoVentas(
                {
                    codPersonal: this.datosUsuario.usuario.id,
                    codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
                }
            )
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cargarCumplimientoFucionarioPresentacionPresupuestoVentas']),
            updateFiltro (filtroCodLineaMkt) {
                this.filtroCodLineaMkt = filtroCodLineaMkt
            }
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cumplimientoFucionarioPresentacion']),
            ...mapGetters('seguimientoClienteFuncionarioResumenStore', ['filtrarPresentacionesMktVersion2']),
            codLineaMktFiltro: {
                get () {
                    return this.$store.state.codLineaMktFiltro;
                },
                set (value) {
                    this.$store.commit('seguimientoClienteFuncionarioResumenStore/setCodLineaMktFiltro', value );
                }
            },

        },

    }
</script>

<style scoped>

</style>