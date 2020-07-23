import axios from 'axios';

// const API_URL = 'https://menage-time.herokuapp.com/';

const API_URL = 'http://localhost:9000/'

let config = {
    headers: {
        'Authorization': `${localStorage.getItem('user')}`,
    },
}

export default {
    mutations: {
        taskRequest(state, data) {
            state.data = data;
        },
        taskSuccess(state, data) {
            state.data = data;
        },
        taskFailure(state, data) {
            state.data = data;
        }
    },

    actions: {
        GET_TASKS: () => {
            return axios
                .get(API_URL + 'tarefas', config)
                .then(response => {
                    return Promise.resolve(response);
                });
        },
        POST_TASK: ({ commit }, payload) => {
            console.log(payload)
            return axios
                .post(API_URL + 'tarefas', {
                    status: payload.status,
                    tipoTarefa: payload.tipoTarefa,
                    descricao: payload.descricao,
                    tempoInicial: payload.tempoInicial,
                    tempoFinal: payload.tempoFinal,
                }, config)
                .then(response => {
                    if (response) {
                        commit('taskSuccess', response.data);
                    }
                    return Promise.resolve(response.data);
                });
        },
        PUT_TASK: ({ commit }, payload) => {
            console.log(payload)
            return axios.put(API_URL + 'tarefas', {
                id: payload.id,
                status: payload.status,
                tipoTarefa: payload.tipoTarefa,
                descricao: payload.descricao,
                tempoInicial: payload.tempoInicial,
                tempoFinal: payload.tempoFinal,
            }, config)
                .then(response => {
                    if (response) {
                        commit('taskSuccess', response.data);
                    }
                    return Promise.resolve(response.data);
                });
        },
        DELETE_TASK: ({ commit }, payload) => {
            console.log(payload.id)
            return axios.delete(API_URL + 'tarefas/' + payload.id, config)
                .then(response => {
                    commit('taskSuccess', response);
                    return Promise.resolve(response);
                });
        }
    }

}