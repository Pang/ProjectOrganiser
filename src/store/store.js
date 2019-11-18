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
        ]
    },
    mutations: {
        addColumn: (state, payload) => {
            state.taskLists.push({ title: payload.text, tasks: [] });
        },
        addTask: (state, payload) => {
            // console.log(payload);
            state.taskLists.find(taskLists => payload.title === taskLists.title)
                .tasks.unshift(payload.text);
        }
    },
    actions: {
        addColumn: ({ commit }, payload) => {
            commit("addColumn", payload)
        },
        addTask: ({ commit }, payload) => {
            commit("addTask", payload);
        }
    }
});