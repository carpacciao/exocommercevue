<template>
  <div class="container mt-2">
    <div class="btns my-3">
      <a href="#" class="btn btn-primary" @click.prevent="filtered = false">Tout</a>
      <a href="#" class="btn btn-primary" @click.prevent="filtered = true">Prix</a>
    </div>
    <div class="row">
      <div class="col-4" v-for="item in sortedProducts" v-if="item.stock">
        <div class="card" :class="{'bg-warning' : item.stock <= 1}">
          <img class="card-img-top" :src="item.image" height="100%" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ item.label | capitalize}}</h5>
            <div class="text-primary">
              <span v-for="i in item.stars">★</span>
            </div>
            <p class="card-text">{{ item.description }}</p>
            <div class="d-flex justify-content-between">
              <span class="text-primary"><strong>{{ item.price | currency }}</strong></span>
              <a href="#" class="btn btn-primary">Ajouter</a>
              <span>{{ item.stock }} en stock</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      filtered: false,
      api: 'http://localhost:1337/api/v1'
    }
  },
  methods: {
    getProducts () {
      this.$http.get(this.api + '/beers').then(r => {
        this.products = r.data
      })
    }
  },
  computed: {
    sortedProducts () {
      if(this.filtered){
        return this.products.concat().sort((a,b) => {
          return parseFloat(a.price) - parseFloat(b.price)
        })
      }
      return this.products
    }
  },
  filters: {
    currency (value) {
      return value.toFixed(2) + ' €'
    },
    capitalize (value) {
      return value.toUpperCase()
    }
  },
  created () {
    this.getProducts()
  }
}
</script>

<style lang="scss" scoped>

</style>
