<template>
  <div>
    <div v-if="!edited">
      <h1>{{ selectedDetail.title }}</h1>
      <img :src="selectedDetail.photo_url" alt="something" />
      <p>{{ selectedDetail.description }}</p>
      <button @click="deletePost()">Delete</button>
      <button @click="startEdit()">Edit</button>
    </div>
    <div v-if="edited">
      <EditPost />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import EditPost from './EditPost.vue';
export default {
  name: 'PostDetail',
  components: {
    EditPost
  },
  data: () => ({
    selectedDetail: null,
    edited: false
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
    },
    startEdit() {
      this.edited = true;
    }
  }
};
</script>