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

    obtenerVentasPorLineaDeVentaDeCliente: async function( codCliente ) {
        const requestData = {
            method: 'get',
            url: "seguimientoCliente/ventasPorLineaDeVentaDeCliente/"+codCliente
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio seguimientoCliente/ventasPorLineaDeVentaDeCliente/');
        }
    },

    obtenerVentasPorLineaDeMarketingDeCliente: async function( codCliente, codLineaVenta ) {
        const requestData = {
            method: 'get',
            url: "seguimientoCliente/ventasPorLineaMktCliente/"+codCliente+"/lineaVenta/"+codLineaVenta
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Error servicio obtenerVentasPorLineaDeMarketingDeCliente');
        }
    },
}