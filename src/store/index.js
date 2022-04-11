import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
import Vuex from 'vuex'
import Vue from 'vue'




const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

const vuexLocal = new createPersistedState({
  reducer(val) {
    return {
      fileType: val.fileType,
    }
  }
})


const store = new Vuex.Store({
  plugins: [vuexLocal],
  getters,
  modules
})

export default store
