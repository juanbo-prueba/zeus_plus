import SeguimientoClienteFuncionarioService from "@/services/seguimientoClienteFuncionarioService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        resumenCumplimientoFuncionarioAnalisis: {},
        fechaActualizacionVentas: {},
    },
    mutations: {
        setResumenCumplimientoFuncionarioAnalisis(state, resumenCumplimientoFuncionarioAnalisis) {
            state.resumenCumplimientoFuncionarioAnalisis = resumenCumplimientoFuncionarioAnalisis;
        },
        setErrorResumenCumplimientoFuncionarioAnalisis(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.resumenCumplimientoFuncionarioAnalisis = {};

        },
        setFechaActualizacionVentas( state, data ) {
            state.fechaActualizacionVentas = data
        },
        setErrorFechaActualizacionVentas(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.fechaActualizacionVentas = {};
        },
    },
    actions: {
        async cargarResumenCumplimientoFuncionarioAnalisis({commit}, {codPersonal, codPresupuesto}) {
            try {
                const data = await SeguimientoClienteFuncionarioService.obtenerResumenCumplimientoFuncionarioAnalisis(codPersonal, codPresupuesto)
                commit('setResumenCumplimientoFuncionarioAnalisis', data);
            } catch (e) {
                commit('setErrorResumenCumplimientoFuncionarioAnalisis', e.message);
            } finally {
                console.log('La peticion para obtener cargarResumenCumplimientoFuncionarioAnalisis a terminado');
            }
        },
        async cargarFechaActualizacionVentas({commit}, codAreaEmpresa ) {
            try {
                const data = await SeguimientoClienteFuncionarioService.obtenerDeActualizacionDeSistemaVentas( codAreaEmpresa );
                commit('setFechaActualizacionVentas', data);
            } catch (e) {
                commit('setErrorFechaActualizacionVentas', e.message);
            } finally {
                console.log('La peticion para obtener cargarFechaActualizacionVentas a terminado');
            }
        },
    },
    getters: {

    }
}