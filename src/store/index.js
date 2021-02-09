import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
  },
  mutations: {
    GET_POKEMON(state, payload) {state.pokemon = payload},
  },
  actions: {
    getPokemon({ commit }){
      axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=00&limit=151`)
      .then(response => commit("GET_POKEMON", response.data))
      
    },

  },
  modules: {
  }
})
