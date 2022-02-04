<template>
  <div id="app">
    <header>
      <Nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
export default {
  name: 'App',
  components: {
    Nav
  }
};
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(21, 168, 100);
  color: #2c3e50;
  margin: 0;
}
img{
  border: .3em ridge black;
  min-height: 20vh;
  max-width: 10vw;
  
}
</style>
