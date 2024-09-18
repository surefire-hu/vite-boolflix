<script>
//importazione file global state
import { store } from '../../store';
export default {
    name:'Movie',
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
        }
    }
};
</script>

<template>
    <li class="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center">
        <div class="w-full flex justify-center mb-2">
            <img v-if="image !== null" :src="`${this.store.apiPoster}${image}`" :alt="title" class="rounded max-w-full h-auto">
            <h1 v-else class="text-red-500">Non Abbiamo Trovato Nulla :\</h1>
        </div>
        <h3 class="text-lg font-bold text-center">{{ title }}</h3> 
        <h2 class="text-gray-400 text-center">{{ originalTitle }}</h2>
        <p>Lingua: {{ originalLanguage }}</p>
        <div class="flex mb-2">
            <img v-for="n in myVote" src="/stella.png" alt="star_to_vote" class="w-4 h-4">
            <img v-for="n in emptyStars" src="/stellaVuota.png" alt="star_to_vote" class="w-4 h-4">
        </div>
        <p class="text-gray-300 text-center">{{ overview }}</p>
    </li>
</template>

<style scoped>
</style>