<template>
    <div class="film">
        <div v-bind="film" v-if="film.Error!='Movie not found!'">
            <img :src="film.Poster">
            <h2>{{ film.Title }}</h2>
            <h4>Year: {{ film.Year }}</h4>
            <h4>Genre: {{ film.Genre }}</h4>
            <h4>IMDb Score: {{ film.imdbRating }} / 10</h4>
            <h4>IMDb Votes: {{ film.imdbVotes }}</h4>
            <h4>Metascore: {{ film.Metascore }}</h4>
            <h4>Runtime: {{ film.Runtime }}</h4>
            <h4>Director: {{ film.Director }}</h4>
            <h4>Actors: {{ film.Actors }}</h4>
            <h4>Production: {{ film.Production }}</h4>
            <h4>Awards: {{ film.Awards }}</h4>
            <h4>Synopsis: {{ film.Plot }}</h4>
        </div>
        <div v-bind="film" v-if="film.Error=='Movie not found'">
            <h4>{{ film.Error }}</h4>
        </div>
    </div>
</template>

<script>
export default {
    props: ['film']
}
</script>

<style scoped>
.film img {
    float: left;
    margin-right: 40px;
}
.film h2 {
    margin-top: 23px;
}
</style>