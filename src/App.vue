<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components: {Navigation},
  methods: {
    getBasket () {
      this.$http.get('http://localhost:1337/api/v1' + '/basket').then(r => {
        this.$store.commit('CREATE_BASKET', r.data)
      })
    }
  },
  created () {
    this.getBasket()
  }
}
</script>

<style>

</style>
