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
        const params = { query: this.store.searchKey };
        axios.get(this.store.apiUrlMovie, { params })
            .then((data) => {
                this.store.movies = data.data.results;
                this.store.searchKey = ''
            })
        axios.get(this.store.apiUrlSeriesTv, { params })
            .then((data) => {
                this.store.series = data.data.results;
            })
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