// store/menu.ts
import { ActionContext } from 'vuex';

// 定义 state 类型
interface MenuState {
  isCollapsed: boolean;
}

// 定义模块类型
interface MenuActionContext extends ActionContext<MenuState, unknown> {}

const state: MenuState = {
  isCollapsed: false,
};

const mutations = {
  toggleMenu(state: MenuState) {
    state.isCollapsed = !state.isCollapsed;
  },
};

const actions = {
  toggleMenu({ commit }: MenuActionContext) {
    commit('toggleMenu');
  },
};

const getters = {
  isMenuCollapsed(state: MenuState): boolean {
    return state.isCollapsed;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
