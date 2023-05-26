//搭建一个token的接口
export interface UserState {
  token: string;
  name: string;
  avatar: string;
  introduction: string;
  roles: string[];
  email: string;
  phone: string;
  status: string;
  createTime: string;
  lastLoginTime: string;
  lastUpdateTime: string;
  id: string;
  [key: string]: any;
}
const state: UserState = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  email: '',
  phone: '',
  status: '',
  createTime: '',
  lastLoginTime: '',
  lastUpdateTime: '',
  id: ''
};

const mutations = {
  SET_TOKEN: (state: UserState, token: string) => {
    state.token = token;
  },
  SET_NAME: (state: UserState, name: string) => {
    state.name = name;
  },
  SET_ORIGINAL_DATA: (state: UserState, userData: UserState) => {
    Object.assign(state, userData);
  }
};

const actions = {
  setToken({ commit }: any, token: string) {
    commit('SET_TOKEN', token);
  },
  setName({ commit }: any, name: string) {
    commit('SET_NAME', name);
  },
  setOriginalData({ commit }: any, userData: UserState) {
    commit('SET_ORIGINAL_DATA', userData);
  }
};

const getters = {
  token: (state: UserState) => state.token,
  name: (state: UserState) => state.name,
  roles: (state: UserState) => state.roles
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
