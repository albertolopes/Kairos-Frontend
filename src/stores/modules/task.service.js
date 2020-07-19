import axios from 'axios';

const API_URL = 'https://menage-time.herokuapp.com/';

let config = {
    headers: {
        'Authorization': `${localStorage.getItem('user')}`
    }
  }
  

// const API_URL = 'http://localhost:9000/'

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
            console.log(payload)
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
        }
    }

}
