<template>
    <div>
        <!-- begin profile-content -->
        <div class="profile-content bg-white p-t-5">
            <!-- begin tab-content -->
            <div class="tab-content p-0">

                <h3 class="m-t-0 m-b-15 f-w-500">Seguimiento de ventas</h3>


                <fecha-actualizacion-ventas-vertical></fecha-actualizacion-ventas-vertical>
                <resumen-cliente-funcionario-seguimiento
                        :resumenCumplimientoFuncionarioAnalisis="resumenCumplimientoFuncionarioAnalisis">
                </resumen-cliente-funcionario-seguimiento>

                <buscador-form-clientes-funcionario></buscador-form-clientes-funcionario>
                <listado-clientes-funcionario-ventas></listado-clientes-funcionario-ventas>


            </div>
            <!-- end tab-content -->
        </div>
        <!-- end profile-content -->
    </div>
</template>

<script>

    import {mapState, mapActions} from 'vuex';
    import accounting from 'accounting'
    import PageOptions from '../../config/PageOptions'
    import Vue from 'vue'
    import ResumenClienteFuncionarioSeguimiento
        from "@/components/presupuestoFuncionario/resumenClienteFuncionarioSeguimiento";
    import BuscadorFormClientesFuncionario from "@/components/presupuestoFuncionario/buscadorFormClientesFuncionario";
    import ListadoClientesFuncionarioVentas from "@/components/presupuestoFuncionario/listadoClientesFuncionarioVentas";
    import FechaActualizacionVentasVertical from "@/components/presupuestoFuncionario/fechaActualizacionVentasVertical";


    Vue.filter('moneda', function (valor) {
        return accounting.formatMoney(valor, "", 2, ".", ",");
    })

    export default {
        name: "seguimientoClientesVentas",
        components: {
            FechaActualizacionVentasVertical,
            ResumenClienteFuncionarioSeguimiento,
            BuscadorFormClientesFuncionario,
            ListadoClientesFuncionarioVentas
        },
        mounted() {
            this.cargarResumenCumplimientoFuncionarioAnalisis({
                codPersonal: this.datosUsuario.usuario.id,
                codPresupuesto: this.mesPresupuestoSeguiemiento.codPresupuesto
            });
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cargarResumenCumplimientoFuncionarioAnalisis']),
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteFuncionarioResumenStore', ['resumenCumplimientoFuncionarioAnalisis']),
        },
        created() {
            PageOptions.pageContentFullWidth = true;
        },
        beforeRouteLeave(to, from, next) {
            PageOptions.pageContentFullWidth = false;
            next();
        },
    }
</script>

<style scoped>

</style>