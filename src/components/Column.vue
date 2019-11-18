<template>
<div>
    <div class="column">
        <div class="dropdown">
            <button class="moreIcon"><b>...</b></button>
            <div class="dropdown-content">
                <ul>
                    <li>Edit Header</li>
                    <li @click="removeCol()">Remove Column</li>
                </ul>
            </div>
        </div>
        <button class="moreIcon" @click="addNote = !addNote"><b>+</b></button>

        <h4>{{ column.title }}</h4>
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
        },
        removeCol() {
            this.$store.dispatch('removeColumn', { title: this.column.title })
        }
    }
}
</script>

<style scoped>
    .moreIcon {
        float: right;
    }

    .dropdown {
        position: relative;
    }
    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        padding: 12px 16px;
        z-index: 1;
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
    ul{
        padding: 0;
    }

</style>