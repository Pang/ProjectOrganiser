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
import Task from './Task'
import draggable from 'vuedraggable'
import {mapGetters} from 'vuex';

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
        ...mapGetters([
            'addTask'
        ])
    },
    methods: {
        log() {
            this.$store.getters.addTask(this.column.title, this.addNoteText);
            this.showAddBox();
        },
        showAddBox() {
            this.addNote = !this.addNote;
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