<template>
<div>
    <div class="column">
        <div class="toolbar">
            <div class="dropdown">
                <span class="moreIcon" @click="dropdown = !dropdown"><b>···</b></span>
                <span class="moreIcon" @click="addNote = !addNote"><b>+</b></span><br>

                <div class="dropdown-content" v-if="dropdown">
                    <ul>
                        <li @click="editCol()">Edit Header</li>
                        <li @click="removeCol()">Remove Column</li>
                        <li @click="dropdown = false">Close</li>
                    </ul>
                </div>
            </div>
        </div>

        <h4 style="margin-top: 10px">{{ column.title }}</h4>
        <div :class="[addNote ? 'showBox' : 'hideBox']"> 
            <textarea v-model="addNoteText"></textarea> <br>
            <span class="taskAddFunc" @click="addTask()">Add</span> - 
            <span class="taskAddFunc" @click="addNote = !addNote">Cancel</span>
        </div>

        <draggable v-model="column.tasks" group="items" @start="drag=true" @end="drag=false">
            <Task v-for="(task, index) in column.tasks" 
                :key="index" :task="task" :column="column"/>
        </draggable>

    </div>
</div>
</template>

<script>
import Task from './Task';
import draggable from 'vuedraggable';

export default {
    name: 'Column',
    components: {
        Task,
        draggable
    },
    props: ["column"],
    data() {
        return {
            addNoteText: "",
            addNote: false,
            dropdown: false
        }
    },
    methods: {
        addTask() {
            this.$store.dispatch('addTask',
                {
                    title: this.column.title, text: this.addNoteText
                });
            this.addNote = !this.addNote;
            this.addNoteText = "";
        },
        removeCol() {
            this.dropdown = false;
            this.$store.state.selectedCol = this.column.title;
            this.$store.state.modalColRemove = true;
        },
        editCol() {
            this.dropdown = false;
            this.$store.state.selectedCol = this.column.title;
            this.$store.state.modalColEdit = true;
        }
    }
}
</script>

<style scoped>
    .moreIcon {
        float: right;
        margin-left: 5px;
        font-size: 20px;
        cursor: pointer;
    }
    .moreIcon:hover {
        color: #619983
    }
    .dropdown {
        position: relative;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content {
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
    }
    .taskAddFunc:hover {
        color: #619983;
        cursor: pointer;
    }
    .column {
        height: 100%;
        width: 200px;
        border: black solid 1px;
    }
    .showBox {
        display: block;
    }
    .hideBox {
        display: none;
    }
    li {
        list-style-type: none;
        cursor: pointer;
    }
    li:hover {
        background-color: #a9e4cd
    }
    li + li {
        margin-top: 10px;
    }
    ul{
        margin: 0;
        padding: 0;
    }

</style>