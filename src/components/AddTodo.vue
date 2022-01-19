<template>
  <form @submit.prevent="onSubmit">
    <v-text-field label="Input your task here" v-model="title"></v-text-field>
    <v-btn class="mx-2" fab dark small color="indigo" type="submit">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit("add-todo", newTodo);
        this.title = "";
      }
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
}
input {
  width: 400px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #000;
}
button {
  text-transform: uppercase;
  background-color: #fff;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 4px;
  cursor: pointer;
}
</style>
