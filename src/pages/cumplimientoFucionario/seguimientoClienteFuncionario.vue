<template>
    <div>


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


    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import accounting from 'accounting'
    import PageOptions from '../../config/PageOptions'
    import Vue from 'vue'

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor, "", 2, ".", ",");
    })

    export default {
        name: "seguimientoClienteFuncionario",
        components: {},
        data() {
            return {

            }
        },
        mounted() {
            this.cargarResumenCumplimientoFuncionarioAnalisis({
                codPersonal: this.datosUsuario.usuario.id,
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
            });
            this.cargarFechaActualizacionVentas(this.datosUsuario.usuario.codAreaEmpresa);
            this.cargarListaFuncionarioClientes({
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto,
                codPersonal: this.datosUsuario.usuario.id
            });
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioStore', ['cargarResumenCumplimientoFuncionarioAnalisis', 'cargarFechaActualizacionVentas', 'cargarListaFuncionarioClientes'])
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteFuncionarioStore', ['resumenCumplimientoFuncionarioAnalisis', 'fechaActualizacionVentas', 'listaFuncionarioClientes']),
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

