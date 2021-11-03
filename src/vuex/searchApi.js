import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex);

let searchApi = new Vuex.Store({
    state: {
        elements: [],
        searchValue: '',
    },
    mutations: {
        SET_ELEMENTS_TO_STATE: (state, elements) => {
            state.elements = elements;
        },
        SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
            state.searchValue = value;
        }
    },
    actions: {
        GET_ELEMENTS_FROM_API({commit}) {
            return axios('https://api.github.com/search/repositories?q=', {
                method: "GET"
            })
                .then((elements) => {
                    commit('SET_ELEMENTS_TO_STATE', elements);
                    return elements;
                })
                .catch((error) => {
                    console.log(error)
                    return error;
                })
        },
        GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
            commit('SET_SEARCH_VALUE_TO_VUEX', value)
        }
    },
    getters: {
        ELEMENTS(state) {
            return state.elements;
        },

        SEARCH_VALUE(state) {
            return state.searchValue;
        }
    },
});

export default  searchApi;