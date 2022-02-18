<template>
  <div class="post-container">
    <h1>{{ currentPost.title }}</h1>
    <div>{{ currentPost.body }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['allPosts']),
    id () {
      return this.$route.params.id
    },
    currentPost () {
      const [post] = this.allPosts.posts.filter(el => el.id === this.id)
      return post
    }
  }
}
</script>

<style scoped>
.post-container {
  max-width: 1000px;
  width: 90%;
}
.post-container > h1 {
  margin: 1em 0;
}
</style>
