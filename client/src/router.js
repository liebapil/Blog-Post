import VueRouter from 'vue-router';

import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue';
import CreatePost from './components/CreatePost.vue';
import Home from './components/Home.vue';

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/allposts', component: PostList, name: 'PostList' },
  { path: '/create', component: CreatePost, name: 'CreatePost' },
  { path: '/posts/:post_id', component: PostDetail, name: 'PostDetail' }
];

export default new VueRouter({
  routes,
  mode: 'history'
});
