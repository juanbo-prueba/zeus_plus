<template>
    <!-- begin widget-chart -->
    <panel title="Cumplimiento por linea de Marketing" variant="default" noButton="true">

        <!-- begin vertical-box -->
        <div class="vertical-box with-grid with-border-top">

            <!-- begin widget-table -->
            <table class="table table-bordered widget-table widget-table-rounded" v-bind:class="{ 'inverse-mode': inverseMode }">
                <thead>
                <tr>
                    <th>Linea de marketing</th>
                    <th>Monto</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cum in cumplimientoFuncionarioLineaMkt" :key="cum.codLineaMkt">
                    <td>
                        <h6 class="media-heading">{{cum.nombreLineaMkt}}</h6>

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
    </panel>
    <!-- end widget-chart -->
</template>

<script>
    export default {
        name: "cumplimientoLineaMktFucionario",
        props: ['cumplimientoFuncionarioLineaMkt'],
        data() {
            return {
                inverseMode: false,
            }
        }
    }
</script>

<style scoped>

</style>