<template>
    <div class="container">
        <div class="row">
            <div class="col justify-content-center">
                <div class="row">
                    <h1>Pealkiri</h1>
                </div>
                <div class="row w-50">
                    <PosterImage/>
                </div>
                <div class="row">
                    Treiler
                </div>
            </div>
            <div class="col">
                Siia tuleb filmi kirjeldus
            </div>
        </div>


    </div>
</template>

<script>
import PosterImage from "@/components/PosterImage.vue";

export default {
    name: "MovieView",
    components: {PosterImage},
    data() {
        return {
            movieInfo: {
                id: this.$route.
            }
        }
    },
}
</script>

<style scoped>

</style>