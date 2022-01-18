<template>
  <form @submit.prevent="submit">
    <input type="text" placeholder="TITLE" v-model="title" />
    <input type="text" placeholder="CONTENT" v-model="body" />
    <button type="submit">Create post</button>
  </form>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    ...mapMutations(["createPost"]),
    submit() {
      if (this.title.trim() || this.body.trim()) {
        this.createPost({
          title: this.title,
          body: this.body,
          id: Date.now(),
        });
        this.title = "";
        this.body = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  width: 80%;
  max-width: 1000px;
  margin-bottom: 15px;
}
input {
  display: block;
  width: 100%;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
button {
  width: 100%;
  background-color: #eee;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  color: darkgreen;
}
</style>
