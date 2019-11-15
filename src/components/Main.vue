<template>
<div class="hello">
  <h1>Organiser</h1>
  <Column class="col" v-for="(column, index) in columns" 
    :key="index" :column="column"/>
</div>
</template>

<script>
import Column from './Column.vue'

export default {
  name: 'Main',
  components: {
    Column
  },
  data() {
    return {
      columns: this.$store.state.taskLists
    }
  },
  methods: {
    log() {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col {
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
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
a {
  color: #42b983;
}
</style>
