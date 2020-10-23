<template>
    <div>
        <apexchart v-bind:width="width" type="bar" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: "GraficoBarrasAgrupado",
        props: ['datosGraficoBarras', 'tituloGrafico', 'colores', 'width', 'columnWidth'],
        computed: {
            series() {
                return this.datosGraficoBarras.datos;
            },
            chartOptions() {
                return {
                    chart: {
                        height: 350,
                        type: 'bar'
                    },
                    title: {
                        text: this.tituloGrafico,
                        align: 'center'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            columnWidth: this.columnWidth,
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
                    colors: this.colores,
                    xaxis: {
                        categories: this.datosGraficoBarras.categories,
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
                            text: 'Monto Bs.'
                        }
                    },
                    fill: {
                        opacity: 1
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return  val + " Bs."
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>