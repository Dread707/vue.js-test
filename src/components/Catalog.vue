<template>
<div class="catalog">
  <card-element
  v-for="item in items"
  :key="item.id"
  :element_data="item"
  />
</div>
</template>

<script>

import CardElement from './CardElement.vue'

export default {
  name: 'Catalog',
  components: {
    CardElement

  },
  props: {

  },
  data() {
    return {
      items: [
        {
          id: "1",
          name_git: "name 1",
          author: "author 1",
        },
        {
          id: "2",
          name_git: "name 2",
          author: "author 2",
        },
        {
          id: "3",
          name_git: "name 3",
          author: "author 3",
        },
        {
          id: "4",
          name_git: "name 4",
          author: "author 4",
        },
        {
          id: "5",
          name_git: "name 5",
          author: "author 5",
        },

      ]
    }
  }
}
</script>

<style scoped>
.catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
