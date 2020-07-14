<template>
    <div>
        <grafico-lineal
                :listaDatosGraficolineal = "listaComportamientoVentasCliente"
                :tituloGrafico = "tituloGrafico"
                :coloresLineas = "coloresLineas"
                :posicionLeyenda = "posicionLeyenda"
        >
        </grafico-lineal>
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
    import GraficoLineal from "@/components/graficos/GraficoLineal";

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
        components: {
            GraficoLineal
        },
        data() {
            return {
                codCliente: this.$route.params.codCliente,
                tituloGrafico: "Ventas, descuento fidelidad y Cobranzas",
                coloresLineas: ["#00a8ff", "#79d70f", "#e84118"],
                posicionLeyenda: "bottom",
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
        },
    }
</script>

<style scoped>

</style>