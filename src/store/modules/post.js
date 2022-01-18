export default {
  actions: {
    async fetchPosts(ctx, limit = 3) {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
      );
      const posts = await res.json();
      ctx.commit("updatePosts", posts);
    },
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts;
      state.isFetching = false;
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost);
    },
  },
  state: { posts: [], isFetching: true },
  getters: {
    validPosts(state) {
      return state.posts.filter((p) => p.title && p.body);
    },
    allPosts(state) {
      return state;
    },
    postsCount(state) {
      return state.posts.length;
    },
    // postsCount(state, getters) {
    //   return getters.validPosts.length;
    // },
  },
};
