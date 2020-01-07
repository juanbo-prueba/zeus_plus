<template>
    <div>
        <div class="widget-chart with-sidebar bg-white">
            <div class="widget-chart-content bg-white">
                <ul class="profile-header-tab nav nav-tabs">
                    <li class="nav-item"><a href="javascript:;" v-on:click="showGrafico('lineaMkt')" v-bind:class="{ 'active': tab.lineaMkt }" class="nav-link" data-toggle="tab">Linea de Marketing</a></li>
                    <li class="nav-item"><a href="javascript:;" v-on:click="showGrafico('lineaVenta')" v-bind:class="{ 'active': tab.lineaVenta }" class="nav-link" data-toggle="tab">Linea de venta</a></li>
                </ul>
                <div  class="widget-chart-full-width nvd3-inverse-mode" >
                    <div class="profile-content">
                        <!-- begin tab-content -->
                        <div class="tab-content p-0">
                            <div class="tab-pane fade" v-bind:class="{ 'show active': tab.lineaMkt }">
                                <div class="vertical-box with-grid with-border-top">
                                    <apexchart type="bar" :options="options" :series="series"></apexchart>
                                </div>
                            </div>
                            <!-- begin #profile-about tab -->
                            <div class="tab-pane fade" v-bind:class="{ 'show active': tab.lineaVenta }">
                                <!-- begin table -->
                                <div class="table-responsive form-inline">
                                    Lineas de ventas
                                </div>
                                <!-- end table -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "graficoCumplimientoFuncionario",
        props: ['options','series'],
        data(){
            return {
                tab: {
                    lineaMkt: true,
                    lineaVenta: false
                }
            }
        },
        methods: {
            showGrafico: function(x) {
                this.tab.lineaMkt = false;
                this.tab.lineaVenta = false;
                switch (x) {
                    case 'lineaVenta':
                        this.tab.lineaVenta = true;
                        break;
                    default:
                        this.tab.lineaMkt = true;
                        break;
                }
            },
        }
    }
</script>

<style scoped>

</style>