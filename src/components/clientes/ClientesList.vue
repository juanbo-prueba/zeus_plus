<template>
    <div>
        <!-- begin table-responsive -->
        <div class="table-responsive">
            <table class="table m-b-0">
                <thead>
                <tr>
                    <th>Cod. Cliente</th>
                    <th>Nombre Cliente</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="cliente in clientes" :key="cliente.codCliente">
                    <td>{{cliente.codCliente}}</td>
                    <td>{{cliente.nombreCliente}}</td>
                </tr>

                </tbody>
            </table>
        </div>
        <!-- end table-responsive -->
    </div>
</template>

<script>
    export default {
        name: "ClientesList",
        props: {
            clientes: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>