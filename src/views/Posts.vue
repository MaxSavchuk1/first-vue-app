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
      @click="clickHandler(post.id)"
    >
      <h3>{{ post.title }}</h3>
      <div class="hidden">
        <div><span>OPEN</span></div>
      </div>
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
  methods: {
    ...mapActions(['fetchPosts']),
    clickHandler (id) {
      this.$router.push({ name: 'Post', params: { id } })
    }
  },
  async mounted () {
    this.fetchPosts(5)
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
  display: flex;
  justify-content: center;
  width: 80%;
  max-width: 1000px;
  border: 1px solid #000;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: rgb(0, 232, 255);
  background: linear-gradient(45deg, rgba(0, 232, 255, 1) 0%, rgba(178, 178, 246, 1) 100%, rgba(0, 212, 255, 1) 100%);
}
.post h3 {
  margin: 10px auto;
}
.hidden {
  display: flex;
  flex-direction: row-reverse;
  background: transparent;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 56px;
}
.hidden > div {
  display: flex;
  width: 56px;
  background-color: cornflowerblue;
  border-left: 1px solid #000;
}
.hidden > div > span {
  margin: auto;
  color: black;
  font-weight: bold;
}
.hidden:hover {
  left: 0;
  transition: all 0.4s;
}
hr {
  width: 100%;
  margin-top: 20px;
  margin-bottom: 35px;
  border: 1px solid indigo;
}
</style>
