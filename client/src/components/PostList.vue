<template>
<div>
<h1> Check out Our Blogs! </h1>

  <div class="listings">
    <div
    class="card col"
      :key="element.id"
      v-for="element in selectedList"
      @click="selectPost(element.id)"
    >
    <div class="details row">
      <h2>{{ element.title }}</h2>
      <hr />
      <div class="image-wrapper">
      <img :src="element.photo_url" alt="someimage" />
      <h3>Author: {{element.username}}</h3>
      </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PostList',
  data: () => ({
    selectedList: null
  }),
  mounted: async function () {
    await this.getPosts();
  },
  methods: {
    async getPosts() {
      const res = await axios.get(`http://localhost:8000/posts/`);
      this.selectedList = res.data;
    },
    selectPost(postId) {
      this.$router.push(`/posts/${postId}`);
    }
  }
};
</script>


<style scoped>

h1{
  font-family: 'Luckiest Guy', cursive;
  font-size:3em;
  color:white;
  text-decoration: underline;
  
}
.col {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.listings {
  padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 30em);
  justify-content: center;
}

.card {
  color: white;
  min-width: fit-content;
  border-radius: 1em;
  background-color: rgb(46, 13, 13);
  padding: .1em;
  margin: .5em;
  border: .2rem solid rgba(0, 0, 0, 0.4);
  box-shadow: .4rem .4rem .4rem .4rem rgb(29, 12, 7);
  transition: all 0.2s ease;
  cursor: pointer;
}

.card:hover {
  background-color: rgb(187, 117, 129);
  box-shadow: 0 .4rem .4rem .4rem  rgb(197, 197, 194);
}

.card img {
  border-radius: 2rem 2rem 2rem 2rem;
}



</style>