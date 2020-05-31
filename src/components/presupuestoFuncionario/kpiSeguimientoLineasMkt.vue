<template>
    <div>

        <!-- begin card -->
        <div class="card border-grey m-b-10">
<!--            <div class="m-10 text-grey-darker"><b>Lines de Marketing</b></div>-->
            <div class="card-body p-0">
                <table class="table table-bordered widget-table widget-table-rounded" v-bind:class="{ 'inverse-mode': inverseMode }">
                    <thead>
                    <tr>
                        <th>Linea de marketing</th>
                        <th>Monto</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="cum in cumplimientoFuncionarioLineaMkt" :key="cum.codLineaMkt">
                        <td>
                            <h6 class="media-heading">{{cum.nombreLineaMkt}}</h6>

                        </td>

                        <td class="text-nowrap">
                            <!--<b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">{{cum.cumplimientoCantidad | moneda}} %</b><br />
                            <div class="progress progress-sm rounded-corner m-b-5">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-blue f-s-10 f-w-600"
                                     v-bind:style="{width: cum.cumplimientoCantidad + '%'}">{{cum.cumplimientoCantidad | moneda}}%</div>
                            </div>
                            <small class="text-line-through"
                                   v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">
                                {{cum.cantidadVenta | moneda}} / {{cum.cantidadPresupuesto | moneda}}
                            </small>-->
                            <b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">
                               Ventas Bs. {{cum.montoVenta | moneda}}
                            </b><br />
                            <b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">
                                Presupuesto Bs. {{cum.montoPresupuesto | moneda}}
                            </b><br /><br />

                            <div class="d-flex align-items-center m-b-2">
                                <div class="flex-grow-1">
                                    <div class="progress progress-sm rounded-corner m-b-5">
                                        <div class="progress-bar progress-bar bg-orange" v-bind:style="{width: cum.cumplimientoCantidad + '%'}"></div>
                                    </div>
                                </div>
                                <div class="ml-2 f-s-11 width-35 text-center">
                                    <b v-bind:class="{ 'text-white': inverseMode, 'text-inverse': !inverseMode }">{{cum.cumplimientoCantidad | moneda}} %</b><br />
                                </div>
                            </div>

                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        <!-- end card -->



    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "kpiSeguimientoLineasMkt",
        data() {
          return {
              inverseMode: false
          }
        },
        computed: {
            ...mapState('seguimientoClienteKpiGraficos', ['cumplimientoFuncionarioLineaMkt'])
        }
    }
</script>

<style scoped>

</style>