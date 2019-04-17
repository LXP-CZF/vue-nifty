
const users = {
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  },

  mutations: {
      // 修改token，并将token存入localStorage
    changeLogin (state, user) {
        state.Authorization =user;
        localStorage.setItem('Authorization', user);
       
        
      }
   
  },

  actions: {
    changeLogin:({commit})=>commit('changeLogin'),
  },
  }

export default users
