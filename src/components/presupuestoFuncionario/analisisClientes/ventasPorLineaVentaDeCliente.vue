<template>
    <div>
        <grafico-lineal
                :listaDatosGraficolineal = "listaVentasPorLineaDeVenta"
                :tituloGrafico = "tituloGrafico"
                :coloresLineas = "coloresLineas"
                :posicionLeyenda = "posicionLeyenda"
        >
        </grafico-lineal>
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
        name: "ventasPorLineaVentaDeCliente",
        components: {
            GraficoLineal
        },
        data(){
            return {
                codCliente: this.$route.params.codCliente,
                tituloGrafico: "Ventas por lineas de venta BPH y COFAR",
                coloresLineas: ["#ff9f1a", "#6F1E51"],
                posicionLeyenda: "bottom"
            }
        },
        mounted() {
            this.cargarVentasPorLineaDeVentaDeCliente( {
                codCliente: this.codCliente
            } );
        },
        methods: {
            ...mapActions('seguimientoClientesStore', ['cargarVentasPorLineaDeVentaDeCliente']),
        },
        computed: {
            ...mapState('seguimientoClientesStore', ['listaVentasPorLineaDeVenta']),
        },
    }
</script>

<style scoped>

</style>