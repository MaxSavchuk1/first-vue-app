<template>
  <div id="app">
    <h1>My first VUE app</h1>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/todos">Todos</router-link>
      <router-link to="/posts">Posts</router-link>
    </div>
    <hr />
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#app > hr {
  width: 100%;
}
.links {
  display: flex;
  justify-content: center;
}
.links a {
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 15px;
  font-weight: bold;
  color: blue;
}
.links a:visited {
  color: blue;
}
</style>
