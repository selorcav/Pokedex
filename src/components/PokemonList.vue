<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        md="4"
        sm="6"
        v-for="poke in pokemon.results"
        :key="poke.id"
      >
        <CardPokemon :poke="poke" />
        
      </v-col>
    </v-row>
    <v-col cols="12" class="d-flex justify-center">
      <v-btn @click="nextPokemon" depressed rounded x-large color="primary" class="ma-10"> Load more Pokemon </v-btn>
    </v-col>

  </v-container>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
// import { mapState, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "PokemonList",
  components: {
    CardPokemon,
  },
  data() {
    return {
      nextUrl: "",
      pokemon: '',
    };
  },
  methods: {
    // ...mapActions(["getPokemon"]),
    getPokemon() {
      axios.get(`https://pokeapi.co/api/v2/pokemon/`) 
        .then((resp)=>{
          this.pokemon = resp.data
          // console.log(resp.data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
    ,

    async nextPokemon(){
      this.nextUrl = this.pokemon.next
      let next = this.nextUrl;
      // console.log(this.pokemon.next)
      try {
        // console.log(this.pokemon)
        let nextDatos = await axios.get(next);
        // console.log(this.pokemon.results)
        // console.log(nextDatos.data)
        nextDatos.data.results.forEach( pokemon => {
        this.pokemon.results.push(pokemon)
        })
        // console.log(this.pokemon)
        // console.log(this.pokemon.next)
        this.pokemon.next = nextDatos.data.next
      }
      catch (error) {
        console.log(error);
      } finally {
        console.log();
      }
    },
  },
  computed: {
    // ...mapState(["pokemon"]),
  },
  created() {
    this.getPokemon();
  },
};
</script>


<style>
</style>