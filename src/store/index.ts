import { createStore } from 'vuex'
import menu from './modules/menu'
import user from './modules/user'
export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    menu,
    user
  },
})
