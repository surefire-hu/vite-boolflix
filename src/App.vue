<script>
import AppHeader from './components/header/AppHeader.vue';
import AppMain from './components/main/AppMain.vue';
import { store } from './store';
import axios from 'axios';

export default {
    name: 'AppBoolflix',
    components: {
        AppHeader,
        AppMain,
    },
    data() {
        return {
            store,
        };
    },
    methods: {
      callApiTmdb() {
        console.log("Chiamata API con searchKey:", this.store.searchKey);
        const params = { query: this.store.searchKey };
        axios.get(this.store.apiUrlMovie, { params })
            .then((data) => {
                console.log("Risultati film:", data.data.results);
                this.store.movies = data.data.results;
                this.store.searchKey = ''
            })
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            });
        axios.get(this.store.apiUrlSeriesTv, { params })
            .then((data) => {
                console.log("Risultati serie TV:", data.data.results);
                this.store.series = data.data.results;
            })
            .catch((error) => {
                console.error("Errore nella chiamata API:", error);
            });
    },
        },
    created() {
        this.callApiTmdb();
    }}
</script>

<template>
    <AppHeader @apicall="callApiTmdb"></AppHeader>
    <AppMain></AppMain>
</template>

<style>
</style>