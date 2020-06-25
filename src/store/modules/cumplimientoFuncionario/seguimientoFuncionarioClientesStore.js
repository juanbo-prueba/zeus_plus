import SeguimientoClienteFuncionarioService from "@/services/seguimientoClienteFuncionarioService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        listaFuncionarioClientes: [],
        filter: {
            query: '',
            selectClientes: 'Todos'
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
            console.log("2 set filter")
            state.filter[data['filter']] = data.value
            console.log("4 termina set filter")
        }
    },
    actions: {
        async cargarListaFuncionarioClientes({commit}, { codPresupuesto, codPersonal } ) {
            try {
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
            console.log("3 filteredclientes")
            let clientesVentas = state.listaFuncionarioClientes;
       /*     if( state.filter.query.length > 1 ) {
                clientesVentas = clientesVentas.filter(cliente => cliente.nombreCliente.includes(state.filter.query));
            }*/
            if ( state.filter.selectClientes == 'Todos'){

            }

            if ( state.filter.selectClientes == 'Clientes con ventas'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaActual > 0 );
            }

            if ( state.filter.selectClientes == 'Clientes sin ventas'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaActual <= 0 );
            }

            if ( state.filter.selectClientes == 'Clientes con descuento fidelidad'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaDescuentoFidelidadCalculado > 0 );
            }

            if ( state.filter.selectClientes == 'Clientes sin descuento fidelidad'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaDescuentoFidelidadCalculado <= 0 );
            }

            if ( state.filter.selectClientes == 'Clientes aplicado descuento fidelidad'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaDescuentoFidelidadAplicado > 0 );
            }

            if ( state.filter.selectClientes == 'Clientes no aplicado descuento fidelidad'){
                clientesVentas = clientesVentas.filter(cliente => cliente.totalVentaDescuentoFidelidadAplicado <= 0 );
            }

            return clientesVentas;
        },
        totalFiltroVentas: (state, getters) => {
            let montoVentasTotal = 0;
            let montoVentasBph = 0;
            let montoVentasCofar = 0;
            let clientesVentas = getters.filteredClientes;

            clientesVentas.forEach( cliente => {
                montoVentasTotal += cliente.totalVentaActual;
                montoVentasBph += cliente.totalVentaActualBph;
                montoVentasCofar += cliente.totalVentaActualCofar;
            })

            return { montoVentasTotal, montoVentasBph,  montoVentasCofar}
        }
    }
}