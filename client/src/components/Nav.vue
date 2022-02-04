<template>
  <nav>
    <router-link to="/" classname="Home" name="Home"><img class="home_image" src="/noun-home-4567632.png" alt="Home"></router-link>
    <router-link to="/allposts" name="PostList" >PostList</router-link>
    <router-link to="/create" name="CreatePost">CreatePost</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style>
.router-link-exact-active {
  color: rgb(14, 107, 119);
}

.Home{
  float: left;
}

nav {
  font-family: 'Luckiest Guy', cursive;
  font-size: 2em;
  text-align:end;
  background: #5695c9;
  padding: 2em;
  border: solid .3em;
  border-top-right-radius: 2em 2em ;
  border-bottom-left-radius: 2em 2em;
  border-bottom-right-radius: 2em 2em;
  border-top-left-radius: 2em 2em;
}

nav a {
  margin: 1em;
  color: #d4e7de;
  text-decoration: none;
  font-weight: 800;
}

.home_image{
margin: auto;
position: relative;
bottom: 60px;
  float: left;
  border: none;
  border-radius: 50%;
  max-height: .2rem;
  transition: all 0.5s;
  object-fit: cover;
    object-position: 1px 10px;
}
.home_image:hover{
  opacity: .6;
}
</style>
