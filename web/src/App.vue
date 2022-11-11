<template>
  <div>
    <div>name: {{ name }}</div>
    <div>rating: {{ rating }}</div>
  </div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';


export default{
  name: "App",
  setup: () => {
    let name = ref("");
    let rating = ref("");

    $.ajax({
      url: "http://localhost:3000/test/test2/",
      type: "get",
      success: resp => {
        name.value = resp.name;
        rating.value = resp.rating;
      }
    })

    return {
      name,
      rating
    }
  }
}
</script>

<style>

</style>
