<template>
    <div class="container">
        <div class="row">
            <div class="col justify-content-lg-start">
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
                {{ movieInfo.description}}
            </div>
        </div>


    </div>
</template>

<script>
import PosterImage from "@/components/PosterImage.vue";
import router from "@/router";

export default {
    name: "MovieView",
    components: {PosterImage},
    data() {
        return {
            movieId: {
                id: router.currentRoute.value.params.id
            },
            movieInfo: {
                id: 1,
                title: "Pealkiri",
                poster: "",
                timeStamp: "Kellaaeg",
                description: `In the thrilling action-adventure film "Shadow's Edge," directed by James Anderson, a former elite assassin, Alex Sullivan, is forced out of hiding when his estranged sister is kidnapped by a ruthless criminal syndicate. With time running out, Alex embarks on a high-stakes mission across exotic locations and dangerous landscapes to rescue his sister and bring down the syndicate. Faced with relentless enemies and his own dark past, Alex must confront his inner demons and tap into his lethal skills to ensure his sister's survival. "Shadow's Edge" delivers heart-pounding suspense, intense fight sequences, and a gripping narrative that will leave audiences on the edge of their seats.`
            }
        }
    },
}
</script>

<style scoped>

</style>