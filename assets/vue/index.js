import { createApp } from 'vue'
import { createStore } from 'vuex'

import TestComponent  from "./components/TestComponent.vue"
import OtherComponent  from "./components/OtherComponent.vue"
import RandomComponent  from "./components/RandomComponent"

const store = createStore({
  state () {
    return {
      options: [
        {name: 'optie A', price: 5.00},
        {name: 'optie B', price: 7.50},
        {name: 'optie C', price: 10.00}
      ],
      selected: []
    }
  },
  mutations: {
    addOption (state, payload) {
      state.selected.push(payload)
    }
  }
})

const app = createApp({
  components: {
    //Single File components
    TestComponent,
    OtherComponent,
    //Class style component
    RandomComponent
  },
})

app.use(store)
app.mount('#app')
