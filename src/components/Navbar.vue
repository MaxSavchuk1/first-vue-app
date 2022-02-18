<template>
  <v-container fluid>
    <v-app-bar color="deep-purple accent-4" dense dark>
      <v-btn v-if="isShowBack" outlined class="ml-3 links" id="go-back" @click="goBack">&#10094;</v-btn>
      <v-spacer />
      <v-btn outlined class="ml-3 links"><router-link to="/">Home</router-link></v-btn>
      <v-btn outlined class="ml-3 links"><router-link to="/todos">Todos</router-link></v-btn>
      <v-btn outlined class="ml-3 links"><router-link to="/posts">Posts</router-link></v-btn>
      <v-btn outlined class="ml-3 links"><router-link to="/photos">Photos</router-link></v-btn>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  computed: {
    isShowBack () {
      return this.$route.path !== '/'
    }
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.links {
  display: flex;
  justify-content: center;
}
.links a {
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
}
.links a:visited {
  color: white;
}
#go-back {
  font-size: 1.5em;
  min-width: 1.5em;
}
</style>
