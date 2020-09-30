import axios from 'axios';

const API_URL = 'https://menage-time.herokuapp.com/';

let config = {
    headers: {
        'Authorization': `${localStorage.getItem('user')}`,
    },
}

export default {
    mutations: {
        
    },

    actions: {
        GET_USER: () => {
            return axios
                .get(API_URL + 'usuario', config)
                .then(response => {
                    return Promise.resolve(response);
                });
        },
        POST_USER: (payload) => {
            console.log(payload);
            return axios
                .post(API_URL + 'usuario', {
                    status: payload.status,
                    tipoTarefa: payload.tipoTarefa,
                    descricao: payload.descricao,
                    tempoInicial: payload.tempoInicial,
                    tempoFinal: payload.tempoFinal,
                }, config)
                .then(response => {
                    return Promise.resolve(response);
                });
        },
        PUT_USER: ({ commit }, payload) => {
            console.log(payload)
            axios.put(API_URL + 'usuario', {
                id: payload.id,
                status: payload.status,
                tipoTarefa: payload.tipoTarefa,
                descricao: payload.descricao,
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
        DELETE_USER: ({ commit }, payload) => {
            console.log(payload.id)
            axios.delete(API_URL + 'usuario' + payload.id, config)
                .then(response => {
                    if (response) {
                        commit(response);
                    }
                    return Promise.resolve(response);
                });
        }
    }

}