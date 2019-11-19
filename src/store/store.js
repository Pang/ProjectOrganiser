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
        modalCol: false,
        modalColRemove: false,
        modalColEdit: false,
        modelColAdd: false
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
        }
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
        }
    }
});