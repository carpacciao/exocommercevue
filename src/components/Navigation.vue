<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-link class="navbar-brand" to="/">BeerProject</router-link>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link v-if="$store.state.basket.length > 0" to="/basket" class="nav-link">Accéder à votre panier ({{ $store.state.basket.length }} articles - {{ basketTotal.toFixed(2) }} €)</router-link>
          <router-link v-else to="/basket" class="nav-link">Accéder à votre panier (vide)</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    basketTotal () {
      let total = 0
      this.$store.state.basket.map((beer) => {
        total += parseFloat(beer.price)
      })
      return total
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
