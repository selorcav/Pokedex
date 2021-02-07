<template>
  <v-app class="indigo lighten-5">
    <v-container>
      <v-row class="mt-2 d-flex align-center justify-center">
        <v-col cols="12" md="4">
          <card />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card,
  },
};
</script>
