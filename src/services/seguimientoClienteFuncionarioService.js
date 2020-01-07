import ApiService from "@/services/api.service";

export default {
    obtenerResumenCumplimientoFuncionarioAnalisis: async function( codPersonal, codPresupuesto ) {
        const requestData = {
            method: 'get',
            url: "/cumplimientoFuncionario/presupuestoSeguimientoResumenLineas/"+codPresupuesto+"/personal/"+codPersonal
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerResumenCumplimientoFuncionarioAnalisis');
        }
    },
    obtenerDeActualizacionDeSistemaVentas: async function( codAreaEmpresa ) {
        const requestData = {
            method: 'get',
            url: "/cumplimientoFuncionario/fechaActualizacionVentas/"+codAreaEmpresa
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerDeActualizacionDeSistemaVentas');
        }
    },
    obtenerListadoFuncionarioClientes: async function( codPresupuesto, codPersonal ) {
        const requestData = {
            method: 'get',
            url: "cumplimientoFuncionario/presupuestoClientesFuncionario/"+codPresupuesto+"/funcionario/"+codPersonal
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerListadoFuncionarioClientes');
        }
    },

}