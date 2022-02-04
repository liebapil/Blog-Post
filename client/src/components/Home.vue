<template>
<div>
  <h1 class="post">Post your blogs on Blog Post!</h1>
  <hr />

  <div class="home_container">
    
  <img class= "image_1" src="https://thumbs.dreamstime.com/b/idea-vector-concept-smiling-young-woman-sitting-tea-use-laptop-thinking-cartoon-illustration-vector-idea-vector-184406744.jpg" alt="thinking">
  <img class="image_2" src="https://beebom.com/wp-content/uploads/2021/04/10-Best-Typing-Test-Websites-to-Check-Your-Typing-Speed.jpg?w=750&quality=75" alt="typing">
  <img class="image_3" src="https://cdn.imgbin.com/25/19/4/ui-design-icon-computer-science-icon-blog-icon-VrKPEvFn.jpg" alt="online_cursor">
  <img class="image_4" src="https://www.emergingedtech.com/wp/wp-content/uploads/2018/04/blogging.jpg" alt="blog_image">
  <img class="image_5" src="https://cdn3.iconfinder.com/data/icons/communication-3-4/512/129-512.png" alt="post_image">
  </div>
  <hr />
  <section class="aboutsection">
    <img class="abouttext" src="https://avatars.githubusercontent.com/u/67972965?v=4" href="https://www.linkedin.com/in/abidurrahmandipta"/>

                <img class="abouttext" src="https://avatars.githubusercontent.com/u/87242570?v=4" href="https://www.linkedin.com/in/nashid-alam-02602147/"/>

                <img class="abouttext" src="https://avatars.githubusercontent.com/u/58853852?v=4" href="https://www.linkedin.com/in/calvin-menyfield/"/>

                <img class="abouttext" src="https://avatars.githubusercontent.com/u/93634324?v=4" href="https://www.linkedin.com/in/lieba-pil/"/>
  </section>
  </div>
</template>
https://www.linkedin.com/in/lieba-pil/
<script>
export default{
name: 'Home'
}
</script>

<style scoped>

h1{
  font-family: 'Luckiest Guy', cursive;
  font-size:3em;
  color:rgb(102, 33, 96);
  text-align: center;
}

.image_5{
  animation-name: image_5;
  animation-duration: 4s;
  animation-delay: 1s;
  animation-iteration-count: 4s;
}

@keyframes image_5 {

  from{opacity: 0}
  to{opacity: 1;}
}

.image_4{
animation-name: image_4;
  animation-duration: 3s;
  animation-delay: 2s;
}
@keyframes image_4 {

  from{opacity: 0}
  to{opacity: 1;}
}

.image_3
{
animation-name: image_3;
  animation-duration: 2s;
  animation-delay: 3s;
}

@keyframes image_3 {

  from{opacity: 0}
  to{opacity: 1;}
}
.image_2{
animation-name: image_2;
  animation-duration: 1s;
  animation-delay: 4s;
}
@keyframes image_2 {

  from{opacity: 0}
  to{opacity: 1;}
}
.image_1{
animation-name: image_1;
  animation-duration: 2s;
  animation-delay: 5s;
}
@keyframes image_1 {

  from{opacity: 0}
  to{opacity: 1;}
}
img{
  border-radius: 50%;
  max-height: 40vh;
}
.home_container{
  align-items: center;
 padding: 2em;
  display: grid;
  grid-template-columns: repeat(auto-fill, 22.5em);
  justify-content: space-around;
  animation-name: allimages;
  animation-duration: 5s;
  animation-delay: 6s;
}
@keyframes allimages {
0%   {grid-template-columns: repeat(auto-fill, 22.5em);}
  25%  {grid-template-columns: repeat(auto-fill, 20em)}
  50%  {grid-template-columns: repeat(auto-fill, 17em)}
  75%  {grid-template-columns: repeat(auto-fill, 14.5em)}
  100% {grid-template-columns: repeat(auto-fill, 11em);}
}

.abouttext{
  position:relative;
  top: 8em;
  cursor: pointer;
  max-height: 10vh;
}
.aboutsection{
  display:flex;
  justify-content:space-evenly;
}
</style>