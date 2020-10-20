import Vue from 'vue'
import Vuetify from 'vuetify/lib'

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify ({
    theme: {
        themes: {
            light: {
                primary: colors.amber.lighten2,
                background: colors.indigo.lighten5,
            },
            dark: {
                primary: colors.amber.lighten3,
            },
        },
    },
})
