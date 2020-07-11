<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <svg-icon icon-class="qq"></svg-icon>
      <router-link to="/login">Login</router-link>
      <svg-icon icon-class="weixin"></svg-icon>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
   beforeCreate(){
     console.log('ddd')
   }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
