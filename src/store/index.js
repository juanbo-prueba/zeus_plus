import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import authModule from '@/store/modules/auth';
import clientes from '@/store/modules/clientes';
import cumplimientoFuncionario from "@/store/modules/cumplimientoFuncionario";
import seguimientoClienteFuncionarioStore from "@/store/modules/seguimientoClienteFuncionarioStore";

export default new Vuex.Store({
    modules:{
        authModule,
        clientes,
        cumplimientoFuncionario,
        seguimientoClienteFuncionarioStore
    }
})
