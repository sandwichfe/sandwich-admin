import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"dsadsa"
  },

    //getters 当前getters对象（可对对象进行二次更改），用于将getters下的其他getter拿来用,组件通过this.$store.getters.fullInfo拿来使用
  getters: {
    currentToken: (state) => {
      return state.token;
    }
  },


  mutations: {
    //这里是set方法，比如对该数据的修改、增加、删除等等。
    //组件调用this.$store.commit('SET_TOKEN','new token')挂载方法
    setNewToken(state,newToken){//aaNumber名称随意起
      state.token = newToken
    }
  },

  actions: {
  },

  modules: {
  }

})
