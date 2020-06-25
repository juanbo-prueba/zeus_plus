import ApiService from "@/services/api.service";
export default {
    obtenerComportamientoVentasCliente: async function( codCliente ) {
        const requestData = {
            method: 'get',
            url: "seguimientoCliente/comportamientoVentasCliente/"+codCliente
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerComportamientoVentasCliente');
        }
    },
}