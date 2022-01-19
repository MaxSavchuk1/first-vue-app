<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
    </span>
    <v-btn icon color="black" v-on:click="$emit('remove-todo', todo.id)"
      ><v-icon>mdi-delete</v-icon></v-btn
    >
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  margin: 0 0 1rem;
}
input {
  margin-right: 1rem;
}
.done {
  text-decoration: line-through;
}
</style>
