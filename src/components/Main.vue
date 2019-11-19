<template>
<div class="hello">
  <h1>Project Organiser</h1>
  <button @click="addCol()">+ Add Column</button>
  <br>
  <br>
  <draggable v-model="columns" group="columns" @start="drag=true" @end="drag=false">
    <Column class="col" v-for="(column, index) in columns" 
      :key="index" :column="column"/>
  </draggable>
  <ModalCol v-if="$store.state.modalCol"/>
  
</div>
</template>

<script>
import Column from './Column.vue'
import ModalCol from './modals/ModalCol'
import draggable from 'vuedraggable';

export default {
  name: 'Main',
  components: {
    Column,
    ModalCol,
    draggable
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
      this.$store.state.modalCol = true;
      this.$store.state.modalColAdd = true;
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
  background-color: white;
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
