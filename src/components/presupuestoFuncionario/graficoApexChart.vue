<template>
    <div class="vertical-box with-grid with-border-top">
        <apexchart type="bar" :options="options" :series="series"></apexchart>
    </div>
</template>

<script>
    export default {
        name: "graficoApexChart",
        props: ['options','series'],
    }
</script>

<style scoped>

</style>