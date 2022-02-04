<template>
<div>
  <div class="static" v-bind:class="{ active: !confirm, 'non-opacity': confirm}">
    <h1>{{ selectedDetail.title }}</h1>
    <img :src="selectedDetail.photo_url" alt="something" />
    <p>{{ selectedDetail.description }}</p>
    <button class="delete_button" @click="confirmWindow">Delete</button>
    </div>
    <section v-if="confirm">
                <div class="confirm">
                <div class="confirm__window">
                    <div class="confirm__titlebar">
                        <span class="confirm__title">Are You Sure?</span>
                        <button @click="unConfirm()" class="confirm__close">X</button>
                    </div>
                    <div class="confirm__content">This Post will be lost forever</div>
                    <div class="confirm__buttons">
                        <button @click="deletePost()" class="confirm__button confirm__button--ok confirm__button--fill">OK</button>
                        <button @click="unConfirm()" class="confirm__button confirm__button--cancel">Cancel</button>
                    </div>
                </div>
            </div>
    </section>
  </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'PostDetail',
  data: () => ({
    selectedDetail: null,
    confirm: false
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
      alert('You post has been deleted')
    },
    confirmWindow() {
      this.confirm = true
    },
    unConfirm(){
      this.confirm = false
    }
  }
};
</script>

<style scoped>
.article-card{
position: relative;
bottom: 200px;
background: rgba(228, 224, 230, 0.13);
  background-size: cover;
  color: black;
  border: 0.1em solid black;
  box-shadow: 1rem 1rem 1rem 1rem rgb(29, 12, 7);
  color: #ffffff;
  border-radius: 1em;
  padding: 0.5em;
  margin: 1.2rem;
min-width: fit-content;
animation-name: confirm---open;
animation-duration: 0.5s;
animation-fill-mode: forwards;
transition: all 0.4s
}

.non-opacity{opacity: .1;

}
button{
  margin: .5em;
}
.confirm {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    padding: 10px;
    box-sizing: border-box;
    animation-name: confirm---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;

    display: flex;
    align-items: center;
    justify-content: center;
}

.confirm--close {
    animation-name: confirm---close;
}

.confirm__window {
    width: 100%;
    max-width: 600px;
    background: white;
    font-size: 14px;
    font-family: 'Noto Sans', sans-serif;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);

    opacity: 0;
    transform: scale(0.75);
    animation-name: confirm__window---open;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
    animation-delay: 0.2s;
}

.confirm__titlebar,
.confirm__content,
.confirm__buttons {
    padding: 1.25em;
    font-size: larger;
    font-family: bolder;
}

.confirm__titlebar {
    background: #222222;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.confirm__title {
    font-weight: bold;
    font-size: 1.1em;
}

.confirm__close {
    background: none;
    outline: none;
    border: none;
    transform: scale(2.5);
    color: #ffffff;
    transition: color .2s;
}

.confirm__close:hover {
    color: #ff0000;
    cursor: pointer;
}

.confirm__content {
    line-height: 2.8em;
}

.confirm__buttons {
    background: #eeeeee;
    display: flex;
    justify-content: flex-end;
}

.confirm__button {
    padding: 0.4em 0.8em;
    border: 2px solid #009879;
    border-radius: 5px;
    background: #ffffff;
    color: #009879;
    font-weight: bold;
    font-size: 1.1em;
    font-family: 'Noto Sans', sans-serif;
    margin-left: 0.6em;
    cursor: pointer;
    outline: none;
}

.confirm__button--fill {
    background: #009879;
    color: #ffffff;
}


@keyframes confirm---open {
    from { opacity: 0 }
    to { opacity: 1 }
}


@keyframes confirm__window---open {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.delete_button{
  height: 4em;
  border-radius: 2em;
  padding: 0.4em 1.2em;
  margin: 0 0.1em 0.1em 0;
  display: inline-block;
  background-color: rgb(94, 8, 8);
  border-radius: 0.3em;
  border: 0.1em double #cccccc;
  color: #eeeeee;
  font-size: .8em;
  width: 10em;
  cursor: pointer;
}
</style>

