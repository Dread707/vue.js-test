import axios from "axios";

export default {
    SEARCH_ELEMENTS_FROM_API({commit}, value) {
        commit('SET_SEARCH_VALUE_TO_VUEX', value)
        axios('https://api.github.com/search/repositories?q=' + value, {
            method: "GET"
        })
            .then((elements) => {
                commit('SET_ELEMENTS_TO_STATE', elements.data);
                return elements;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
    }
}