import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    spots:null
  },
  getters: {
  },
  mutations: {
    setUser(state,payload) {
      state.user = payload
    }, 
    setSpots(state,payload) {
      state.spots = payload
    } 
  },
  actions: {
    async getData({commit}){
      try{
        let fetchInfo = await fetch('https://api.sharenet.co.za/api/v1/px2/spots')
      let data = await fetchInfo.json()
      console.log(data);
      let { user, spots} = data
      
      commit('setUser',user)
      commit('setSpots',spots)
      }
      catch (error){
        console.log(error);
      }
     
     
    }
  },
  modules: {
  }
})
