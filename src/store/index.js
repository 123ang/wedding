import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  key: 'wed-pro',
  storage: sessionStorage, 
  reducer: (state) => ({ language: state.language }),
});

export default createStore({
  state: {
    host_url: "https://backend.wed-pro.com/api",
    is_login: false,
    remember_boolean: false,
    remember_password: "",
    remember_username: "",
    language: "en",
    user_id: "",
    username: "",
    payment_id: "",
    booking_id: "",
  },
  getters: {
  },
  mutations: {
    HostUrl(state,host_url) {
      state.host_url = host_url
    },
    IsLogin(state, is_login) {
      state.is_login = is_login
    },
    Language(state,data){
      state.language = data
    },
    Username(state, data) {
      state.username = data
    },
    UserID(state, data) {
      state.user_id = data
    },
    BookingID(state, data) {
      state.booking_id = data
    },
    RememberBoolean(state,data){
      state.remember_boolean = data
    },
    RememberUsername(state, data){
      state.remember_username = data
    },
    RememberPassword(state,data){
      state.remember_password = data
    }
    
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('Language', language);
    },
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
