<template>
  <div id="app">

    <nav-bar></nav-bar>
    <router-view></router-view>
    <dashboard></dashboard>

  </div>
</template>

<script>
// import Home from "./views/Home";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard"
// import User from "./views/User";

export default {
  name: 'App',
  components: {
    // Home,
    NavBar,
    Dashboard
    // User

  }
}
</script>

<style>
  .dashboard{
    position:fixed;
    top:0;
    left:190px;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}

</style>
