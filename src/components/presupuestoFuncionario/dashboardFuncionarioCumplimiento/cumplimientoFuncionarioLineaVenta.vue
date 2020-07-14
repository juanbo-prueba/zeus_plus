<template>
    <div>
        <apexchart width="600" type="bar" :options="columnChart.options" :series="columnChart.series"></apexchart>

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
    export default {
        name: "cumplimientoFuncionarioLineaVenta",
        data() {
            return{
                columnChart: {
                    options: {
                        chart: {
                            height: 350,
                            type: 'bar'
                        },
                        title: {
                            text: 'Profit & Margin Chart',
                            align: 'center'
                        },
                        plotOptions: {
                            bar: {
                                horizontal: false,
                                columnWidth: '30%',
                                endingShape: 'rounded' /*flat*/
                            },
                        },
                        dataLabels: {
                            enabled: false
                        },
                        stroke: {
                            show: true,
                            width: 2,
                            colors: ['transparent']
                        },
                        colors: ['#9265b3', '#82ca9d'],
                        xaxis: {
                            categories: ['Breskot Farma', 'COFAR'],
                            axisBorder: {
                                show: true,
                                color: 'rgba(182, 194, 201, 0.5)',
                                height: 1,
                                width: '100%',
                                offsetX: 0,
                                offsetY: -1
                            },
                            axisTicks: {
                                show: true,
                                borderType: 'solid',
                                color: '#b6c2c9',
                                height: 6,
                                offsetX: 0,
                                offsetY: 0
                            }
                        },
                        yaxis: {
                            title: {
                                text: '$ (thousands)'
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        tooltip: {
                            y: {
                                formatter: function (val) {
                                    return "$ " + val + " thousands"
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Presupuesto',
                        data: [90, 80]
                    }, {
                        name: 'Ventas',
                        data: [60, 40]
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>