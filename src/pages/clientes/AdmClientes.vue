<template>
    <div>
        <panel title="Administracion de clientes 2">
            <p>
                <button v-b-modal.modalWithoutAnimation class="btn btn-sm btn-success">Registrar</button>
            </p>
           <clientes-list :clientes="done"></clientes-list>

        </panel>

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import ClientesList from "@/components/clientes/ClientesList";

    export default {
        name: "AdmClientes",
        components: { ClientesList },
        mounted() {
            console.log('lista clientes')
            this.fectchClientes();
        },
        methods: {
            ...mapActions( 'clientes', ['fectchClientes'] )
        },
        computed: {
           ...mapGetters( 'clientes', ['done'])
        }
    }
</script>

<style scoped>

</style>