<template>
  <div>
    <form @submit="handleSubmit">
      <input
        @input="handleChange"
        placeholder="Title"
        :value="title"
        name="title"
        type="text"
      />
      <input
        @input="handleChange"
        placeholder="Username"
        :value="username"
        name="username"
        type="text"
      />
      <input
        @input="handleChange"
        placeholder="Description"
        :value="description"
        name="description"
        type="text"
      />
      <input
        @input="handleChange"
        placeholder="Photo"
        :value="photo_url"
        name="photo_url"
        type="url"
      />
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'EditPost',
  data: () => ({
    selectedData: null,
    title: '',
    username: '',
    description: '',
    photo_url: ''
  }),
  mounted: async function () {
    await this.getPostDetails();
  },
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value;
    },
    async handleSubmit(e) {
      e.preventDefault();
      await axios.put(
        `http://localhost:8000/posts/${this.$route.params.post_id}`,
        {
          title: this.title,
          username: this.username,
          description: this.description,
          photo_url: this.photo_url
        }
      );
      location.reload();
    },
    async getPostDetails() {
      const res = await axios.get(
        `http://localhost:8000/posts/${this.$route.params.post_id}`
      );
      this.title = res.data.title;
      this.username = res.data.username;
      this.description = res.data.description;
      this.photo_url = res.data.photo_url;
      //   this.selectedData = res.data;
    }
  }
};
</script>