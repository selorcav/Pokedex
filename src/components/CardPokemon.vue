<template>
  <v-card
    :color="tipo"
    class="mx-auto my-14 main-card pb-16"
    
    shaped
    dark
    max-width="374"
  >
    <img
      class="avatar-pokemon"
      :src="pokemon.sprites.other['official-artwork'].front_default"
      alt=""
    />

    <v-card-title
      class="capitalize d-flex justify-center display-1 font-weight-bold"
    >
      {{ poke.name }}
    </v-card-title>

    <v-card-text class="rounded-xl pb-16 white">
      <v-row>
        <v-col cols="12">
          <h3 class="grey--text text--darken-3 text-center">Type</h3>
        </v-col>
        <v-col
          cols="6"
          class="py-0 my-0"
          v-for="type in pokemon.types"
          :key="type.id"
        >
          <h3 class="pa-1 rounded-pill text-center capitalize" :class="tipo">
            {{ type.type.name }}
          </h3>
        </v-col>
        <v-divider class="grey lighten-2 mt-4 mx-4"></v-divider>
        <v-col cols="12" class="pb-1">
          <h3 class="grey--text text--darken-3 text-center font-weight-bold">
            Abilities
          </h3>
        </v-col>
        <v-col
          cols="6"
          class="py-0 my-0"
          v-for="ability in pokemon.abilities"
          :key="ability.id"
        >
          <h3 class="grey--text pa-1 text-center capitalize">
            {{ ability.ability.name }}
          </h3>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card shaped class="sprites">
      <v-card-actions>
        <v-btn text> Stats</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="showStats = !showStats">
          <v-icon>{{
            showStats ?  "mdi-chevron-down" : "mdi-chevron-up" 
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showStats" class="overflow-hidden">
          <v-divider></v-divider>
          <v-row class="m-0">
            <v-col cols="4" v-for="stat in pokemon.stats" :key="stat.id">
              <h5 class="capitalize text-center">{{ stat.stat.name }}</h5>
              <h5 class="text-center mt-1 font-weight-regular">
                {{ stat.base_stat }}
              </h5>
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-card-actions>
        <v-btn text> Sprites </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="showSprite = !showSprite">
          <v-icon>{{
            showSprite ?  "mdi-chevron-down" : "mdi-chevron-up"
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showSprite" class="white overflow-hidden">
          <v-divider></v-divider>
          <v-row>
            <v-col cols="6">
              <v-img :src="pokemon.sprites.front_default" />
            </v-col>
            <v-col cols="6">
              <v-img :src="pokemon.sprites.back_default" />
            </v-col>
            <v-col cols="12" class="pa-0"
              ><v-card-subtitle class="py-0 d-flex justify-center grey--text"
                >Shiny</v-card-subtitle
              ></v-col
            >
            <v-col cols="6">
              <v-img :src="pokemon.sprites.front_shiny" />
            </v-col>
            <v-col cols="6">
              <v-img :src="pokemon.sprites.back_shiny" />
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>

      <v-card-actions>
        <v-btn text> DreamWorld</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="showDream = !showDream">
          <v-icon>{{
            showDream ? "mdi-chevron-down" : "mdi-chevron-up" 
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="showDream" class="white overflow-hidden">
          <v-divider></v-divider>
          <v-row>
            <v-col class="px-16 py-10">
              <v-img :src="pokemon.sprites.other.dream_world.front_default" />
            </v-col>
          </v-row>
        </div>
      </v-expand-transition>
    </v-card>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: { poke: Object },
  name: "CardPokemon",
  data() {
    return {
      pokemon: "",
      showSprite: false,
      showDream: false,
      showStats: false,
      tipo: "",

    };
  },
  methods: {
    async getPokemon() {
      let poke = this.poke;
      try {
        let datos = await axios.get(poke.url);
        this.pokemon = datos.data;
      } catch (error) {
        console.log(error);
      } finally {
        console.log();
      }
    },
    colourtype() {
      let type = this.pokemon.types[0].type.name;
      switch (type) {
        case "normal":
          this.tipo = "grey";
          break;
        case "fire":
          this.tipo = "deep-orange";
          break;
        case "water":
          this.tipo = "blue";
          break;
        case "grass":
          this.tipo = "green";
          break;
        case "electric":
          this.tipo = "amber";
          break;
        case "ice":
          this.tipo = "cyan lighten-3";
          break;
        case "fighting":
          this.tipo = "red darken-4";
          break;
        case "poison":
          this.tipo = "deep-purple darken-1";
          break;
        case "ground":
          this.tipo = "lime darken-4";
          break;
        case "flying":
          this.tipo = "teal lighten-3";
          break;
        case "psychic":
          this.tipo = "purple accent-3";
          break;
        case "bug":
          this.tipo = "lime darken-2";
          break;
        case "rock":
          this.tipo = "brown darken-2";
          break;
        case "ghost":
          this.tipo = "indigo lighten-2";
          break;
        case "dragon":
          this.tipo = "indigo darken-4";
          break;
        case "dark":
          this.tipo = "blue-grey darken-4";
          break;
        case "steel":
          this.tipo = "blue-grey lighten-1";
          break;
        case "fairy":
          this.tipo = "pink lighten-3";
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    this.getPokemon();
  },
  updated() {
    this.colourtype();
  },
};
</script>

<style lang="sass" scoped>
.main-card
  background-image: url('../assets/img/bg.svg')
  background-size: 80%
  background-position: center
  position: relative

.sprites
  position: absolute
  width: 100%
  bottom: -3.5em

.capitalize
  text-transform: capitalize

.avatar-pokemon
  margin-top: -100px
  margin-bottom: -50px
  width: 100%
</style>