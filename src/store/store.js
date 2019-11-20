import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        taskLists: [
            {
                "title": "To do",
                "tasks": [
                    "Organise folder structure alphabetically", "Hire new junior Dev"
                ]
            },
            {
                "title": "In Progress",
                "tasks": [
                    "Design profile page"
                ]
            },
            {
                "title": "Complete",
                "tasks": [
                    "Complete template"
                ]
            }
        ],
        selectedCol: "",
        modalColRemove: false,
        modalColEdit: false,
        modalColAdd: false,
        selectedTask: "",
        modalTaskEdit: false
    },
    getters: {
    },
    mutations: {
        addColumn: (state, payload) => {
            state.taskLists.push({ title: payload.title, tasks: [] });
        },
        removeColumn: (state, payload) => {
            state.taskLists.splice(state.taskLists.findIndex(taskLists => payload.title === taskLists.title), 1);
        },
        editColumnHeader: (state, payload) => {
            state.taskLists.find(taskLists => payload.title === taskLists.title).title = payload.newTitle;
        },
        addTask: (state, payload) => {
            state.taskLists.find(taskLists => payload.title === taskLists.title)
                .tasks.unshift(payload.text);
        },
        editTask: (state, payload) => {
            let colIndex = state.taskLists.findIndex(taskLists => payload.title === taskLists.title);
            let taskIndex = state.taskLists.find(taskLists => payload.title === taskLists.title).tasks.findIndex(tasks => payload.task === tasks)

            Vue.set(state.taskLists[colIndex].tasks, taskIndex, payload.newTask);
        },
        removeTask: (state, payload) => {
            let colIndex = state.taskLists.findIndex(taskLists => payload.title === taskLists.title);
            let taskIndex = state.taskLists.find(taskLists => payload.title === taskLists.title).tasks.findIndex(tasks => payload.task === tasks)

            state.taskLists[colIndex].tasks.splice(taskIndex, 1);

        },
    },
    actions: {
        addColumn: ({ commit }, payload) => {
            commit("addColumn", payload)
        },
        removeColumn: ({ commit }, payload) => {
            commit("removeColumn", payload)
        },
        editColumnHeader: ({ commit }, payload) => {
            commit("editColumnHeader", payload)
        },
        addTask: ({ commit }, payload) => {
            commit("addTask", payload);
        },
        editTask: ({ commit }, payload) => {
            commit("editTask", payload);
        },
        removeTask: ({ commit }, payload) => {
            commit("removeTask", payload);
        },
    }
});