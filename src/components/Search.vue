<template>
    <div class="search">
        <v-card
          color="blue lighten-2"
          class="mx-auto mt-12 mb-4"
          min-width="640"
          max-width="960"
        >
            <v-card-text>
                <v-text-field
                  name="search"
                  v-model="query"
                  @keypress.enter="handleSearch"
                  placeholder="Start typing a movie title"
                  prepend-icon="mdi-film"
                ></v-text-field>
            </v-card-text>
        </v-card>
        <v-card-actions class="justify-center">
            <v-btn
              v-on:click="handleSearch"
              depressed
              color="blue lighten-2"
              class="justify-center"
            >
              <v-icon left>mdi-magnify</v-icon>
              Search
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: ''
        }
    },
    methods: {
        handleSearch() {
            if (this.query=="") {
                alert("You have to enter a movie title")
            } else {
                this.$emit('requestedSearch', this.query)
            }
        }
    }
}
</script>
