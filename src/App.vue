<template>
  <div id="app">
    <Search v-on:requestedSearch="handleSearch"></Search>
    <Film v-bind:film="film"></Film>
  </div>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>