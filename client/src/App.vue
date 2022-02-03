<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <router-view header="Listings In Miami"></router-view> -->
    <header>
      <!-- Nav Goes Here -->
      <Nav />
    </header>
    <main>
      <!-- Router View Goes Here -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import PostList from './components/PostList.vue';
import Nav from './components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
