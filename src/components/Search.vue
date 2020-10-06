<template>
    <div class="search">
        <input type="text" name="search" placeholder="Enter movie title" v-model="query" @keypress.enter="handleSearch">
        <button v-on:click="handleSearch">Search</button>
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

<style scoped>
.search input {
    padding: 10px;
    width: 400px;
    border-radius: 10px;
    color: darkblue;
    background-color: lightsteelblue;
}
.search button {
    padding: 10px;
    margin-left: 5px;
    width: 100px;
    border-radius: 10px;
    background-color: lightsteelblue;
    color: darkblue
}
</style>