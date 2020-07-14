<template>
    <div>
        <div class="profile-content bg-white p-t-5">
            <!-- begin tab-content -->
            <div class="tab-content p-0">



                <!-- begin invoice -->
                <div class="invoice">
                    <!-- begin invoice-company -->
                    <div class="invoice-company">
				<span class="pull-right ">
<!--					<router-link :to="{ name: 'route.listadoSegumientoClientes' }"  class="btn btn-sm btn-white m-b-10"><i class="fa fa-print fa-fw fa-lg"></i> Volver</router-link>-->
                    <router-link :to="{ name: 'route.listadoSegumientoClientes' }"  class="btn btn-sm btn-white m-b-10"><i class="fa fa-chevron-left  m-r-3"></i>    Volver atras</router-link>

				</span>

                        ANGEL DE LUZ
                    </div>
                    <!-- end invoice-company -->
                    <!-- begin invoice-header -->
                    <div class="invoice-header">
                        <div class="invoice-from">
                            <address class="m-t-5 m-b-5">
                                <strong class="text-inverse">Twitter, Inc.</strong><br />
                                Street Address<br />
                                City, Zip Code<br />
                                Phone: (123) 456-7890<br />
                                Fax: (123) 456-7890
                            </address>
                        </div>
                    </div>
                    <!-- end invoice-header -->
                    <!-- begin invoice-content -->
                    <div class="invoice-content">
                        <!-- begin table-responsive -->
                        <br/>

                        <h4 class="title text-blue-darker">Graficos de comportamiento de ventas del cliente.</h4>
                        <p class="location">Los graficos muestran datos de ventas y cobranzas agrupados por mes de los ultimos 20 meses.</p>

                        <br/>

                        <div class="container">
                            <!--<ul class="nav nav-pills justify-content-center">-->
                            <ul class="nav nav-pills">
                                <li class="nav-item" v-on:click="tab = 1">
                                    <router-link :to="{ name: 'route.ventascobranzas' }" class="btn btn-default m-r-3 " v-bind:class="{ 'active': tab === 1 }" >Ventas y cobranzas</router-link>
                                </li>
                                <li class="nav-item"  v-on:click="tab = 2">
                                    <router-link :to="{ name: 'route.ventaslineaventa' }" class="btn btn-default m-r-3"  v-bind:class="{ 'active': tab === 2 }">Ventas por linea de venta</router-link>
                                </li>
                                <li class="nav-item"  v-on:click="tab = 3">
                                    <router-link :to="{ name: 'route.ventaslineasMktBphCliente' }" class="btn btn-default m-r-3"  v-bind:class="{ 'active': tab === 3 }">Ventas lineas Mkt BPH</router-link>
                                </li>
                                <li class="nav-item"  v-on:click="tab = 4">
                                    <router-link :to="{ name: 'route.ventaslineasMktCofarCliente' }" class="btn btn-default m-r-3"  v-bind:class="{ 'active': tab === 4 }">Ventas lineas Mkt Cofar</router-link>
                                </li>
                            </ul>
                        </div>
                        <br/>


                        <router-view/>

                      <!--  <div class="example">
                            <apexchart width="1000" height="350" type="line" :options="chartOptions4" :series="series3"></apexchart>
                        </div>-->


                        <!-- end table-responsive -->

                    </div>
                    <!-- end invoice-content -->
                    <!-- begin invoice-note -->
                    <div class="invoice-note">
                        * Make all cheques payable to [Your Company Name]<br />
                        * Payment is due within 30 days<br />
                        * If you have any questions concerning this invoice, contact  [Name, Phone Number, Email]
                    </div>
                    <!-- end invoice-note -->
                    <!-- begin invoice-footer -->
                    <div class="invoice-footer">
                        <p class="text-center m-b-5 f-w-600">
                            THANK YOU FOR YOUR BUSINESS
                        </p>
                        <p class="text-center">
                            <span class="m-r-10"><i class="fa fa-fw fa-lg fa-globe"></i> matiasgallipoli.com</span>
                            <span class="m-r-10"><i class="fa fa-fw fa-lg fa-phone-volume"></i> T:016-18192302</span>
                            <span class="m-r-10"><i class="fa fa-fw fa-lg fa-envelope"></i> rtiemps@gmail.com</span>
                        </p>
                    </div>
                    <!-- end invoice-footer -->
                </div>
                <!-- end invoice -->



            </div>
            <!-- end tab-content -->
        </div>
        <!-- end profile-content -->
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import PageOptions from '../../config/PageOptions'

    export default {
        name: "seguimientoAnalisisCliente",
        data() {
            return {
                codCliente: this.$route.params.codCliente,
                tab: 1,
             }
        },
        mounted() {

        },
        methods: {

        },
        computed: {

        },
        created() {
            PageOptions.pageContentFullWidth = true;
        },
        beforeRouteLeave(to, from, next) {
            PageOptions.pageContentFullWidth = false;
            next();
        },
    }
</script>

<style scoped>

</style>