import userApi from "@/service/user.js";

const user = {
  state: {
    isLogin: !!localStorage.getItem("token"),
    userId: "",
    userName: "",
    authTree: JSON.parse(localStorage.getItem("authTree")) || []
  },

  mutations: {
    SET_USER_INFO: (state, info) => {
      const { userId, userName, routes } = info;
      state = Object.assign(state, {
        isLogin: true,
        userId,
        userName,
        authTree: routes
      });
    },
    CLEAR_USER_INFO: state => {
      state.isLogin = false;
      state.userId = null;
      state.authTree = null;
    }
  },

  actions: {
    // 登录
    logIn({ commit }, data) {
      return userApi
        .login(data)
        .then(res => {
          const { code, token, routes } = res;
          if (code) {
            //登录成功
            commit("SET_USER_INFO", res);
            localStorage.setItem("token", token);
            localStorage.setItem("authTree", JSON.stringify(routes));
          }
          return res;
        })
        .catch(err => {
          return err;
        });
    },
    // 登出
    logOut({ commit }) {
      localStorage.clear();
      commit("CLEAR_USER_INFO");
    }
  },

  getters: {
    isLogin: state => state.isLogin,
    userId: state => state.userId,
    userName: state => state.userName,
    authTree: state => state.authTree
  }
};

export default user;
