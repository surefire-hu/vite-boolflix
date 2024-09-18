<script>
import Flag from '../general/flag.vue';
import { store } from '../../store';
export default {
    name:'Movie',
    components: {
        Flag,
    },
    data() {
        return {
            store,
            maxVote: 5,
        };
    },
    props: {
        title: String,
        originalTitle: String,
        originalLanguage: String,
        vote: Number,
        image: String,
        overview: String,
    },
    computed: {
        emptyStars() {
            return this.maxVote - this.myVote;
        },
        myVote() {
            return Math.ceil(this.vote / 2);
        },
        formattedLanguage() {
            const languageMap = {
                'en' : 'us',
                'ja' : 'jp',
                'fr' : 'fr',
                'it' : 'it',
                'zh' : 'cn',
            };
            return languageMap[this.originalLanguage] || this.originalLanguage;
        }
    }
};
</script>

<template>
    <li class="p-4 flex flex-col items-center m-w">
        <div class="w-full flex justify-center mb-2">
            <img v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title" class="rounded max-w-full h-auto">
            <h1 v-else class="text-red-500">Sorry we didn't find anything :\</h1>
        </div>
        <h3 class="text-lg font-bold text-center">{{ title }}</h3> 
        <h2 class="text-gray-400 text-center">{{ originalTitle }}</h2>
        <p>Language: {{ originalLanguage }}</p>
        <Flag  class="mb-2" :language="formattedLanguage.toLowerCase()"/> 
        <div class="flex mb-2">
            <img v-for="n in myVote" src="/stella.png" alt="star_to_vote" class="w-4 h-4">
            <img v-for="n in emptyStars" src="/stellaVuota.png" alt="star_to_vote" class="w-4 h-4">
        </div>
        <p class="text-gray-300 text-center h-24 overflow-hidden">{{ overview }}</p>
    </li>
</template>

<style scoped>
</style>