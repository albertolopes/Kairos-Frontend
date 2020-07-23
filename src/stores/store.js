import Vue from "vue";
import Vuex from "vuex"

import Auth from './modules/auth.service'
import Task from './modules/task.service'
import User from './modules/user.service'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth: Auth,
        task: Task,
        user: User
    }
})