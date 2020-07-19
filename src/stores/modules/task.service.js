import axios from 'axios';

const API_URL = 'https://menage-time.herokuapp.com/';

// const API_URL = 'http://localhost:9000/'

let config = {
    headers: {
        'Authorization': `${localStorage.getItem('user')}`,
    },
}

export default {
    mutations: {
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
            return axios
                .post(API_URL + 'tarefas', {
                    status: payload.status,
                    descricao: payload.descricao,
                    tipoTarefa: payload.tipoTarefa,
                    tempoInicial: payload.tempoInicial,
                    tempoFinal: payload.tempoFinal,
                }, config)
                .then(response => {
                    if (response) {
                        commit(response);
                    }
                    return Promise.resolve(response);
                });
        },
        PUT_TASK: ({ commit }, payload) => {
            console.log(payload)
            axios.put(API_URL + 'tarefas', {
                id: payload.id,
                status: payload.status,
                descricao: payload.descricao,
                tipoTarefa: payload.tipoTarefa,
                tempoInicial: payload.tempoInicial,
                tempoFinal: payload.tempoFinal,
            }, config)
                .then(response => {
                    if (response) {

                        commit(response);
                    }
                    return Promise.resolve(response);
                });
        },
        DELETE_TASK: ({ commit }, payload) => {
            console.log(payload.id)
            axios.delete(API_URL + 'tarefas/' + payload.id, config)
                .then(response => {
                    if (response) {
                        commit(response);
                    }
                    return Promise.resolve(response);
                });
        }
    }

}
