import SeguimientoClienteFuncionarioService from "@/services/seguimientoClienteFuncionarioService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        resumenCumplimientoFuncionarioAnalisis: {},
        fechaActualizacionVentas: {},
        listaFuncionarioClientes: []
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
        setListaFuncionarioClientes( state, data ) {
            state.listaFuncionarioClientes = data
        },
        setErrorListaFuncionarioClientes(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.listaFuncionarioClientes = [];
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
        async cargarListaFuncionarioClientes({commit}, { codPresupuesto, codPersonal } ) {
            try {
                console.log("Entra a revisar : " + codPresupuesto + " :: " + codPersonal );
                const data = await SeguimientoClienteFuncionarioService.obtenerListadoFuncionarioClientes( codPresupuesto, codPersonal );
                commit('setListaFuncionarioClientes', data);
            } catch (e) {
                commit('setErrorListaFuncionarioClientes', e.message);
            } finally {
                console.log('La peticion para obtener cargarListaFuncionarioClientes a terminado');
            }
        }
    },
    getters: {
    }
 }