import { createStore } from 'vuex'
import axios from 'axios'

interface State {
  data: any;
  error: string | null;
}

export default createStore<State>({
  state: {
    data: null,
    error: null,
  },
  getters: {
    getData: (state) => state.data,
    getError: (state) => state.error,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get('https://api.example.com/data');
        commit('setData', response.data);
      } catch (error: any) {
        commit('setError', error.message);
      }
    },
  },
  modules: {
  }
})
