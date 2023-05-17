<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h1>
                    Administraatori töölaud
                </h1>
                <GenreTable/>
            </div>
        </div>
    </div>
</template>

<script>
import GenreTable from "@/components/GenreTable.vue";

export default {
    name: "AdminView",
    components: {GenreTable}
}
</script>

<style scoped>

</style>