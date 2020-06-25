<template>
    <div>
       <apexchart width="1000" height="350" type="line" :options="chartOptions4" :series="series3"></apexchart>

        <br/>

        <div class="table-responsive">
            <table class="table table-striped m-b-0">
                <thead>
                <tr>
                    <th>MES</th>
                    <th class="text-center" width="10%">VENTA (Bs.)</th>
                    <th class="text-center" width="10%">COBRANZA (Bs.)</th>
                    <th class="text-right" width="20%">DESCUENTO FIDELIDAD (Bs.)</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="dato in detalleVentasCobranzas" >
                    <td>
                        <span class="text-inverse"> <b class="title">{{dato.fecha | formatDate}}</b> </span><br />
                        <small>&nbsp;</small>
                    </td>
                    <td class="text-right">{{dato.montoVenta | moneda}}</td>
                    <td class="text-right">{{dato.montoCobranza | moneda}}</td>
                    <td class="text-right">{{dato.montoFidelidad | moneda}}</td>
                </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions, mapGetters} from 'vuex';
    import accounting from 'accounting'
    import Vue from 'vue'
    import moment from 'moment'

    Vue.filter('formatDate', function(value) {
        if (value) {
            moment.locale("es")
            return moment(String(value)).format('YYYY MMMM')
        }
    })

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor,"", 0, ".", ",");
    })

    export default {
        name: "comportamientoVentasCliente",
        data() {
            return {
                codCliente: this.$route.params.codCliente,
            }
        },
        mounted() {
            this.cargarComportamientoVentasCliente( {
                codCliente: this.codCliente
            } );
        },
        methods: {
            ...mapActions('seguimientoClientesStore', ['cargarComportamientoVentasCliente']),

        },
        computed: {
            ...mapState('seguimientoClientesStore', ['listaComportamientoVentasCliente']),
            ...mapGetters({
                detalleVentasCobranzas: 'seguimientoClientesStore/getDetalleVentasCobranzas'
            }),

            series3() {
                return  this.listaComportamientoVentasCliente.datos
            },
            chartOptions4() {
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
                        position: 'top',
                        horizontalAlign: 'center',
                        floating: true,
                        offsetX: 10,
                        offsetY: -15,
                        height: 30,
                        containerMargin: {
                            top: 30,
                            bottom: 30,
                        },
                    },
                    colors: [ "#00a8ff", "#79d70f", "#e84118"
                    ],
                    title: {
                        text: 'Ventas y Cobranzas',
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
                          categories: this.listaComportamientoVentasCliente.categories,
                          labels: {
                              format: "MMM yy"
                          },

                      } ,

                  }


               /* this.cargardetalle.filter( dato =>{
                    console.log( dato )
                } )*/
          /*      this.comportamientoVentasCliente.map((item)=>{
                    console.log( item)
                })*/
            },
   /*         detalleVentasCobranzas(){

                let detalleVentas = [];
                console.log("Entrea deatallleconbra")
                console.log( this.comportamientoVentasCliente)


                    let nvector = this.comportamientoVentasCliente.tiempo.categories.length;
                    for ( var i = nvector - 1; i >= 0; i--) {
                        let fecha = this.comportamientoVentasCliente.tiempo.categories[ i ];
                        let montoVenta = this.comportamientoVentasCliente.datos[0].data[ i ];
                        let montoCobranza = this.comportamientoVentasCliente.datos[1].data[ i ];
                        let montoFidelidad = this.comportamientoVentasCliente.datos[2].data[ i ];
                        detalleVentas.push({fecha: fecha, montoVenta: montoVenta, montoCobranza: montoCobranza, montoFidelidad: montoFidelidad})
                    }

                 return detalleVentas;
            },*/

        },
    }
</script>

<style scoped>

</style>