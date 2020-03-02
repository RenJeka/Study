<template>
    <div id="app" class="container"> 
      <div class="b">
      <h1 class="text-dark">{{msg}}</h1>
      <router-link to="/users"  class="btn btn-link">Перейти к таблице</router-link>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue.js CRUD application'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

h1, h2 {
  font-weight: normal;
  text-align: center;
}

.b {
  border-bottom: 1px solid #e7eaed;
}

</style>
