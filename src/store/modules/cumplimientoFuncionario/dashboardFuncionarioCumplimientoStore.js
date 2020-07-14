import dashboardFuncionarioCumplimientoService from "@/services/cumplimientoFuncionario/dashboardFuncionarioCumplimientoService"

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        kpiFuncionarioCumplimientoLineas:{}
    },
    mutations: {
        setKpiFuncionarioCumplimientoLineas( state, data ) {
            state.kpiFuncionarioCumplimientoLineas = data
        },
        setErrorKpiFuncionarioCumplimientoLineas(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.kpiFuncionarioCumplimientoLineas = {};
        },
    },
    actions: {
        async cargarKpiFuncionarioCumplimiento({commit}, { codPersonal } ) {
            try {
                console.log( "codCliente: " + codPersonal );
                const data = await dashboardFuncionarioCumplimientoService.obtenerKpiFuncionarioCumplimiento( codPersonal );

                commit('setKpiFuncionarioCumplimientoLineas', data);
            } catch (e) {
                commit('setErrorKpiFuncionarioCumplimientoLineas', e.message);
            } finally {
                console.log('La peticion para obtener cargarKpiFuncionarioCumplimiento a terminado');
            }
        }
    },
    getters: {

    },
}