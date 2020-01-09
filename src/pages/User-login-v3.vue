<template>
    <!-- begin login -->
    <div class="login login-with-news-feed">
        <!-- begin news-feed -->
        <div class="news-feed">
            <div class="news-image" style="background-image: url(/public/img/login-bg/login-bg-11.jpg)"></div>
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
                <div class="brand">
                    <span class="logo"></span> <b>ZEUS</b> plus
                    <small>Sistemas de presupuesto</small>
                </div>
                <div class="icon">
                    <i class="fa fa-sign-in"></i>
                </div>
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
                        <button type="submit" @click="login" class="btn btn-success btn-block btn-lg">Sign me in</button>
                    </div>

                    <hr />
                    <p class="text-center text-grey-darker">
                        &copy; Color Admin All Right Reserved 2019
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
                usuario: '',
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