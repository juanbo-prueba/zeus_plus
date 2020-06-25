<template>
    <div class="clearfix">

        <ul class="media-list underline m-b-15 p-b-15">
            <li class="media media-sm clearfix">

                <div class="media-body text-grey-darker">
                    <div >
                        <span class="f-w-700">Mes Seguimiento:</span>
                        <span></span>
                        {{ mesPresupuestoSeguiemiento.nombreMes }}
                    </div>
                    <div class="m-b-3"><i class="fa fa-clock fa-fw"></i>
                        <span class="f-w-700 ">Actualizacion Sistema:</span>
                        {{ fechaActualizacionVentas.fechaActualizacionModificada }} {{ fechaActualizacionVentas.hora }}
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex";
    export default {
        name: "fechaActualizacionVentasVertical",
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

