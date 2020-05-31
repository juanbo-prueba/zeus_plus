import SeguimientoClienteFuncionarioService from "@/services/seguimientoClienteFuncionarioService";
import CumplimientoFucionarioService from "@/services/CumplimientoFucionarioService";

export default {
    namespaced: true,
    state: {
        error: false,
        errorMessage: '',
        resumenCumplimientoFuncionarioAnalisis: {},
        fechaActualizacionVentas: {},
        cumplimientoFucionarioPresentacion: [],
        filtroSegumientoCodLineaMkt: 0,
        codLineaMktFiltro: 0
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
        setCumplimientoPresentacion( state, data ) {
            state.cumplimientoFucionarioPresentacion = data;
        },
        setErrorCumplimientoPresentacion(state, message) {
            state.error = true;
            state.errorMessage = message;
            state.cumplimientoFucionarioPresentacion = [];
        },
        setFiltroSeguimientoCodLineaMkt (state, data) {
            console.log("Entra data: " + data );
            state.filtroSegumientoCodLineaMkt = data;
            console.log("fin state.filtroCodLineaMkt data: " + state.filtroSegumientoCodLineaMkt );
        },
        setCodLineaMktFiltro( state, data ) {
            state.codLineaMktFiltro = data
        }
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
        async cargarCumplimientoFucionarioPresentacionPresupuestoVentas({commit}, {codPersonal, codPresupuesto}){
            try {
                const {data} = await CumplimientoFucionarioService.obtenerCumplimientoVentasFucionarioPresentacion(codPersonal, codPresupuesto);
                commit('setCumplimientoPresentacion', data );
            }catch (e) {
                commit( 'setErrorCumplimientoFucionario', e.message );
            }finally {
                console.log( 'La peticion para obtener los datos cumplimiento por presentacion a terminado' );
            }
        },
        async cargarCumplimientoFucionarioLineaMkt({commit}, codPersonal){
            try {
                const {data} = await CumplimientoFucionarioService.obtenerCumplimientoFucionarioLineaMkt(codPersonal);
                // console.log("data kt: " + JSON.stringify(data) );

                const lineas = [];
                const presupuesto = [];
                const ventas = [];
                console.log("data.length: " + data.length);
                for (var i=0; i< data.length; i++){
                    lineas.push(data[i].nombreLineaMkt);
                    presupuesto.push(Math.round(data[i].montoPresupuesto));
                    ventas.push(Math.round(data[i].montoVenta));
                }
                console.log("Lineas MKT: " + lineas);
                commit('setCumplimientoGeneralLineaMkt', { data, lineas, presupuesto, ventas });
                // commit('setDiagramaLineasMarketing', lineas );
            }catch (e) {
                commit( 'setErrorCumplimientoFucionario', e.message );
            }finally {
                console.log( 'La peticion para obtener los datos cumplimiento lineas MKT a terminado' );
            }
        },
    },
    getters: {
        filtrarPresentacionesMktVersion2: (state) => {
            let presentaciones = state.cumplimientoFucionarioPresentacion;
            if(state.codLineaMktFiltro > 0 ) {
                presentaciones = presentaciones.filter( presentacion => presentacion.codLineaMkt === state.codLineaMktFiltro)
            }
            return presentaciones;
        },

    }
}