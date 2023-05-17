<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <h1>
                    Administraatori töölaud
                </h1>
                <GenreTable/>
                <TicketTypeTable/>
            </div>
        </div>
    </div>
</template>

<script>
import GenreTable from "@/components/GenreTable.vue";
import TicketTypeTable from "@/components/TicketTypeTable.vue";

export default {
    name: "AdminView",
    components: {TicketTypeTable, GenreTable}
}
</script>

<style scoped>

</style>