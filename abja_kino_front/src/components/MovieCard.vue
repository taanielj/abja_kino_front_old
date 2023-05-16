<template>
    <div class="container border">
        <div class="row">
            <div class="col">
                <div class="row">
                    <router-link :to=`/movie/${movieInfo.id}`>
                        {{movieInfo.title}}
                    </router-link>

                </div>
                <div class="row" @click="navigateToMovieView">
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
import router from "@/router";
import {useRoute} from "vue-router";

export default defineComponent({
    name: "MovieCard",
    components: {PosterImage},
    data() {
        return {
            movieInfo: {
                id: 0,
                title: "Pealkiri",
                poster: "",
                timeStamp: "Kellaaeg"
            }
        }
    },
    methods:{
        navigateToMovieView() {
            router.push({name : "MovieRoute"})
        },
        route() {
            useRoute()
            watch(() => route.params, newValue => {
                console.log()
            })
        }
    },


})
</script>


