<template>
    <div>
        <v-card
            class="mx-auto my-12"
            min-width="640"
            max-width="960"
        >
            <v-card-text>
            <v-autocomplete
                @change="selectItem"
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                hide-no-data
                hide-selected
                item-text="Title"
                item-value="API"
                placeholder="Start typing a movie title"
                prepend-icon="mdi-film"
                return-object
            ></v-autocomplete>
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                :disabled="!model"
                x-small
                @click="
                    model = null
                    film.Title = null
                "
            >
                Clear
                <v-icon right>mdi-filmstrip-off</v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>

        <Film :film="film"></Film>
    </div>
</template>

<script>
import Film from './Film.vue'

export default {
    data: () => ({
        apiSearch: [],
        apiKey: 'cab5b230',
        isLoading: false,
        model: null,
        search: null,
        film: []
    }),
    
    components: {
        Film,
    },

    methods: {
        selectItem(item) {
            this.film.Title = null

            fetch(`http://www.omdbapi.com/?i=${item.imdbID}&plot=full&apikey=${this.apiKey}`)
                .then((res) => { return res.json() })
                .then((res) => {
                    this.film = res
            })
        },
    },

    computed: {
        items () {
            if (!this.apiSearch) return

            return this.apiSearch.map(item => {
            const Title = item.Title + ' ' + item.Year
            return Object.assign({}, item, { Title })
            })
        },
    },

    watch: {
        search (val) {
            if (!val) return
            
            if (this.timeout) clearTimeout(this.timeout)

            this.timeout = setTimeout(() => {
                if (this.isLoading) return

                this.isLoading = true

                fetch(`http://www.omdbapi.com/?s=${this.search}&apikey=${this.apiKey}`)
                    .then(res => res.json())
                    .then(res => {
                        const { Search, totalResults, Response } = res
                        this.apiSearch = Search
                        this.apiTotalResults = totalResults,
                        this.apiResponse = Response
                    })
                    .catch(err => {
                        console.log(err)
                    })
                    .finally(() => (this.isLoading = false))
            }, 300)
        },
    },
}
</script>
