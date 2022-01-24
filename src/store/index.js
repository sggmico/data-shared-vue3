import { createStore } from 'vuex'
import userStore from './userStore.js'


export default createStore({
    modules: {
        userStore
    }
})