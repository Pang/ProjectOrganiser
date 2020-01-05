<template>
     <div class="modal">
        <div class="modal-content">
            <span class="close" @click="closeModal()">X</span>
            <p>Edit task:</p>
            <textarea v-model="taskText" type="text" /> <br><br>
            <button @click="changeTask()">Submit</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalTask",
    data() {
        return {
            taskText: ""
        }
    },
    mounted() {
        this.taskText = this.$store.state.selectedTask
    },
    methods: {
        closeModal(){
            this.$store.state.modalTaskEdit = false;
        },
        changeTask() {
            this.$store.dispatch('editTask', { title: this.$store.state.selectedCol, task: this.$store.state.selectedTask, newTask: this.taskText });
            this.$store.state.modalTaskEdit = false;
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
.close {
    float: right; 
    cursor: pointer
}
textarea {
    width: 300px;
    height: 100px;
}
</style>