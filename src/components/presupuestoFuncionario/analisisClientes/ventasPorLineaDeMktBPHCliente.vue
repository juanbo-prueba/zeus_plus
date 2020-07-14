<template>
    <div>
        <grafico-lineal
            :listaDatosGraficolineal = "listaDatosGraficolineal"
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
        name: "ventasPorLineaDeMktBPHCliente",
        components: {
            GraficoLineal
        },
        data(){
            return{
                codCliente: this.$route.params.codCliente,
                tituloGrafico: "Ventas por lineas de marketing BPH",
                coloresLineas: ["#7ab800", "#0085c3", "#f2af00", "#dc5034", "#ce1126", "#b7295a", "#6e2585", "#71c6c1", "#5482ab", "#009bbb", "#003a70"],
                posicionLeyenda: "bottom"
            }
        },
        mounted() {
            this.cargarVentasPorLineaDeMarketingDeCliente( {
                codCliente: this.codCliente,
                codLineaVenta: 1
            } );
        },
        methods: {
            ...mapActions('seguimientoClientesStore', ['cargarVentasPorLineaDeMarketingDeCliente']),
        },
        computed: {
            ...mapState('seguimientoClientesStore', ['listaDatosGraficolineal']),
        }
    }
</script>

<style scoped>

</style>