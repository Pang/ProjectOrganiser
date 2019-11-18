<template>
<div class="hello">
  <h1>Project Organiser</h1>
  <button @click="addingCol = !addingCol">+ Add Column</button>
  <br>
  <div :class="[addingCol ? 'showBox' : 'hideBox']"> 
      <textarea v-model="addColHeader"></textarea> <br>
      <span @click="addCol(addColHeader)">Add</span> - 
      <span @click="addingCol = !addingCol">Cancel</span>
  </div>
  <br>
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
      columns: this.$store.state.taskLists,
      addingCol: false,
      addColHeader: ""
    }
  },
  methods: {
    addCol() {
      this.$store.dispatch('addColumn', { text: this.addColHeader });
      this.addColHeader = "";
      this.addingCol = !this.addingCol;
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

.hideBox {
  display: none;
}
.showbox {
  display: block;
}
a {
  color: #42b983;
}
</style>
