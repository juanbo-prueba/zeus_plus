<template>
    <div>
        <vue-good-table
                :columns="columns"
                :rows="listaFuncionarioClientes"
                :line-numbers="true"
                :pagination-options="{
                        enabled: true,
                        mode: 'records',
                        perPage: 10,
                        position: 'top',
                        perPageDropdown: [10,20,30],
                        dropdownAllowAll: false,
                        setCurrentPage: 1,
                        nextLabel: 'siguiente',
                        prevLabel: 'anterior',
                        rowsPerPageLabel: 'Filas Por Pagina',
                        ofLabel: 'of',
                        pageLabel: 'page', // for 'pages' mode
                        allLabel: 'All',
                 }">
            <template slot="table-row" scope="props">
                <span v-if="props.column.field == 'nombreCliente'">
                     <h5 class="widget-table-title">{{ props.row.nombreCliente }}</h5>
                </span>

                <span v-if="props.column.field == 'totalVentaActual'">
                    <b class="text-inverse">{{ props.row.totalVentaActual | moneda  }}</b><br/>
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ props.row.totalVentaAnterior | moneda  }} </p>

                    <div v-if="props.row.totalVentaActual > props.row.totalVentaAnterior" class="row pull-right">
                        <b  class="clearfix text-green">  + {{ props.row.totalVentaActual - props.row.totalVentaAnterior | moneda  }}</b>
                        <i class="fas fa-arrow-alt-circle-up fa-lg text-green p-l-10 p-r-10"></i>
                    </div>

                    <span v-else class="row pull-right">
                         <b class="clearfix text-red"> {{ props.row.totalVentaActual - props.row.totalVentaAnterior | moneda  }}</b>
                         <i class="fas fa-arrow-alt-circle-down fa-lg text-red p-l-10 p-r-10"></i>
                    </span>


                </span>
                <span v-if="props.column.field == 'totalVentaActualBph'">
                    <b class="text-inverse">{{ props.row.totalVentaActualBph | moneda  }}</b><br />
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ props.row.totalVentaAnteriorBph | moneda  }} </p>

                    <b v-if="props.row.totalVentaActualBph > props.row.totalVentaAnteriorBph " class="clearfix text-green"> + {{ props.row.totalVentaActualBph - props.row.totalVentaAnteriorBph | moneda  }}</b>
                    <b v-else class="clearfix text-red"> {{ props.row.totalVentaActualBph - props.row.totalVentaAnteriorBph | moneda  }}</b>
                </span>
                <span v-if="props.column.field == 'totalVentaActualCofar'">
                    <b class="text-inverse">{{ props.row.totalVentaActualCofar | moneda  }}</b><br />
                    <p class="widget-table-desc m-b-15">Mes anterior: {{ props.row.totalVentaAnteriorCofar | moneda  }} </p>

                    <b v-if="props.row.totalVentaActualCofar > props.row.totalVentaAnteriorCofar " class="clearfix text-green"> + {{ props.row.totalVentaActualCofar - props.row.totalVentaAnteriorCofar | moneda  }}</b>
                    <b v-else class="clearfix text-red"> {{ props.row.totalVentaActualCofar - props.row.totalVentaAnteriorCofar | moneda  }}</b>
                </span>
                <span v-if="props.column.field == 'totalVentaDescuentoFidelidadCalculado'" >
                    <span v-if="props.row.totalVentaDescuentoFidelidadCalculado <= 0 " class="badge bg-silver-darker f-s-12">{{ props.row.totalVentaDescuentoFidelidadCalculado | moneda }}</span>
                    <span v-else class="badge bg-blue f-s-12">{{ props.row.totalVentaDescuentoFidelidadCalculado | moneda }}</span>
                </span>
                <span v-if="props.column.field == 'totalVentaDescuentoFidelidadAplicado'">
                    <span v-if="props.row.totalVentaDescuentoFidelidadAplicado == 0 && props.row.totalVentaDescuentoFidelidadCalculado == 0" class="badge bg-silver-darker f-s-12">{{ props.row.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else-if="props.row.totalVentaDescuentoFidelidadAplicado == 0 && props.row.totalVentaDescuentoFidelidadCalculado > 0" class="badge bg-red f-s-12">{{ props.row.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else-if="props.row.totalVentaDescuentoFidelidadAplicado + 5 < props.row.totalVentaDescuentoFidelidadCalculado > 0" class="badge bg-orange f-s-12">{{ props.row.totalVentaDescuentoFidelidadAplicado | moneda }}</span>
                    <span v-else class="badge bg-green f-s-12">{{ props.row.totalVentaDescuentoFidelidadAplicado | moneda }}</span>

                </span>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapState } from 'vuex'

    export default {
        name: "listadoClientesFuncionarioVentas",
        data () {
            return {
                columns: [
                    {
                        label: 'Cliente',
                        field: 'nombreCliente',
                        filterOptions: {
                            enabled: true, // enable filter for this column
                            placeholder: 'Filter This Thing', // placeholder for filter input
                            filterValue: '', // initial populated value for this filter
                        //    filterDropdownItems: [], // dropdown (with selected values) instead of text input
                        //    filterFn: this.columnFilterFn, //custom filter function that
                            trigger: '', //only trigger on enter not on keyup
                        },
                    },
                    {
                        label: 'Total Ventas Bs',
                        field: 'totalVentaActual',
                        type: 'number',
                    },
                    {
                        label: 'Ventas BPH Bs.',
                        field: 'totalVentaActualBph',
                        type: 'number',
                    },
                    {
                        label: 'Ventas COFAR Bs.',
                        field: 'totalVentaActualCofar',
                        type: 'number',
                    },
                    {
                        label: 'Fidelidad Calculado Bs.',
                        field: 'totalVentaDescuentoFidelidadCalculado',
                        type: 'number',
                    },
                    {
                        label: 'Fidelidad Aplicado Bs.',
                        field: 'totalVentaDescuentoFidelidadAplicado',
                        type: 'number',
                    },
                ],
            }
        },
        mounted() {
            this.cargarListaFuncionarioClientes({
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto,
                codPersonal: this.datosUsuario.usuario.id
            });
        },
        methods: {
            ...mapActions('seguimientoFuncionarioClientesStore', ['cargarListaFuncionarioClientes']),
        },
        computed: {
            ...mapGetters({
                listaFuncionarioClientes: 'seguimientoFuncionarioClientesStore/filteredClientes'
            }),
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoFuncionarioClientesStore', ['listaFuncionarioClientes']),
        }
    }
</script>

<style scoped>

</style>