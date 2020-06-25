import SeguimientoClienteService from "@/services/segumientoClientes/seguimientoClienteService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
/*        comportamientoVentasCliente: {},*/
        listaComportamientoVentasCliente: {
            categories:[],
            datos:[]
        }
    },
    mutations: {
/*        setComportamientoVentasCliente( state, data ) {
            state.comportamientoVentasCliente = data
        },*/
        setListaComportamientoVentasCliente( state, data ) {
             state.listaComportamientoVentasCliente = data
        },
        setErrorComportamientoVentasCliente(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.comportamientoVentasCliente = {};
        }
    },
    actions: {
        async cargarComportamientoVentasCliente({commit}, { codCliente } ) {
            try {
                console.log( "codCliente: " + codCliente );
                const data = await SeguimientoClienteService.obtenerComportamientoVentasCliente( codCliente );

                commit('setListaComportamientoVentasCliente', data);
            } catch (e) {
                commit('setErrorComportamientoVentasCliente', e.message);
            } finally {
                console.log('La peticion para obtener cargarComportamientoVentasCliente a terminado');
            }
        },
/*        async cargardetalle({commit}, { codCliente } ) {
            try {
                console.log( "codCliente: " + codCliente );
                const data = await SeguimientoClienteService.obtenerComportamientoVentasCliente( codCliente );

                commit('setListaResumen', data);
            } catch (e) {
                commit('setErrorComportamientoVentasCliente', e.message);
            } finally {
                console.log('La peticion para obtener cargarComportamientoVentasCliente a terminado');
            }
        }*/
    },
    getters: {
        getDetalleVentasCobranzas (state) {
           /* let clientesVentas = state.listaResumen;
            console.log("1: " + JSON.stringify( clientesVentas ))
            console.log("2: " + JSON.stringify( state.comportamientoVentasCliente ))*/
           let detalleVentas = [];
           let ventas =  state.listaComportamientoVentasCliente;
           console.log( ventas );

            let nvector = ventas.categories.length;
            for ( var i = nvector - 1; i >= 0; i--) {
                let fecha = ventas.categories[ i ];
                let montoVenta = ventas.datos[0].data[ i ];
                let montoCobranza = ventas.datos[1].data[ i ];
                let montoFidelidad = ventas.datos[2].data[ i ];
                detalleVentas.push({fecha: fecha, montoVenta: montoVenta, montoCobranza: montoCobranza, montoFidelidad: montoFidelidad})
            }

            return detalleVentas;
        }

    },

}