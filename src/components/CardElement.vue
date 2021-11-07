<template>
  <div class="card p-2">
    <div class="card-name my-2">
      <p>{{ element_data.name }}</p>
    </div>
    <div class="row">
      <div class="info-git col-12 mb-3">
        <a :href="element_data.html_url"><img class="info-git_img"  :src="element_data.owner.avatar_url"></a>
        <a class="info-git_author" :href="element_data.owner.html_url">{{ element_data.owner.login }}</a>
      </div>
      <div class="w-100"></div>
      <div class="rating-info-git">
        <div class="rating-info-git_star">
          <img src="@/assets/icons/star.png">
          <p>{{ element_data.stargazers_count }}</p>
        </div>
        <div class="rating-info-git_glass">
          <img src="@/assets/icons/glass.png">
          <p>{{ element_data.watchers_count }}</p>
        </div>
      </div>
    </div>
    <comment-element></comment-element>
  </div>
</template>

<script>
import CommentElement from './CommentElement.vue'

export default {
  name: "CardElement",
  components: {
    CommentElement
  },

  props: {
    element_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {}
  },

  computed: {}
}
</script>

<style scoped>
.card {
  width: 440px;
  height: 218px;
  background: #FFFFFF;
  border: 1px solid #A2A3A4;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
}

.card-name {
  width: 220px;
  height: 23px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  color: #000000;
}

.info-git {
  display: flex;
}

.info-git_img {
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

.info-git_author {
  margin-bottom: 0;
  align-items: center;
  display: flex;
  margin-left: 1rem;
}

.rating-info-git {
  display: flex;
}

.rating-info-git_star {
  margin-right: 1rem;
}


.rating-info-git_star, .rating-info-git_glass {
  display: flex;

}

.rating-info-git_star img, .rating-info-git_glass img {
  width: 25px;
  height: 25px;
}

.rating-info-git_star a, .rating-info-git_glass a {
  margin-left: 1rem;
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #000000;
}

a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: #6c6c6c;
  background-color: transparent;
  text-decoration: none;
}

</style>

<!-- :src="require(element_data.image)" -->