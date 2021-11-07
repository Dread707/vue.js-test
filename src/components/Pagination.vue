<template>
  <ul class="pagination">
    <li class="page_item">
      <a class="page_link" href="#" aria-label="Previous">
        <img src="@/assets/icons/back.svg">
      </a>
    </li>
    <li class="page_item"><a class="page_link" href="#">1</a></li>
    <li class="page_item"><a class="page_link" href="#">2</a></li>
    <li class="page_item"><a class="page_link" href="#">3</a></li>
    <li class="page_item">
      <a class="page_link" href="#" aria-label="Next">
        <img src="@/assets/icons/next.svg">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination"
}
</script>

<style scoped>

.page_item {
  border: 1px solid #A2A3A4;
  width: 52px;
  height: 52px;
  margin-left: -1px;
}

.page_link:active {
  background-color: #00A3FF;
  color: #DDDDDD;
}

.page_link {
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0.75rem 0.75rem;
  position: relative;
  display: block;
  text-decoration: none;
  color: black;

}

.page_item a {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  text-align: center;
}

li.page_item:nth-child(1) > a:nth-child(1) {
  padding: 0.25rem 0.75rem;
}

li.page_item:nth-child(5) > a:nth-child(1) {
  padding: 0.25rem 0.75rem;
}

</style>