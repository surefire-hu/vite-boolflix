<script>
import { store } from '../../store';
import Movie from './Movie.vue';
export default {
    name: 'ListMoviesComponents',
    components: {
        Movie,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <div>
        <h2 class="text-6xl font-bold text-gray-300 mb-4 text-center p-6">Film</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Movie 
                v-for="movie in store.movies" 
                :key="movie.id"
                class="bg-gray-500 rounded-lg shadow-md p-4"
                :title="movie.title" 
                :originalTitle="movie.original_title" 
                :originalLanguage="movie.original_language" 
                :vote="Math.ceil(movie.vote_average)"
                :image="movie.poster_path"
                :overview="movie.overview">
            </Movie>
        </ul>

        <h2 class="text-6xl font-bold text-gray-300 mb-4 mt-8 text-center p-6">Serie TV</h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Movie 
                v-for="serie in store.series" 
                :key="serie.id"
                class="bg-gray-500 rounded-lg shadow-md p-4"
                :title="serie.name" 
                :originalTitle="serie.original_name" 
                :originalLanguage="serie.original_language" 
                :vote="Math.ceil(serie.vote_average)"
                :image="serie.poster_path"
                :overview="serie.overview">
            </Movie>
        </ul>
    </div>
</template>

<style scoped>
</style>