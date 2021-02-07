import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokemon: [],
    pokemonFiltrado: []
  },
  mutations: {
    GET_POKEMON(state, payload) {state.pokemon = payload},
  },
  actions: {
    getPokemon({ commit }) {
      let getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
      };
      let numRandom = getRandomInt(1, 898);
      axios.get(`https://pokeapi.co/api/v2/pokemon/${numRandom}`)
      .then(response => commit("GET_POKEMON", response.data))
      console.log()
    },
  },
  modules: {
  }
})
