<template>
    <div>

        <div class="card border-grey m-b-10">
            <div class="m-10 text-grey-darker"><b>SEGUIMIENTO DE CLIENTES</b>
                <span class="ml-2">
                      <i class="fa fa-info-circle" title="Top products with units sold"
                       v-b-popover.hover="'Informacion de clientes asignados al funcionario.'">
                      </i>


                 </span>
            </div>
            <div class="card-body p-10">

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
                        <div>Linea <b class="text-orange">BPH</b></div>
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
                        <div>Linea <b class="text-purple"> COFAR</b></div>
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

    export default {
        name: "resumenClienteFuncionarioSeguimiento",
        props: ['resumenCumplimientoFuncionarioAnalisis'],
        mounted() {
        },
        methods: {
        },
        computed: {
        },
    }
</script>

<style scoped>

</style>