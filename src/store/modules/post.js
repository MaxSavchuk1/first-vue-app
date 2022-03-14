import api from '@/api'

export default {
  actions: {
    async fetchPosts (ctx, limit) {
      try {
        const { data } = await api.json.getPosts(limit)
        ctx.commit('updatePosts', data)
      } catch (e) {
        console.error(e)
        ctx.commit('setError', e)
      }
    },
    async fetchMorePosts (ctx, limit) {
      try {
        ctx.commit('increasePage')
        const { data } = await api.json.getPosts(limit, ctx.state.page)
        ctx.commit('updatePosts', data)
      } catch (e) {
        console.error(e)
        ctx.commit('setError', e)
      }
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = [...state.posts, ...posts]
      state.error = null
      state.isFetching = false
    },
    createPost (state, newPost) {
      state.posts.unshift(newPost)
    },
    setError (state, e) {
      state.error = e
      state.isFetching = false
    },
    increasePage (state) {
      state.page += 1
    }
  },
  state: { posts: [], isFetching: true, error: null, page: 1 },
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
