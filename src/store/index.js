import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import authModule from '@/store/modules/auth';
import clientes from '@/store/modules/clientes';
import cumplimientoFuncionario from "@/store/modules/cumplimientoFuncionario";
import seguimientoClienteFuncionarioResumenStore from "@/store/modules/cumplimientoFuncionario/seguimientoClienteFuncionarioResumenStore";
import seguimientoFuncionarioClientesStore from "@/store/modules/cumplimientoFuncionario/seguimientoFuncionarioClientesStore";
import seguimientoClienteKpiGraficos from "@/store/modules/cumplimientoFuncionario/seguimientoClienteKpiGraficos";
import seguimientoClientesStore from "@/store/modules/cumplimientoFuncionario/seguimientoClientesStore";
import dashboardFuncionarioCumplimientoStore from "@/store/modules/cumplimientoFuncionario/dashboardFuncionarioCumplimientoStore"



export default new Vuex.Store({
    modules:{
        authModule,
        clientes,
        cumplimientoFuncionario,
        seguimientoClienteFuncionarioResumenStore,
        seguimientoFuncionarioClientesStore,
        seguimientoClienteKpiGraficos,
        seguimientoClientesStore,
        dashboardFuncionarioCumplimientoStore
    }
})
