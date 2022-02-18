import api from '@/api'

export default {
  actions: {
    async fetchPosts (ctx, limit = 3) {
      const { data } = await api.json.getPosts(limit)
      ctx.commit('updatePosts', data)
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
      state.isFetching = false
    },
    createPost (state, newPost) {
      state.posts.unshift(newPost)
    }
  },
  state: { posts: [], isFetching: true },
  getters: {
    validPosts (state) {
      return state.posts.filter(p => p.title && p.body)
    },
    allPosts (state) {
      return state
    },
    postsCount (state) {
      return state.posts.length
    }
  }
}
