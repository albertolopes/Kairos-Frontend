import axios from 'axios';

// const API_URL = 'https://menage-time.herokuapp.com/';
const API_URL = 'http://localhost:9000/';

let config = {
    headers: {
        'Authorization': `${localStorage.getItem('user')}`,
    },
}

export default {
    mutations: {
        userRequest(state, user) {
            state.status = { loggingIn: true };
            state.user = user;
        },
        userSuccess(state, user) {
            state.status = { loggedIn: true };
            state.user = user;
        },
        userFailure(state) {
            state.status = {};
            state.user = null;
        }
    },

    actions: {
        GET_USER: () => {
            return axios
            .get(API_URL + 'usuarios', config)
            .then(response => {
                return Promise.resolve(response);
            });
        },
        PUT_USER: ({ commit }, payload) => {
            axios.put(API_URL + 'usuarios', {
                id: payload.id,
                nome: payload.nome,
                email: payload.email,
                senha: payload.senha,
            }, config)
            .then(response => {
                if (response) {
                    commit('userSuccess', response);
                }
                return Promise.resolve(response);
            });
        }
    }

}