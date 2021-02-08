<template>
  <v-app class="indigo lighten-5">
    <v-container>
      <h1>Pokemon</h1>
      <PokemonList />
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
// import Card from "@/components/Card.vue";
import PokemonList from "@/components/PokemonList.vue";

export default {
  name: "Home",
  components: {
    PokemonList,
  },
};
</script>
