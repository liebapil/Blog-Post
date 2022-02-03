<template>
  <div>
    <h1>{{ selectedDetail.title }}</h1>
    <img :src="selectedDetail.photo_url" alt="something" />
    <p>{{ selectedDetail.description }}</p>
    <button @click="deletePost()">Delete</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'PostDetail',
  data: () => ({
    selectedDetail: null
  }),
  mounted: async function () {
    await this.getPostDetails();
  },
  methods: {
    async getPostDetails() {
      const res = await axios.get(
        `http://localhost:8000/posts/${this.$route.params.post_id}`
      );
      this.selectedDetail = res.data;
    },
    async deletePost() {
      await axios.delete(
        `http://localhost:8000/posts/${this.$route.params.post_id}`
      );
      this.$router.push(`/`);
    }
  }
};
</script>