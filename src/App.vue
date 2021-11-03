<template>
  <div id="search">
    <div class="search-back">
      <search-element></search-element>
    </div>
    <div class="cards container-fluid">
      <Catalog></Catalog>
    </div>
  </div>
</template>

<script>
import Catalog from './components/Catalog.vue'
import SearchElement from './components/SearchElement.vue'

export default {
  name: 'App',
  components: {
    Catalog,
    SearchElement
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.search-back {
  width: auto;
  height: 147px;
  background: #DDDDDD;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

}


</style>
