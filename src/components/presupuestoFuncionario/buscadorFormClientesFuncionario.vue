<template>
    <div>
 <!--       <b-form>
            <b-row>
                <b-col>
                    <b-form-group
                            label="Consulta"
                            label-for="query"
                    >
                        <b-form-input
                                id="query"
                                v-model="query"
                                autocomplete="off"
                        >
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>-->


      <!--  <b-form-radio-group
                v-model="selected"
                :options="options"
                name="radio-inline"
        ></b-form-radio-group>

        <b-form-checkbox v-model="ventasBph" name="check-button"  switch>
            Switch Checkbox <b>(Checked: {{ ventasBph }})</b>
        </b-form-checkbox>-->
        <br/>
        <b-dropdown  variant="white" class="m-r-5"  :text="selectClientes" v-model="selectClientes">
           <!-- <template slot="button-content">
                View All
            </template>-->
            <b-dropdown-item @click="selectClientes='Todos'">Todos</b-dropdown-item>
            <b-dropdown-item @click="selectClientes='Clientes con ventas'">Clientes con ventas</b-dropdown-item>
            <b-dropdown-item @click="selectClientes='Clientes sin ventas'">Clientes sin ventas</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="selectClientes='Clientes con descuento fidelidad'">Clientes con descuento fidelidad</b-dropdown-item>
            <b-dropdown-item @click="selectClientes='Clientes sin descuento fidelidad'">Clientes sin descuento fidelidad</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="selectClientes='Clientes aplicado descuento fidelidad'">Clientes aplicado descuento fidelidad</b-dropdown-item>
            <b-dropdown-item @click="selectClientes='Clientes no aplicado descuento fidelidad'">Clientes no aplicado descuento fidelidad</b-dropdown-item>
        </b-dropdown>

        <br/> <br/>


    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "buscadorFormClientesFuncionario",
        data () {
            return {
              //  selectClientes: 'Todos'
                /*selected: 'first',
                options: [
                    { text: 'First radio', value: 'first' },
                    { text: 'Second radio', value: 'second' },
                    { text: 'Third radio', value: 'third' }
                ],
                ventasBph: false*/
            }
        },
        computed: {
            ...mapState('seguimientoFuncionarioClientesStore', ['filter']),
            query: {
                get () {
                     return this.filter.query
                },
                set (value) {
                     this.$store.commit('seguimientoFuncionarioClientesStore/setFilter', {
                        filter: 'query',
                        value
                    })
                }
            },
            selectClientes: {
                get () {
                    console.log("get select")
                    return this.filter.selectClientes
                },
                set (value) {
                      console.log("set select")
                      this.$store.commit('seguimientoFuncionarioClientesStore/setFilter', {
                        filter: 'selectClientes',
                        value
                    })
                }
            }
        }
    }
</script>

<style scoped>

</style>