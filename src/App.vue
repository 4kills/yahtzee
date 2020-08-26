<template>
  <div id="app">
    <h1> {{ $t('yahtzee') }} </h1>
    <LocaleSwitcher></LocaleSwitcher>
    <Scorecard name="Desi"></Scorecard>
  </div>
</template>

<script>
import LocaleSwitcher from './components/LocaleSwitcher.vue'
import Scorecard from './components/Scorecard.vue'

export default {
  name: 'App',
  components: {
    LocaleSwitcher,
    Scorecard,
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
  margin-top: 40px;
}
</style>
