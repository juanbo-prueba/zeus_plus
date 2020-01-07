import ApiService from "@/services/api.service";

export default {
    getCumplimientoFucionarioGeneral( codPersonal ){
        const requesData = {
            url: '/cumplimientoFuncionario/presupuesto/general/'+codPersonal
        };
        return ApiService.customRequest( requesData );
    },

    obtenerCumplimientoFucionarioLineaMkt( codPersonal ){
        const requesData = {
            url: '/cumplimientoFuncionario/presupuesto/lineaMkt/'+codPersonal
        };
        return ApiService.customRequest( requesData );
    },

    obtenerCumplimientoFucionarioPresentacion( codPersonal ){
        const requesData = {
            url: '/cumplimientoFuncionario/presupuesto/presentacion/'+codPersonal
        };
        return ApiService.customRequest( requesData );
    }
}