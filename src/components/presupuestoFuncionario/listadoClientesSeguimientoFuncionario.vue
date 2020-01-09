<template>
    <div class="row">

        <!-- begin widget-table -->
        <table class="table table-bordered widget-table widget-table-rounded table-valign-middle">
            <thead>
            <tr>
                <th>Cliente</th>
                <th>Total Ventas Bs.</th>
                <th>Total Ventas BPH Bs.</th>
                <th>Total Ventas COFAR Bs.</th>
                <th>Total Descuento fidelidad calculado Bs.</th>
                <th>Total Descuento fidelidad Aplicado Bs.</th>
            </tr>
            </thead>
            <tbody>

            <tr v-for="cliente in listaFuncionarioClientes" :key="cliente.codCliente">
                <td>
                    <h4 class="widget-table-title">{{ cliente.nombreCliente }}</h4>
                </td>
                <td>
                    <b class="text-inverse">{{ cliente.totalVentaActual | moneda  }}</b><br/>
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ cliente.totalVentaAnterior | moneda  }} </p>

                    <b v-if="cliente.totalVentaActual > cliente.totalVentaAnterior " class="clearfix text-green"> + {{ cliente.totalVentaActual - cliente.totalVentaAnterior | moneda  }}</b>
                    <b v-else class="clearfix text-red"> {{ cliente.totalVentaActual - cliente.totalVentaAnterior | moneda  }}</b>
                </td>
                <td>
                    <b class="text-inverse">{{ cliente.totalVentaActualBph | moneda  }}</b><br />
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ cliente.totalVentaAnterior | moneda  }} </p>

                    <b v-if="cliente.totalVentaActualBph > cliente.totalVentaAnteriorBph " class="clearfix text-green"> + {{ cliente.totalVentaActualBph - cliente.totalVentaAnteriorBph | moneda  }}</b>
                    <b v-else class="clearfix text-red"> {{ cliente.totalVentaActualBph - cliente.totalVentaAnteriorBph | moneda  }}</b>
                </td>
                <td>
                    <b class="text-inverse">{{ cliente.totalVentaActualCofar | moneda  }}</b><br />
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ cliente.totalVentaAnteriorCofar | moneda  }} </p>

                    <b v-if="cliente.totalVentaActualCofar > cliente.totalVentaAnteriorCofar " class="clearfix text-green"> + {{ cliente.totalVentaActualCofar - cliente.totalVentaAnteriorCofar | moneda  }}</b>
                    <b v-else class="clearfix text-red"> {{ cliente.totalVentaActualCofar - cliente.totalVentaAnteriorCofar | moneda  }}</b>
                </td>
                <td class="table-td-valign-middle">
                    <span v-if="cliente.totalVentaDescuentoFidelidadCalculado <= 0 " class="badge bg-silver-darker f-s-12">{{ cliente.totalVentaDescuentoFidelidadCalculado | moneda }}</span>
                    <span v-else class="badge bg-blue f-s-12">{{ cliente.totalVentaDescuentoFidelidadCalculado | moneda }}</span>
                </td>
                <td>
                    <span v-if="cliente.totalVentaDescuentoFidelidadAplicado == 0 && cliente.totalVentaDescuentoFidelidadCalculado == 0" class="badge bg-silver-darker f-s-12">{{ cliente.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else-if="cliente.totalVentaDescuentoFidelidadAplicado == 0 && cliente.totalVentaDescuentoFidelidadCalculado > 0" class="badge bg-red f-s-12">{{ cliente.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else-if="cliente.totalVentaDescuentoFidelidadAplicado + 5 < cliente.totalVentaDescuentoFidelidadCalculado > 0" class="badge bg-orange f-s-12">{{ cliente.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else class="badge bg-green f-s-12">{{ cliente.totalVentaDescuentoFidelidadAplicado | moneda }}</span>

                </td>
            </tr>

            </tbody>
        </table>
        <!-- end widget-table -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "listadoClientesSeguimientoFuncionario",
        data () {
            return {

            }
        },
        mounted() {
          console.log("INICIO 2: " + this.listaFuncionarioClientes)
        },
        computed: {
            // ...mapGetters('seguimientoFuncionarioClientesStore', ['filteredClientes']),
            ...mapGetters({
                listaFuncionarioClientes: 'seguimientoFuncionarioClientesStore/filteredClientes'
            })
        }
    }
</script>

<style scoped>

</style>