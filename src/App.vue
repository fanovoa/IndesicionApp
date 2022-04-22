<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Counter title="Contador ONE" :start="150" />
  <Counter title="" /> -->
  <Indecision />
</template>

<script>
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

export default {
  components: { 
      // Counter, 
      Indecision 
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

