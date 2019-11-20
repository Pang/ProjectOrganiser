<template>
    <div>
        <div class="task">
            <div class="dropdown">
                <span style="float:right" @click="dropdown = !dropdown"><b>···</b></span>
                <div class="dropdown-content" v-if="dropdown" >
                    <ul>
                        <li @click="editTask()">Edit</li>
                        <li @click="removeTask()">Remove</li>
                        <li @click="dropdown = false">Close</li>
                    </ul>
                </div>
            </div>
            <br>
            <span style="padding-bottom: 20px">{{ task }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Task",
    props: ["task", "column"],
    data() {
        return {
            dropdown: false,
        }
    },
    methods: {
        editTask() {
            this.$store.state.selectedCol = this.column.title;
            this.$store.state.selectedTask = this.task;
            this.$store.state.modalTaskEdit = true;
            this.dropdown = false;
        },
        removeTask() {
            this.$store.dispatch('removeTask', { title: this.column.title, task: this.task })
            this.dropdown = false;
        }
    }
}
</script>

<style scoped>
    .dropdown {
        position: relative;
    }
    .task {
        width: 180px;
        margin: 5px auto;
        background-color: #a9e4cd; 
        border: dotted 2px #619983;
        cursor: pointer;
        padding-bottom: 15px;
    }
    .dropdown-content {
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    li {
        list-style-type: none;
        cursor: pointer;
    }
    li + li {
        margin-top: 10px;
    }
    li:hover {
        background-color: #a9e4cd
    }
    ul{
        margin: 0;
        padding: 0;
    }
</style>