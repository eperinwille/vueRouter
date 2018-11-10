<template>
  <div class="about">
    <h1>This is an checkout page</h1>
  </div>
</template>
<script>
  import store from "@/store/cart.js";

  export default {
  beforeMount() {},
  updated() {
    console.log(this.beer);
  },
  data() {
    return {
      // Criamos um dado para fazer o storage das nossas cervejas
      beer: null,
      performingQuery: true
    };
  },
  methods: {}
};
</script>