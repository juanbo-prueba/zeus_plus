<template>
    <div>
        <b-form>
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
        </b-form>

    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "buscadorFormClientesFuncionario",
        data () {
            return {

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
            }
        }
    }
</script>

<style scoped>

</style>