import dashboardFuncionarioCumplimientoService from "@/services/cumplimientoFuncionario/dashboardFuncionarioCumplimientoService"

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        kpiFuncionarioCumplimientoLineas:{},
        listaDatosGraficoDeBarras: {
            categories:[],
            datos:[]
        }
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

        setListaDatosGraficoDeBarras( state, data ) {
            state.listaDatosGraficoDeBarras = data
        },
        setErrorListaDatosGraficoDeBarras(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.listaDatosGraficoDeBarras = {
                categories:[],
                datos:[]
            };
        },

    },
    actions: {
        async cargarKpiFuncionarioCumplimiento({commit}, { codPersonal } ) {
            try {
                const data = await dashboardFuncionarioCumplimientoService.obtenerKpiFuncionarioCumplimiento( codPersonal );
                commit('setKpiFuncionarioCumplimientoLineas', data);
            } catch (e) {
                commit('setErrorKpiFuncionarioCumplimientoLineas', e.message);
            } finally {
                console.log('La peticion para obtener cargarKpiFuncionarioCumplimiento a terminado');
            }
        },
        async cargarDatosGraficoBarrasLineaDeVentaFuncionario({commit}, { codPersonal } ) {
            try {
                const data = await dashboardFuncionarioCumplimientoService.obtenerDatosGraficoBarrasLineaDeVentaFuncionario( codPersonal );
                commit('setListaDatosGraficoDeBarras', data);
            } catch (e) {
                commit('setErrorListaDatosGraficoDeBarras', e.message);
            } finally {
                console.log('La peticion para obtener cargarDatosGraficoBarrasLineaDeVentaFuncionario a terminado');
            }
        }
    },
    getters: {

    },
}