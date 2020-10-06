<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src=""
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=""
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </v-app-bar>

    <v-main>
    <Search v-on:requestedSearch="handleSearch"></Search>
    <Film v-bind:film="film"></Film>
    </v-main>
  </v-app>
</template>

<script>
import Search from './components/Search.vue'
import Film from './components/Film.vue'

export default {
  name: 'App',
  components: {
    Search,
    Film
  },
  data() {
    return {
      film: []
    }
  },
  methods: {
    handleSearch(query) {
      this.film = []
      fetch('http://www.omdbapi.com/?t=' + query + '&apikey=cab5b230')
        .then((res) => { return res.json() })
        .then((res) => {
          this.film = res
          console.log(this.film.error)
        })
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1d55bd;
  margin-top: 60px;
}
</style>