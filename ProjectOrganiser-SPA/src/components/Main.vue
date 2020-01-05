<template>
<div class="hello">
  <h1>Project Organiser</h1>
  <a class="addColBtn" @click="addCol()">+ Add Column</a>
  <br>
  <br>
  <draggable v-model="columns" group="columns" @start="drag=true" @end="drag=false">
    <Column class="col" v-for="(column, index) in columns" 
      :key="index" :column="column"/>
  </draggable>
  <ModalCol v-if="$store.state.modalColRemove || $store.state.modalColAdd || $store.state.modalColEdit"/>
  <ModalTask v-if="$store.state.modalTaskEdit"/>
</div>
</template>

<script>
import Column from './Column.vue'
import ModalCol from './modals/ModalCol'
import ModalTask from './modals/ModalTask'
import draggable from 'vuedraggable';

export default {
  name: 'Main',
  components: {
    Column,
    ModalCol,
    ModalTask,
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
.addColBtn {
  color: black;
}
.addColBtn:hover {
  color: #42b983;
  cursor: pointer
}
.hideBox {
  display: none;
}
.showbox {
  display: block;
}
</style>
