<template>
    <div class="row">
        <!-- begin col-3 -->
        <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-teal">
                <div class="stats-icon stats-icon-lg"><i class="fa fa-globe fa-fw"></i></div>
                <div class="stats-content">
                    <div class="stats-title">Cumplimiento Monto</div>
                    <div class="stats-number"> {{cumplimientoFuncionarioGeneral.cumplimientoMonto | moneda}} %</div>
                    <div class="stats-progress progress">
                        <div class="progress-bar" v-bind:style="{width:cumplimientoFuncionarioGeneral.cumplimientoMonto + '%'}"></div>
                    </div>
                    <div class="stats-desc">Monto Bs.: {{cumplimientoFuncionarioGeneral.montoVenta | moneda }} / {{cumplimientoFuncionarioGeneral.montoPresupuesto | moneda}}</div>
                </div>
            </div>
        </div>
        <!-- end col-3 -->
        <!-- begin col-3 -->
        <div class="col-xl-3 col-md-6">
            <div class="widget widget-stats bg-blue">
                <div class="stats-icon stats-icon-lg"><i class="fa fa-dollar-sign fa-fw"></i></div>
                <div class="stats-content">
                    <div class="stats-title">Cumplimiento Cantidad</div>
                    <div class="stats-number">{{cumplimientoFuncionarioGeneral.cumplimientoCantidad | moneda}} %</div>
                    <div class="stats-progress progress">
                        <div class="progress-bar" v-bind:style="{width: cumplimientoFuncionarioGeneral.cumplimientoCantidad + '%'}"></div>
                    </div>
                    <div class="stats-desc">Cantidad: {{cumplimientoFuncionarioGeneral.cantidadVenta}} / {{cumplimientoFuncionarioGeneral.cantidadPresupuesto}}</div>
                </div>
            </div>
        </div>
        <!-- end col-3 -->
    </div>
</template>

<script>
    export default {
        name: "cumplimientoFuncionarioResumen",
        props: ['cumplimientoFuncionarioGeneral']
    }
</script>

<style scoped>

</style>