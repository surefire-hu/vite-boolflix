<script>
import { store } from '../../store';
export default {
    name: 'Header',
    data() {
        return {
            store,
        };
    }
};
</script>

<template>
    <header class="bg-black p-4 shadow-md sticky top-0 z-10">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <img class="h-8" src="/public/logo.png" alt="logo">
                <ul class="flex space-x-4 ml-4">
                    <li><a href="#" class="text-gray-300 hover:text-white">Menu</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">Movies</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">Series Tv</a></li>
                    <li><a href="#" class="text-gray-300 hover:text-white">About</a></li>
                </ul>
            </div>
            <form @submit.prevent="$emit('apicall')" class="flex items-center">
                <input 
                    v-model="store.searchKey"
                    type="text" 
                    class="border rounded p-2 w-96 bg-gray-600 text-white placeholder-gray-400"
                    placeholder="Search your movie..." />
                <button type="submit" class="bg-blue-600 text-white rounded p-2 ml-2 hover:bg-blue-500">Search</button>
            </form>
        </div>
    </header>
</template>

<style scoped>
/* Aggiungi eventuali stili aggiuntivi qui */
</style>