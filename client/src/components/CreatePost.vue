<template>
  <div class="container">
    <h2>Post Something new</h2>
    <form @submit="handleSubmit">

      <input
      required
        @input="handleChange"
        placeholder="Title"
        :value="title"
        name="title"
        type="text"
        
      />

      <input
      required
        @input="handleChange"
        placeholder="Author"
        :value="username"
        name="username"
        type="text"
        
      />

      <textarea
      required
        @input="handleChange"
        placeholder="Description"
        :value="description"
        name="description"
        type="text"

        id="description"


      />
      <textarea
      required
        @input="handleChange"
        placeholder="Enter a photo"
        :value="photo_url"
        name="photo_url"
        type="url"



      />
      <hr />
      <button class="button-29">Submit</button>
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
    photo_url: '',
    confirm: false
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
      alert('Submitted Succesfully')
      this.$router.push(`/`);
    },
    
  }
};
</script>

<style scoped>
.container{
  max-height: 50%;
  max-width: 75%;
  margin: auto;
  color: rgb(245, 245, 245);
  font-size: large;
  font-weight: 500;
  background: rgba(117, 153, 161, 0.616);
    border-top-right-radius: 2em 2em ;
  border-bottom-left-radius: 2em 2em;
  border-bottom-right-radius: 2em 2em;
  border-top-left-radius: 2em 2em;
  border: .8rem double rgba(255, 255, 255, 0.829);
  padding: 1rem
}

label {
  background-color: rgba(255, 255, 255, 0.425);
  border-radius: 3px;
  padding: .8em;

}
input[type=text], select, textarea {
  width: 75%;
  margin: .5em;
  padding: 1.3em;;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button{
  margin: 5px;
  padding:4px;
}

#description{
  min-height: 80vh;
}

/* CSS */
.button-29 {
  align-items: center;
  appearance: none;
  background-image: radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%);
  border: 0;
  border-radius: 6px;
  box-shadow: rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;
}

.button-29:focus {
  box-shadow: #3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
}

.button-29:hover {
  box-shadow: rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset;
  transform: translateY(-2px);
}

.button-29:active {
  box-shadow: #3c4fe0 0 3px 7px inset;
  transform: translateY(2px);
}
</style>