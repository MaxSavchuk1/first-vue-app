import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    },
    {
      path: '/posts',
      component: () => import('./views/Posts.vue')
    },
    {
      name: 'Post',
      path: '/posts/:id',
      component: () => import('./views/Post.vue'),
      props: true
    },
    {
      path: '/photos',
      component: () => import('./views/Photos.vue')
    },
    {
      path: '/page-not-found',
      alias: '*',
      component: { render: h => h('h2', ['Error 404 - Not Found!']) }
    }
  ]
})
