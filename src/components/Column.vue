<template>
<div>
    <div class="column">
        {{ column.title }}
        <button @click="showAddBox"><b>+</b></button><br><br>
        <div :class="[addNote ? 'showBox' : 'hideBox']"> 
            <textarea v-model="addNoteText"></textarea> <br>
            <span @click="log()">Add</span> - 
            <span @click="showAddBox">Cancel</span>
        </div>
        <draggable v-model="column.tasks" group="items" @start="drag=true" @end="drag=false">
            <Task v-for="(task, index) in column.tasks" 
                :key="index" :task="task"/>
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
            addNote: false
        }
    },
    computed: {

    },
    methods: {
        log() {
            this.$store.dispatch('addTask',
                {
                    title: this.column.title, text: this.addNoteText
                });
            this.showAddBox();
        },
        showAddBox() {
            this.addNote = !this.addNote;
            this.addNoteText = "";
        }
    }
}
</script>

<style scoped>
    .column {
        height: 100%;
        width: 200px;
        border: black solid 2px;
    }
    .showBox {
        display: block;
    }
    .hideBox {
        display: none;
    }
</style>