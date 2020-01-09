import SeguimientoClienteFuncionarioService from "@/services/seguimientoClienteFuncionarioService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        listaFuncionarioClientes: [],
        filter: {
            query: ''
        }
    },
    mutations: {
        setListaFuncionarioClientes( state, data ) {
            state.listaFuncionarioClientes = data
        },
        setErrorListaFuncionarioClientes(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.listaFuncionarioClientes = [];
        },
        setFilter (state, data) {
            state.filter[data['filter']] = data.value
        }
    },
    actions: {
        async cargarListaFuncionarioClientes({commit}, { codPresupuesto, codPersonal } ) {
            try {
                console.log("ENTRA A cargarListaFuncionarioClientes")
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
        filteredClientes ( state ) {
            let clientes = state.listaFuncionarioClientes;
            if ( state.filter.query.length > 1 ) {
                clientes = clientes.filter(cliente => cliente.nombreCliente.includes(state.filter.query) )
            }
            return clientes;
        }
    }
}