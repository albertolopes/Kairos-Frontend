import axios from 'axios';

const API_URL = 'https://menage-time.herokuapp.com/';

export default{
  mutations: {
      loginRequest(state, user) {
          state.status = { loggingIn: true };
          state.user = user;
      },
      loginSuccess(state, user) {
          state.status = { loggedIn: true };
          state.user = user;
      },
      loginFailure(state) {
          state.status = {};
          state.user = null;
      },
      logout(state) {
          state.status = {};
          state.user = null;
      }
  },
  actions: {
    LOGIN: ({ commit },payload) => {
      commit('loginRequest', { payload });
      return axios
      .post(API_URL + 'login', {
        nome: payload.nome,
        senha: payload.senha
      })
      .then(response => {
        if (response) {
          console.log(response.headers)
          localStorage.setItem('user', JSON.stringify(response.header));
          commit('loginSuccess', response.headers);          
        }
        return Promise.resolve(response.headers);
      });
      }, 
    LOGOUT({ commit }) {
      localStorage.removeItem('user');
      commit('logout')  
    },  
    FORGOT: ({ commit },payload) => {
          console.log(payload);
        commit('loginRequest', payload);
        return axios
        .post(`/auth/forgot`, payload)
        .then(response => {
          return response.data;
        });
      },
    REGISTER: ({ commit }, { nome, email, senha }) => {
      commit('loginRequest', { nome, email, senha });
      axios
        .post(`usuarios`, {
          nome, 
          email, 
          senha
        })
        .then((status, response) => {
            if(status === 200){
              return response.data;
            }                
        });
      }
    },
}
