import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import authModule from '@/store/modules/auth';
import clientes from '@/store/modules/clientes';
import cumplimientoFuncionario from "@/store/modules/cumplimientoFuncionario";
import seguimientoClienteFuncionarioResumenStore from "@/store/modules/cumplimientoFuncionario/seguimientoClienteFuncionarioResumenStore";
import seguimientoFuncionarioClientesStore from "@/store/modules/cumplimientoFuncionario/seguimientoFuncionarioClientesStore";
import seguimientoClienteKpiGraficos from "@/store/modules/cumplimientoFuncionario/seguimientoClienteKpiGraficos";


export default new Vuex.Store({
    modules:{
        authModule,
        clientes,
        cumplimientoFuncionario,
        seguimientoClienteFuncionarioResumenStore,
        seguimientoFuncionarioClientesStore,
        seguimientoClienteKpiGraficos

    }
})
