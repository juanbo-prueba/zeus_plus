<template>
    <div>

        <div class="clearfix">
             <span v-b-modal.modalWidgetImgIcon class="pull-right f-s-12 text-grey-darker m-r-3 f-w-700">
                 Actualizacion Sistema: {{ fechaActualizacionVentas.fechaActualizacionModificada }} {{ fechaActualizacionVentas.hora }}
             </span>
        </div>

        <!-- begin widget-chart -->
        <div class="widget widget-rounded m-b-10" v-bind:class="{ 'inverse-mode': false }">
            <div class="card-body p-10">
                <div class="mb-3 text-grey-darker"><b>SEGUIMIENTO DE CLIENTES</b> <span class="ml-2">
                                        <i class="fa fa-info-circle" title="Top products with units sold"
                                           v-b-popover.hover="'Informacion de clientes asignados al funcionario.'"></i></span>
                </div>
                <div class="row">
                    <div class="col-xl-2 col-3">
                        <h3 class="mb-1"> {{
                            resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoTotal |
                            moneda }} %</h3>
                        <div>Lineas BPH y COFAR</div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Ventas Bs.: {{ resumenCumplimientoFuncionarioAnalisis.montoVentasTotal
                            | moneda }}
                        </div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Presupuesto Bs.: {{
                            resumenCumplimientoFuncionarioAnalisis.montoPresupuestoTotal | moneda
                            }}
                        </div>
                    </div>
                    <div class="col-xl-2 col-3">
                        <h3 class="mb-1"> {{
                            resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoBph |
                            moneda }} %</h3>
                        <div>Linea BPH</div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Ventas Bs.: {{ resumenCumplimientoFuncionarioAnalisis.montoVentasBph |
                            moneda }}
                        </div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Presupuesto Bs.: {{
                            resumenCumplimientoFuncionarioAnalisis.montoPresupuestoBph | moneda }}
                        </div>
                    </div>
                    <div class="col-xl-2 col-3">
                        <h3 class="mb-1"> {{
                            resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoCofar |
                            moneda }} %</h3>
                        <div>Linea COFAR</div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Ventas Bs.: {{ resumenCumplimientoFuncionarioAnalisis.montoVentasCofar
                            | moneda }}
                        </div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Presupuesto Bs.: {{
                            resumenCumplimientoFuncionarioAnalisis.montoPresupuestoCofar | moneda
                            }}
                        </div>
                    </div>
                    <div class="col-xl-2 col-3">
                        <h3 class="mb-1"> {{
                            resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoClientes |
                            moneda }} %</h3>
                        <div>Clientes facturados</div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Clientes Fact. {{
                            resumenCumplimientoFuncionarioAnalisis.totalClienteFacturados
                            }}
                        </div>
                        <div class="text-grey-darker f-s-11 text-truncate">
                            Clientes Asig. {{
                            resumenCumplimientoFuncionarioAnalisis.totalClientesFuncionario
                            }}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- end widget-chart -->


    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: "resumenClienteFuncionarioSeguimiento",
        mounted() {
            this.cargarResumenCumplimientoFuncionarioAnalisis({
                codPersonal: this.datosUsuario.usuario.id,
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
            });
            this.cargarFechaActualizacionVentas(this.datosUsuario.usuario.codAreaEmpresa);
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cargarResumenCumplimientoFuncionarioAnalisis', 'cargarFechaActualizacionVentas', 'cargarListaFuncionarioClientes']),
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteFuncionarioResumenStore', ['resumenCumplimientoFuncionarioAnalisis', 'fechaActualizacionVentas']),

        },
    }
</script>

<style scoped>

</style>