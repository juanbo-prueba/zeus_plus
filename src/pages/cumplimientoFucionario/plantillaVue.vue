<template>
    
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import accounting from 'accounting'
    import PageOptions from '../../config/PageOptions'
    import Vue from 'vue'

    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor,"", 2, ".", ",");
    })

    export default {
        name: "plantillaVue",
        components: {},
        data(){
            return {

            }
        },
        mounted() {

        },
        methods: {
            //cargar metodos de store
        },
        computed: {
            //llamar a variables del store
        },
        created() {
            PageOptions.pageContentFullWidth = true;
        },
        beforeRouteLeave (to, from, next) {
            PageOptions.pageContentFullWidth = false;
            next();
        },
    }
</script>

