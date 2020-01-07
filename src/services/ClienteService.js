import ApiService from "@/services/api.service";

export default {
    getClientes() {
        const requesData = {
            url: '/cliente/clientes'
        };

        console.log('Antes de service');
       // return ApiService.get('/cliente/clientes');
        return ApiService.customRequest( requesData );
    }
}