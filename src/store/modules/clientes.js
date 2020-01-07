import ClienteService from "@/services/ClienteService";

export default {
    namespaced: true,
    state: {
        clientes: [],
        error: false,
        errorMessage:''
    },
    mutations:{
        setClientes( state, clientes ) {
            state.clientes = clientes;
        },
        clientesError( state, payload ) {
            state.error = true;
            state.errorMessage = payload;
            state.clientes = []
        }
    },
    actions: {
         async fectchClientes ({commit}) {

            try {

                const {data}  = await ClienteService.getClientes();
               // console.log('entra a modulo: ' + JSON.stringify(data)     );
                commit('setClientes', data);
            } catch (e) {
                commit('clientesError', e.message);
            } finally {
                // eslint-disable-next-line no-console
                console.log("Hello world!"); //
            }
        }
    },
    getters: {
        done: ( state ) => {
            return state.clientes;
        }
    }

}