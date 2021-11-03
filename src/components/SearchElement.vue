<template>
  <div class="search-form container-fluid">
    <form>
      <input type="text" placeholder="Начните вводить текст для поиска (не менее трех символов)" v-model="searchValue">
      <button class="submit">
        <img class="search-form_icon" src="@/assets/icons/search.svg" @click="search(searchValue)">
      </button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';


export default {
  name: "SearchElement",
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    ...mapGetters([
        'SEARCH_VALUE',
    ])
  },
  methods: {
    ...mapActions([
      'GET_SEARCH_VALUE_TO_VUEX',
    ]),
    search(value) {
      this.GET_SEARCH_VALUE_TO_VUEX(value);

    }
  },
}
</script>

<style scoped>
.search-form {
  width: 100%;
}

.search-form input {
  width: 100%;
  height: 68px;
  background: #FFFFFF;
  border: 1px solid #A2A3A4;
  outline: none;
}
.search-form button {
  position: absolute;
  width: 74px;
  height: 68px;
  background: #00A3FF;
  border: 1px solid #A2A3A4;
  cursor: pointer;
  right: 12px;

;
}

.search-form_icon {
  width: 40px;
  height: 40px;
}
</style>
