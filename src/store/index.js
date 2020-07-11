import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { permission, user},
  // 全局定义getters
  getters: {
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    token: state => state.user.token
  }
})

export default store