<template>
  <div class="comment-form">
    <form>
      <input type="text" placeholder="Комментарий к проекту" @click="sendToComment">
      <button type="submit">
        <img class="comment-form_icon" src="@/assets/icons/pencil.svg">
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CommentElement",
  methods: {
    sendToComment() {
      this.emit('addComment')
    },
  }
}
</script>

<style scoped>
.search-form {
  width: 100%;
}

.comment-form input {
  width: 100%;
  height: 54px;
  background: #FFFFFF;
  border: 1px solid #A2A3A4;
  outline: none;
}
.comment-form button {
  position: absolute;
  width: 63px;
  height: 54px;
  background: #00A3FF;
  border: 1px solid #A2A3A4;
  cursor: pointer;
  right: 8px;
}

.comment-form_icon {
  width: 40px;
  height: 40px;
}
</style>