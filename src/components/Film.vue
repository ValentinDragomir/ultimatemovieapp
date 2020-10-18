<template>
    <div class="film">
        <div v-bind="film" v-show="film.Title">
            <v-card
              elevation="2"
              outlined 
              shaped
              class="mx-auto my-12 text-center"
              min-width="640"
              max-width="1280"
            >
            <div class="d-inline-flex spacing-playground pa-6">
                <v-img
                  contain
                  width="300"
                  :src="film.Poster"
                />
                <div>
                    <v-card-title class="justify-center"><h2>{{ film.Title }}</h2></v-card-title>
                    <v-card-text>
                    <h4 class="my-2">Year: {{ film.Year }}</h4>
                    <h4 class="my-2">Genre: {{ film.Genre }}</h4>
                    <h4 class="my-2">IMDb Rating: {{ film.imdbRating }} / 10</h4>
                    <h4 class="my-2">IMDb Votes: {{ film.imdbVotes }}</h4>
                    <h4 class="my-2">Metascore: {{ film.Metascore }}</h4>
                    <h4 class="my-2">Runtime: {{ film.Runtime }}</h4>
                    <h4 class="my-2">Director: {{ film.Director }}</h4>
                    <h4 class="my-2">Actors: {{ film.Actors }}</h4>
                    <h4 class="my-2">Production: {{ film.Production }}</h4>
                    <h4 class="my-2">Awards: {{ film.Awards }}</h4>
                    <h4 class="my-6">{{ film.Plot }}</h4>
                    </v-card-text>
                </div>
            </div>
            </v-card>
        </div>
        <div v-bind="film" v-if="film.Error=='Movie not found!'">
            <v-alert
              color="blue lighten-2"
              icon="mdi-filmstrip-off"
              border="left"
              class="mx-auto my-12 pe-12 text-center"
              width="320"
            >
                <h4>{{ film.Error }}</h4>
            </v-alert>
        </div>
    </div>
</template>

<script>
export default {
    props: ['film']
}
</script>
