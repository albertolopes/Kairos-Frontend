import axios from 'axios';

const API_URL = 'https://menage-time.herokuapp.com/';

// const API_URL = 'http://localhost:9000/'

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
      return axios
      .post(API_URL + 'login', {
        nome: payload.nome,
        senha: payload.senha
      })
      .then(response => {
        if (response) {
          localStorage.setItem('user', response.data)
          commit('loginSuccess', response);          
        }
        return Promise.resolve(response);
      });
    }, 

    LOGOUT({ commit }) {
      localStorage.removeItem('user');
      commit('logout')  
    },  

    FORGOT: ({ commit },payload) => {
      commit('loginRequest', payload);
      return axios
      .post(`/auth/forgot`, payload)
      .then(response => {
        return response.data;
      });
    },
    
    REGISTER: ({ commit }, { nome, email, senha }) => {
      commit('loginRequest', { nome, email, senha });
      axios.post(`usuarios`, {
          nome, 
          email, 
          senha
      })
      .then((status, response) => {
          if(status === 200){
            return response.data;
          }                
      });
    },

    REFRESH_TOKEN: () => {
      return new Promise((resolve, reject) => {
        axios
          .post(`token/refresh`)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
  } 
}
