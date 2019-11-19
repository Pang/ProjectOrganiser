<template>
    <div class="modal">
        <div class="modal-content">
            <span  style="float: right" @click="$store.state.modalCol = false">X</span>
            <p>Enter a new header for this column:</p>
            <input v-model="colHeaderText" type="text" /> <br><br>
            <button @click="changeHeader">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalCol",
    data() {
        return {
            colHeaderText: "",
        }
    },
    methods: {
        changeHeader() {
            this.$store.dispatch('editColumnHeader', { title: this.$store.state.selectedCol, newTitle: this.colHeaderText});
            this.$store.state.modalCol = false;
        }
    }
}
</script>

<style scoped>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 400px;
  z-index: 2;
}
</style>