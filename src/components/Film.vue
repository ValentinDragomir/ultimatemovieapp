<template>
    <div class="film">
        <div v-bind="film" v-if="film.theTitle">
            <v-card
                elevation="2"
                outlined 
                shaped
                class="mx-auto my-12 text-center"
                min-width=""
                max-width="1280"
            >
            <div class="d-md-inline-flex spacing-playground pa-6">
                <div class="d-inline-flex align-self-center">
                    <div class="flex-column">
                        <v-img
                            contain
                            :src="film.Poster"
                            transition="scale-transition"
                            width="300"
                        >
                        </v-img>
                        <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                            <v-btn
                                color="primary"
                                small
                                class="ma-2"
                                dark
                                @click="dialog = true"
                                v-bind="attrs"
                                v-on="on"
                            >
                                <v-icon>mdi-fullscreen</v-icon>
                            </v-btn>
                            </template>
                            <span>Enlarge poster</span>
                        </v-tooltip>
                        
                        <v-dialog
                            v-model="dialog"
                            max-width="500px"
                        >
                            <v-card>
                            <v-img
                                contain
                                :src="film.Poster"
                            />
                            <v-card-actions>
                                <v-btn
                                    color="primary"
                                    text
                                    small
                                    @click="dialog = false"
                                >
                                    Close
                                </v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </div>
                </div>

                <div>
                    <v-card-title class="justify-center"><h2>{{ film.theTitle }}</h2></v-card-title>
                    <v-card-text>
                    <h2 class="mt-2 text--secondary">{{ film.Year }}</h2>
                    <h3 class="mt-4 text--secondary">{{ film.Genre }}</h3>
                    <h4 class="my-3 pr-4 d-inline-flex text--secondary"><font size="-1" class="px-1">Runtime:</font>{{ film.Runtime }}</h4>
                    <h4 class="my-3 d-inline-flex text--secondary"><font size="-1" class="px-1">Rated:</font>{{ film.Rated }}</h4>
                    <br>
                    <h4 class="my-2 d-inline-flex">
                        <v-img
                            alt="IMDb"
                            class="shrink mr-2"
                            contain
                            src="../assets/imdb.png"
                            transition="scale-transition"
                            width="20"
                        />
                        IMDb:<font size="+1" class="px-1">{{ film.imdbRating }}</font><font size="-1">out of {{ film.imdbVotes }} votes</font>
                    </h4>
                    <br>
                    <h4 class="my-2 d-inline-flex pr-3" v-if="film.Ratings[1] ? film.Ratings[1].Source == 'Rotten Tomatoes' : ''">
                        <v-img
                            alt="Rotten Tomatoes"
                            class="shrink mr-2"
                            contain
                            src="../assets/rottentomatoes.png"
                            transition="scale-transition"
                            width="20"
                        />
                        Rotten Tomatoes:<font size="+1" class="px-1">{{ film.Ratings[1].Value }}</font>
                    </h4>
                    <h4 class="my-2 d-inline-flex">
                        <v-img
                            alt="Metacritic"
                            class="shrink mr-2"
                            contain
                            src="../assets/metacritic.png"
                            transition="scale-transition"
                            width="20"
                        />
                        Metascore:<font size="+1" class="px-1">{{ film.Metascore }}</font>
                    </h4>
                    <h4 class="mt-2 mb-4">Awards: <i>{{ film.Awards }}</i></h4>
                    <h4 class="my-2">Director: <b>{{ film.Director }}</b></h4>
                    <h4 class="my-2">Actors: <b>{{ film.Actors }}</b></h4>
                    <h4 class="my-2">Production: <b>{{ film.Production }}</b></h4>
                    <h4 class="mt-8 mb-2 body-2"><font size="+0.5">{{ film.Plot | truncate(1000, '(...)') }}</font></h4>
                    </v-card-text>
                </div>
            </div>
            </v-card>
        </div>
        <div v-bind="film" v-if="film.Error=='Movie not found!'">
            <v-alert
                color=""
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
    data: () => ({
        dialog: false,
    }),

    props: ['film'],

    filters: {
        truncate (text, length, suffix) {
            if (!text) return
            
            if (text.length > length) {
                return text.substring(0, length) + suffix
            } else {
                return text
            }
        },
    },
}
</script>
