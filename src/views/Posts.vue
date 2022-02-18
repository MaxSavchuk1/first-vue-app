<template>
  <div class="postsContainer">
    <div>
      <h2>Posts: {{ postsCount }}</h2>
    </div>
    <post-form />
    <hr />
    <loader v-if="allPosts.isFetching" />
    <div
      class="post"
      v-for="post in allPosts.posts"
      :key="post.id"
      v-else-if="allPosts.posts.length"
    >
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
    <p v-else>No posts</p>
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import { mapGetters, mapActions } from 'vuex'
import PostForm from '@/components/PostForm'
export default {
  computed: mapGetters(['allPosts', 'postsCount', 'validPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    this.fetchPosts()
  },
  components: { Loader, PostForm }
}
</script>

<style scoped>
.postsContainer {
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.post {
  width: 80%;
  max-width: 1000px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 10px;
}
.post > h3 {
  border-bottom: 1px solid black;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
hr {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 35px;
  border: 1px solid indigo;
}
</style>
