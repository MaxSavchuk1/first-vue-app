<template>
  <div class="todosContainer">
    <h2>Todos</h2>
    <hr />
    <add-todo @add-todo="addTodo" />
    <hr />
    <v-select :items="items" label="Filter" outlined v-model="filter" class="filter"></v-select>
    <div v-if="loading">
      <loader />
    </div>
    <todo-list v-else-if="filteredTodos.length" v-bind:todos="filteredTodos" @remove-todo="removeTodo" />
    <p v-else>No todos</p>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodo from '@/components/AddTodo'
import Loader from '@/components/Loader'
export default {
  name: 'App',
  data () {
    return {
      todos: [],
      loading: true,
      filter: '',
      items: ['all', 'completed', 'not-completed']
    }
  },
  components: { TodoList, AddTodo, Loader },
  mounted () {
    this.fetchTodos()
  },
  computed: {
    filteredTodos () {
      if (this.filter === 'all' || this.filter === '') {
        return this.todos
      }
      if (this.filter === 'completed') {
        return this.todos.filter(t => t.completed)
      }
      if (this.filter === 'not-completed') {
        return this.todos.filter(t => !t.completed)
      }
    }
  },
  methods: {
    removeTodo (id) {
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo (todo) {
      this.todos.push(todo)
    },
    async fetchTodos () {
      try {
        const { data } = await this.$api.json.getTodos()
        this.todos = data
        this.loading = false
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped>
.todosContainer {
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
}
.todosContainer hr {
  width: 100%;
  margin: 15px 0;
  border: 1px solid indigo;
}
.filter {
  width: 100%;
  max-width: 300px;
  margin-right: auto;
}
</style>
