import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),

    beforeMount () {
    // check if browser supports dark mode.
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').media !== 'not all') {

			// if user prefers dark mode switch to dark mode
      if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.$vuetify.theme.isDark = true;
      }
    }
  }

}).$mount('#app')
