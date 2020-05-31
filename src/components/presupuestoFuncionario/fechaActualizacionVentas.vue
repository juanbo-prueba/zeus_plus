<template>
    <div class="clearfix">
             <span v-b-modal.modalWidgetImgIcon class="pull-right f-s-12 text-grey-darker m-r-3 p-t-5 p-b-15">
                  <span class="f-w-700"> Mes Seguimiento:</span>
                  <span></span>
                  {{ mesPresupuestoSeguiemiento.nombreMes }}
                 <span class="f-w-700 p-l-10"> Actualizacion Sistema:</span>
                 {{ fechaActualizacionVentas.fechaActualizacionModificada }} {{ fechaActualizacionVentas.hora }}
             </span>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    export default {
        name: "fechaActualizacionVentas",
        mounted() {
            this.cargarFechaActualizacionVentas(this.datosUsuario.usuario.codAreaEmpresa);
        },
        methods: {
            ...mapActions('seguimientoClienteFuncionarioResumenStore', ['cargarFechaActualizacionVentas']),
        },
        computed: {
            ...mapState('authModule', ['datosUsuario', 'mesPresupuestoSeguiemiento']),
            ...mapState('seguimientoClienteFuncionarioResumenStore', ['fechaActualizacionVentas']),
        }
    }
</script>

