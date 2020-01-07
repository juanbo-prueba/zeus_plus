import { UserService, AuthenticationError } from "@/services/user.service";
import { TokenService } from '@/services/storage.service';
import router from '@/router';

export default {
    namespaced: true,
    state: {
        user: null,
        role: 'guest',
        logged: false,
        authenticating: false,
        authenticationError: '',
        authenticationErrorCode: 0,
        accessToken: TokenService.getToken(),
        datosUsuario: {
            accessToken: '',
            tokenType: '',
            logeoExito: false,
            usuario: {
                id: 0,
                codAreaEmpresa: 0,
                codCargo: 0,
                name: '',
                username: '',
                email: '',
                password: null
            }
        },
        menuUsuario: [],
        mesPresupuestoSeguiemiento: {
            codPresupuesto: 0,
            nombreMes: ''
        }
    },
    actions: {
        async dbLogin({ commit }, {usuario, password}) {
            // console.log("AUTH MODULE");
            commit('loginRequest');

            try {
                const response = await UserService.login(usuario, password);
                commit('loginSuccess', response.accessToken);
                commit('datosUsuario', response);
                console.log("codPersona: " + response.usuario.id)

                const responseMenu = await UserService.obtenerMenuUsuario(response.usuario.id);
                commit('datosMenuUsuario', responseMenu );

                const responseMesPresupuestoActual = await UserService.obtenerMesActualPresupuesto( 1 );
                commit('datosMesPresupuestoActual', responseMesPresupuestoActual );

                console.log("Mes presupuesto: " + JSON.stringify(responseMesPresupuestoActual) );
                // const { data } = response;
                // console.log("antes de ultimo: " + JSON.stringify(response)  );
                // console.log("usuario ultimo: " + data );

                // Redirect the user to the page he first tried to visit or to the home view

                console.log("Entra a root");
                router.push(router.history.current.query.redirect || '/');

                return true
            } catch (e) {
                if (e instanceof AuthenticationError) {
                    commit('loginError', {errorCode: e.errorCode, errorMessage: e.message})
                }
                return false
            }
        }
    },
    mutations: {
        //se puede ejecutar al iniciar sesion o cuando la haya cerrado
        setUser: ( state, user ) => {
            if ( user ) {
                state.user = {
                    uid: user.uid,
                    usuario: user.usuario
                };
                state.logged = true;
            } else {
                state.user = null;
                state.logged = false;
            }
        },
        setRole: ( state, role ) => {
            state.role = role;
        },
        loginRequest(state) {
            state.authenticating = true;
            state.authenticationError = ''
            state.authenticationErrorCode = 0
        },
        loginSuccess(state, accessToken) {
            state.accessToken = accessToken
            state.authenticating = false;
        },
        datosUsuario(state, response) {
            state.datosUsuario = response;
        },
        datosMenuUsuario( state, response ){
            state.menuUsuario = response;
        },
        datosMesPresupuestoActual( state, response ){
            state.mesPresupuestoSeguiemiento = response;
        },
        loginError(state, {errorCode, errorMessage}) {
            state.authenticating = false
            state.authenticationErrorCode = errorCode
            state.authenticationError = errorMessage
        }
    },
    getters: {
        logged: ( state ) => {
            return !!state.user;
        },
        role: ( state ) => {
            return state.role;
        },
        isCustomer: ( state ) => {
            return state.role === 'customer';
        },
        authenticationError: (state) => {
            return state.authenticationError
        }

    }
}