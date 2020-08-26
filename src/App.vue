<template>
  <div id="app">
    <h1> {{ $t('yahtzee') }} </h1>
    <LocaleSwitcher></LocaleSwitcher>
  </div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue'

export default {
  name: 'App',
  components: {
    LocaleSwitcher,
  }
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
