import ApiService from '@/services/api.service'
import { TokenService } from "@/services/storage.service";

class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message)
        this.name = this.constructor.name
        this.message = message
        this.errorCode = errorCode
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService.
     *
     * @returns access_token
     * @throws AuthenticationError
     **/
    login: async function(usuario, password) {
        console.log(" USERSERVICE");
        const requestData = {
            method: 'post',
            url: "/login/logearse",
            data: {
                grant_type: 'password',
                usernameOrEmail: usuario,
                password: password
            }
        }

        try {
            const response = await ApiService.customRequest(requestData);



            TokenService.saveToken(response.data.accessToken);
            console.log('despues token');
            // TokenService.saveRefreshToken(response.data.refresh_token)
            ApiService.setHeader();
            console.log('despues stae');
            // NOTE: We haven't covered this yet in our ApiService
            //       but don't worry about this just yet - I'll come back to it later
            // ApiService.mount401Interceptor();
           // window.getApp.$emit('APP_LOGIN_SUCCESS');
          //  window.getApp.$emit('LOGIN_ERROR');
            return response.data;
        } catch (error) {
            console.log('LOGIN_ERROR ');
          //  window.getApp.$emit('LOGIN_ERROR');
            console.log( error );
            console.log('ERROR LOGEO: ', error.response.status + ' ** ' + error.response.data.detail);
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }
    },

    obtenerMenuUsuario: async function( codPersona ) {
        console.log(" USERSERVICE MENU");
        const requestData = {
            method: 'post',
            url: "/login/menuUsuario",
            data: {
                 codPersona: codPersona
            }
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('MENU ERROR');
        }
    },

    obtenerMesActualPresupuesto: async function( estadoRegistro ) {
        console.log(" SERVICIO MES PRESUPUESTO");
        const requestData = {
            method: 'get',
            url: "/login/mesPresupuesto/"+estadoRegistro,
        }
        try {
            const response = await ApiService.customRequest(requestData);
            return response.data;
        } catch (error) {
            console.log('Estado Presupuesto');
        }
    },
    /**
     * Refresh the access token.
     **/
    refreshToken: async function() {
        const refreshToken = TokenService.getRefreshToken()

        const requestData = {
            method: 'post',
            url: "/o/token/",
            data: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)

            TokenService.saveToken(response.data.access_token)
            TokenService.saveRefreshToken(response.data.refresh_token)
            // Update the header in ApiService
            ApiService.setHeader()

            return response.data.access_token
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.response.data.detail)
        }

    },

    /**
     * Logout the current user by removing the token from storage.
     *
     * Will also remove `Authorization Bearer <token>` header from future requests.
     **/
    logout() {
        // Remove the token and remove Authorization header from Api Service as well
        TokenService.removeToken()
        TokenService.removeRefreshToken()
        ApiService.removeHeader()

        // NOTE: Again, we'll cover the 401 Interceptor a bit later.
        //  ApiService.unmount401Interceptor()
    }
}

export default UserService

export { UserService, AuthenticationError }