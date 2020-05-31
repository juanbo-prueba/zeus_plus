<template>
    <div>
        <div class="row">
            <!-- begin col-3 -->
            <div class="col-xl-3 col-md-6">
                <div class="widget widget-stats bg-teal">
                    <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                    <div class="stats-content">
                        <div class="stats-title">Cumplimiento Ventas</div>
                        <div class="stats-number"> {{resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoTotal | moneda}} %</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" v-bind:style="{width:resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoTotal + '%'}"></div>
                        </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Ventas Bs.:</span>
                             {{resumenCumplimientoFuncionarioAnalisis.montoVentasTotal | moneda }} </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Presupuesto Bs.:</span>
                             {{resumenCumplimientoFuncionarioAnalisis.montoPresupuestoTotal | moneda}}</div>
                    </div>
                </div>
            </div>
            <!-- end col-3 -->

            <!-- begin col-3 -->
            <div class="col-xl-3 col-md-6">
                <div class="widget widget-stats bg-gradient-orange-v2">
                    <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                    <div class="stats-content">
                        <div class="stats-title">Cumplimiento BPH</div>
                        <div class="stats-number"> {{resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoBph | moneda}} %</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" v-bind:style="{width:resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoBph + '%'}"></div>
                        </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Ventas Bs.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.montoVentasBph | moneda }} </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Presupuesto Bs.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.montoPresupuestoBph | moneda}}</div>
                    </div>
                </div>
            </div>
            <!-- end col-3 -->

            <!-- begin col-3 -->
            <div class="col-xl-3 col-md-6">
                <div class="widget widget-stats bg-gradient-purple-v2">
                    <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                    <div class="stats-content">
                        <div class="stats-title">Cumplimiento COFAR</div>
                        <div class="stats-number"> {{resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoCofar | moneda}} %</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" v-bind:style="{width:resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoCofar + '%'}"></div>
                        </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Ventas Bs.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.montoVentasCofar | moneda }} </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Presupuesto Bs.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.montoPresupuestoCofar | moneda}}</div>
                    </div>
                </div>
            </div>
            <!-- end col-3 -->

            <!-- begin col-3 -->
            <div class="col-xl-3 col-md-6">
                <div class="widget widget-stats bg-gradient-blue-v2">
                    <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                    <div class="stats-content">
                        <div class="stats-title">Clientes Facturados</div>
                        <div class="stats-number"> {{resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoClientes | moneda}} %</div>
                        <div class="stats-progress progress">
                            <div class="progress-bar" v-bind:style="{width:resumenCumplimientoFuncionarioAnalisis.porcentajeCumplimientoClientes + '%'}"></div>
                        </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Clientes Fact.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.totalClienteFacturados }} </div>
                        <div class="stats-desc">
                            <span class="f-w-700">Clientes Asig.:</span>
                            {{resumenCumplimientoFuncionarioAnalisis.totalClientesFuncionario }}</div>
                    </div>
                </div>
            </div>
            <!-- end col-3 -->

        </div>
    </div>
    
</template>

<script>
   
    export default {
        name: "kpiPromotorVentas",
        props: ['resumenCumplimientoFuncionarioAnalisis'],
        mounted() {

        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped>
    .bg-gradient-purple-v2 {
        background: #9805ff!important;
        background: -moz-linear-gradient(top,#ad38ff 0%,#8a00eb 100%)!important;
        background: -webkit-linear-gradient(top,#ad38ff 0%,#8a00eb 100%)!important;
        background: linear-gradient(to bottom,#ad38ff 0%,#8a00eb 100%)!important;
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='lighten($value, 10%)', endColorstr='darken($value, 5%)',GradientType=0 )!important;
    }
    .bg-gradient-blue-v2{
        background: #007aff!important;
        background: -moz-linear-gradient(top,#3395ff 0%,#006ee6 100%)!important;
        background: -webkit-linear-gradient(top,#3395ff 0%,#006ee6 100%)!important;
        background: linear-gradient(to bottom,#3395ff 0%,#006ee6 100%)!important;
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='lighten($value, 10%)', endColorstr='darken($value, 5%)',GradientType=0 )!important;
    }
    .bg-gradient-orange-v2 {
        background: #ff9500!important;
        background: -moz-linear-gradient(top,#fa3 0%,#e68600 100%)!important;
        background: -webkit-linear-gradient(top,#fa3 0%,#e68600 100%)!important;
        background: linear-gradient(to bottom,#fa3 0%,#e68600 100%)!important;
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='lighten($value, 10%)', endColorstr='darken($value, 5%)',GradientType=0 )!important;
    }
</style>