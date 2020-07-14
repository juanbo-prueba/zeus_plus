import ApiService from "@/services/api.service";

export default {
    obtenerKpiFuncionarioCumplimiento: async function( codPersonal ) {
        const requestData = {
            method: 'get',
            url: "dashboardFuncionario/kpiFuncionarioCumplimiento/"+codPersonal
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerKpiFuncionarioCumplimiento');
        }
    },
}