<template>
  <div>
      <v-flex xs12 md3 lg2 class="px-2">
          <v-text-field
          label="Search by name">
        </v-text-field>
          <v-btn block color="orange" v-on:click="onSearch(beer)">
            <v-icon left>search</v-icon>Search
          </v-btn>
        </v-flex>
        
    <v-container grid-list-md>
      <v-layout row wrap>
        <!-- Laço com os dados de cervejas -->
        <!-- Notem que usamos a id devido ao object observer -->
        <v-flex v-for="beer in beers" 
                :key="beer.id" xs4>
          <!-- Passamos a prop com a nossa cerveja específica para ser renderizada no card. -->
          <BeerCard :beer="beer" />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
// Como padrão, importamos nosso componente de card.
import BeerCard from "../components/BeerCard.vue";
import {mapState, mapGetters, mapActions} from "vuex";

export default {
  mounted() {
    axios
      .get("https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6")
      .then(response => (this.beers = response.data));
  },
  data() {
    return {
      // Criamos um dado para fazer o storage das nossas cervejas
      beers: []
    };
  },
  components: {
    // Como padrão, registramos o componente
    BeerCard
  }
};
</script>
