import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state/state";
import apiRequests from './actions/api-requests'
import commonActions from './actions/actions'
import mutations from "./mutations/mutations";
import getters from "./getters/getters";


const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex);

let store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,

});

export default store;

