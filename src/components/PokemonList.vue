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
  </v-container>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import { mapState, mapActions } from "vuex";
// import axios from "axios";

export default {
  name: "PokemonList",
  components: {
    CardPokemon,
  },
  data() {
    return {
      nextUrl: '',

    }
  },
  methods: {
    ...mapActions(["getPokemon"]),
    // async nextPokemon(){
    //   this.nextUrl = this.pokemon.next
    //   let next = this.nextUrl;
    //   console.log(next)
    //   try {
    //     let nextDatos = await axios.get(next);
    //     console.log(this.pokemon.results)
    //     console.log(nextDatos.data.results)
    //     nextDatos.data.results.forEach( pokemon => {
    //       console.log(pokemon)

    //     this.pokemon.results.push(pokemon)
    //     })
    //   }
    //   catch (error) {
    //     console.log(error);
    //   } finally {
    //     console.log();
    //   }
    // },
    // scrollTrigger(){

    // }

  },
  computed: {
    ...mapState(["pokemon"]),
  },
  created() {
    this.getPokemon();
  },
  // updated(){
  //   this.nextPokemon();
  //   this.scrollTrigger();
  // }

};
</script>


<style>
</style>