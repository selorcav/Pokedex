<template>
  <v-container> 
    <v-row>
      <v-col cols="12" md="4" sm="6" v-for="poke in pokemon.results" :key="poke.id">
        <CardPokemon :poke="poke" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardPokemon from "@/components/CardPokemon.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "PokemonList",
  components: {
    CardPokemon,
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(["getPokemon"]),
  },
  computed: {
    ...mapState(["pokemon"]),
  },
  created() {
    this.getPokemon();

  },
};
</script>


<style>
</style>