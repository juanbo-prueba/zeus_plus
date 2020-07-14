<template>
    <div>
        <apexchart width="1000" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: "GraficoLineal",
        props: ['listaDatosGraficolineal', 'tituloGrafico', 'coloresLineas', 'posicionLeyenda'],
        computed: {
            series() {
                return  this.listaDatosGraficolineal.datos
            },
            chartOptions() {
                return {
                    tooltip: {

                        x: {
                            show: true,
                            format: 'MMM yy',
                            formatter: undefined,
                        },

                    },
                    chart: {
                        toolbar: {
                            show: false
                        }
                    },
                    legend: {
                        show: true,
                        position: this.posicionLeyenda,
                        horizontalAlign: 'center',
                        floating: false,
                        offsetX: 10,
                        offsetY: -10,
                        height: 30,
                        containerMargin: {
                            top: 30,
                            bottom: 30,
                        },
                    },
                    colors: this.coloresLineas,
                    title: {
                        text: this.tituloGrafico,
                        align: 'center',
                        style: {
                            fontSize:  '16px',
                            fontWeight:  900,
                            color:  '#3f3f44'
                        },
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    markers: {
                        size: 1
                    },

                    stroke: {
                        width: 4
                    },

                    xaxis: {
                        type: "datetime", //category
                        categories: this.listaDatosGraficolineal.categories,
                        labels: {
                            format: "MMM yy"
                        },

                    } ,

                }

            },
        }
    }
</script>

