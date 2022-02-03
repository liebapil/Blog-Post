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
  name: 'CreatePost',
  data: () => ({
    title: '',
    username: '',
    description: '',
    photo_url: ''
  }),
  mounted: async function () {},
  methods: {
    handleChange(e) {
      this[e.target.name] = e.target.value;
    },
    async handleSubmit(e) {
      e.preventDefault();
      await axios.post(`http://localhost:8000/posts/`, {
        title: this.title,
        username: this.username,
        description: this.description,
        photo_url: this.photo_url
      });
      this.$router.push(`/`);
    }
  }
};
</script>