<template>
  <div class="catalog">
    <div class="post">
      <div v-if="loading" class="loading">
        Поиск проектов...
      </div>
    </div>
    <div class="ready" v-if="post">
      <div class="catalog-ready">
        <card-element
            v-for="item in ELEMENTS.items"
            :key="item.id"
            :element_data="item"
        />
      </div>
      <div class="pagination-nav">
        <pagination></pagination>
      </div>
    </div>
  </div>
</template>

<script>

import CardElement from './CardElement.vue'
import {mapActions, mapGetters} from 'vuex'
import Pagination from "./Pagination";


export default {
  name: 'Catalog',
  components: {
    CardElement,
    Pagination
  },
  props: {},
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    $route: 'fetchData'
  },

  computed: {
    ...mapGetters([
      'ELEMENTS',
      'SEARCH_VALUE'
    ]),
  },

  methods: {
    ...mapActions([
      'SEARCH_ELEMENTS_FROM_API'
    ]),
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // замените `getPost` используемым методом получения данных / доступа к API
      this.searchClick(this.value, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }

  },
}
</script>

<style scoped>

.post, .ready {
  width: 100%;
}

.catalog-ready {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.loading {
  display: flex;
  justify-content: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  align-items: center;

  color: #000000;
}
</style>
