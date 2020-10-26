<template>
    <v-app id="main" :style="{background: $vuetify.theme.themes[theme].background}">
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
                src="./assets/logo.png"
                transition="scale-transition"
                width="40"
            />

            <v-img
                alt="Name"
                class="shrink mt-1"
                contain
                min-width="100"
                src="./assets/name.png"
                width="200"
            />
        </div>

        <v-spacer></v-spacer>

        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
            <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="black" small fab @click="darkMode">
                <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
            </template>
            <span>Switch theme</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
            <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="black" small fab @click="darkMode">
                <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
            </template>
            <span>Switch theme</span>
        </v-tooltip>
        </v-app-bar>

        <v-main>
        <Search></Search>
        </v-main>
    </v-app>
</template>

<script>
import Search from './components/Search.vue'

export default {
    name: 'App',

    components: {
        Search,
    },

    methods: {
        darkMode() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    },

    computed: {
        theme() {
            return (this.$vuetify.theme.dark) ? 'dark' : 'light'
        },
    },
}
</script>
