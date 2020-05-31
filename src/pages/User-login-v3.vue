<template>
    <!-- begin login -->
    <div class="login login-with-news-feed">

        <!-- begin news-feed -->
        <div class="news-feed">
            <div class="news-image" style="background-image: url(/assets/img/login-bg/login-bg-16.jpg)"></div>
            <div class="news-caption">

                <h4 class="caption-title"><b>Color</b> Admin App</h4>
                <p>
                    Download the Color Admin app for iPhone®, iPad®, and Android™. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

            </div>
        </div>
        <!-- end news-feed -->
        <!-- begin right-content -->
        <div class="right-content">
            <!-- begin login-header -->
            <div class="login-header">


               <!-- <span class="navbar-brand">
					<span >

                &lt;!&ndash; begin widget-img &ndash;&gt;
					<img src="../assets/img/user/iconzplus.png" height="34" width="34"/>



				</span>
					<b class="p-l-5 p-r-5">Zeus </b> Plus	</span>-->

                <p class="text-center" >
                    <img src="../assets/img/user/logozeusvertical.png" height="50%" width="50%"/>



<!--                    <b class="p-l-5 p-r-5">ZEUS</b> Plus-->
<!--                    <small>Sistemas de presupuesto</small>-->
                </p>

            </div>
            <!-- end login-header -->
            <!-- begin login-content -->
            <div class="login-content">
                <div class="margin-bottom-0">
                    <div class="form-group m-b-15">
                        <input type="text" class="form-control form-control-lg" v-model="usuario" placeholder="Usuario" required />
                    </div>
                    <div class="form-group m-b-15">
                        <input type="password" class="form-control form-control-lg" v-model="password" placeholder="Password" required />
                    </div>
                    <div class="checkbox checkbox-css m-b-30">
                        <input type="checkbox" id="remember_me_checkbox" value="" />
                        <label for="remember_me_checkbox">
                            Remember Me
                        </label>
                    </div>
                    <div class="login-buttons">
                        <button type="submit" @click="login" class="btn btn-primary btn-block btn-lg">Iniciar sesión</button>
                    </div>

                    <hr />
                    <p class="text-center text-grey-darker">
                        Departamento de Sistemas 2020
                    </p>
                </div>
            </div>
            <!-- end login-content -->
        </div>
        <!-- end right-container -->

        <notifications group="bottom-right" position="bottom right" :speed="500" />
    </div>
    <!-- end login -->
</template>

<script>
    import { mapActions } from 'vuex';
    import PageOptions from '../config/PageOptions.vue'

    export default {
        data() {
            return {
                usuario: 'jlopez',
                password: 'cofar.2019',
            }
        },
        created() {
            PageOptions.pageEmpty = true;
            document.body.className = 'bg-white';
        },
        beforeRouteLeave (to, from, next) {
            PageOptions.pageEmpty = false;
            document.body.className = '';
            next();
        },
        methods: {
            ...mapActions('authModule', ['dbLogin']),
            login ( ) {
               // this.show('bottom-right', 'warn')
              // this.$store.dispatch( 'dbLogin', {usuario: this.usuario, password: this.password} )
               this.dbLogin( {usuario: this.usuario, password: this.password} )
                   .then( res => {
                       if ( res ) {
                           this.$notify({
                               group: 'bottom-right',
                               title: `Login `,
                               text: `Usuario correcto. <br>`,
                               type: 'success'
                           })
                       } else {
                           this.$notify({
                               group: 'bottom-right',
                               title: `Login `,
                               text: `Usuario incorrecto. <br> Intente de nuevo`,
                               type: 'warn'
                           })
                       }
                   }).catch( err => {
                       console.log( 'respuesta: ' + err );
                   })


            },
       /*     show (group, type = '') {
                const text = `
					Este es notificacion de texto!
					<br>
					Date: ${new Date()}
				`
                this.$notify({
                    group: 'bottom-right',
                    title: `Test ${type} notification `,
                    text: text,
                    type: 'warn'
                })
            },*/
        }
    }
</script>