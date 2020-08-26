<template>
  <div class='container'>
    <p> {{ this.name }} </p>
  </div>
</template>

<script>
export default {
  name: 'Scorecard',
  props: {
    name: String, 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  border:1px solid black;
  margin-top: 20px; 
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
