<template>
  <div>
    <div
      :key="element.id"
      v-for="element in selectedList"
      @click="selectPost(element.id)"
    >
      <h1>{{ element.title }}</h1>
      <img :src="element.photo_url" alt="someimage" />
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


