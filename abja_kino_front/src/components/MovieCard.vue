<template>
    <div class="container border">
        <div class="row">
            <div class="col">
                <div class="row">
                    {{movieInfo.title}}
                </div>
                <div class="row">
                    <PosterImage :image-data-base64="movieInfo.poster"/>
                </div>

            </div>
            <div class="col">
                <div class="row">
                    {{movieInfo.timeStamp}}
                </div>
                <div class="row">
                    Nupp, ValiPilet
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {defineComponent} from 'vue'
import PosterImage from "@/components/PosterImage.vue";

export default defineComponent({
    name: "MovieCard",
    components: {PosterImage},
    data() {
        return {
            movieInfo: {
                title: "Pealkiri",
                poster: "",
                timeStamp: "Kellaaeg"
            }
        }
    },
})
</script>


