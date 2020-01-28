import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navState: '/',
        count: 0,
        msg: "vuex",
        test: "test",
        todos: [
            { id: 1, text: 'todo1', done: true },
            { id: 2, text: 'todo2', done: false }
        ],
        items: [
            { id: 1, text: "a" },
            { id: 2, text: "ab" },
            { id: 3, text: "a" }
        ]
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.done)
        },
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id)
        }
    },
    mutations: {
        updateState(state, val) {
            state.navState = val;
            console.log("navState", val)
        },
        increment(state, payload) {
            state.count += payload.num;
            console.log("param", payload.num)
        }
    }
})