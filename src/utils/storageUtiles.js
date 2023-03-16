import store from 'store'
const USER_KEY = 'loginUser_key'
const storageUtil = {
    saveUser (user) {
        store.set(USER_KEY, user)
    },

    getUser() {
        return store.get(USER_KEY)
    },

    removeUser () {
        store.remove(USER_KEY)
    }

}

export default storageUtil
