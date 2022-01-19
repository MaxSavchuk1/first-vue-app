<template>
  <form @submit.prevent="submit">
    <v-text-field label="Input title here" v-model="title"></v-text-field>
    <v-text-field label="Input body here" v-model="body"></v-text-field>
    <v-btn outlined color="indigo" type="submit"> Create post </v-btn>
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
}
</style>
