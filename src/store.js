import { reactive } from "vue";
export const store = reactive ({
    apiUrlMovie: 'https://api.themoviedb.org/3/search/movie?api_key=442c471ed8b71485d8ac903eedd29080&lang=it_IT&',
    searchKey: 'Marvel',
    apiUrlSeriesTv: 'https://api.themoviedb.org/3/search/tv?api_key=442c471ed8b71485d8ac903eedd29080&lang=it_IT&',
    movies:[],
    series:[],
    apiPoster:'https://image.tmdb.org/t/p/w342/',
    loanding: true,
});