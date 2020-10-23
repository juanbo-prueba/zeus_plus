<template>
    <div>

        <br/>

        <GraficoBarrasAgrupado
            :datosGraficoBarras = "listaDatosGraficoDeBarras"
            :tituloGrafico = "tituloGrafico"
            :colores = "colores"
            :width = "width"
            :columnWidth = "columnWidth">

        </GraficoBarrasAgrupado>

        <br/>

        <!-- begin widget-table -->
        <div class="table-responsive">
            <!-- begin widget-table -->
            <table class="table table-bordered widget-table width-600">
                <thead class="thead-light">
                <tr>

                    <th width="30%" class="text-center">Linea de venta</th>
                    <th width="20%" class="text-center">Presupuesto Bs.</th>
                    <th width="20%" class="text-center">Ventas Bs.</th>
                    <th class="text-center">Cumplimiento %</th>

                </tr>
                </thead>
                <tbody>
                <tr>

                    <td>

                        <div class="d-flex align-items-center">
                            <i class="fa fa-circle text-orange f-s-10 mr-2"></i>
                            <h4 class="widget-table-title">Breskot Farma</h4>
                        </div>
<!--                        <span class="badge badge-orange px-3 f-s-14">Breskot Farma</span>-->
                    </td>
                    <td class="text-nowrap text-right" >
                        <b >$999</b><br />
                    </td>
                    <td class="text-nowrap text-right">1</td>
                    <td>
                        <div class="d-flex align-items-center m-b-2">

                            <div class="flex-grow-1">
                                <div class="progress progress-sm rounded-corner">
                                    <div class="progress-bar progress-bar-striped bg-blue" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="ml-1 f-s-18 width-35 f-w-600 text-center">80%</div>
                        </div>
                    </td>

                </tr>

                <tr>

                    <td>
                        <span class="badge badge-purple px-3 f-s-14">COFAR</span>
                    </td>
                    <td class="text-nowrap">
                        <b >$999</b><br />
                    </td>
                    <td>1</td>
                    <td>
                        <div class="d-flex align-items-center m-b-2">
                            <div class="flex-grow-1">
                                <div class="progress progress-sm rounded-corner">
                                    <div class="progress-bar progress-bar-striped bg-blue" style="width: 80%"></div>
                                </div>
                            </div>
                            <div class="ml-1 f-s-14 width-35 text-center">80%</div>
                        </div>
                    </td>

                </tr>

                </tbody>
            </table>
            <!-- end widget-table -->
        </div>
        <!-- end table-responsive -->
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';
    import GraficoBarrasAgrupado from "../../graficos/GraficoBarrasAgrupado";

    export default {
        name: "cumplimientoFuncionarioLineaVenta",
        components: {GraficoBarrasAgrupado},
        data() {
            return{
                tituloGrafico: "Cumplimiento por Linea de Venta",
                colores: ["#9265b3", "#82ca9d"],
                width: "55%",
                columnWidth: "30%"
            }
        },
        mounted() {
            this.cargarDatosGraficoBarrasLineaDeVentaFuncionario({codPersonal: this.datosUsuario.usuario.id})
        },
        methods: {
            ...mapActions('dashboardFuncionarioCumplimientoStore', ['cargarDatosGraficoBarrasLineaDeVentaFuncionario']),
        },
        computed: {
            ...mapState('authModule', ['datosUsuario']),
            ...mapState('dashboardFuncionarioCumplimientoStore', ['listaDatosGraficoDeBarras']),
        },

    }
</script>

