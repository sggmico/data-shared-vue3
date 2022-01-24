async function sleep(duration = 1000) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve()
        },duration)
    })
}

export async function login(params) {
    await sleep()
    const { username, password} = params || {}
    const userInfo = {
        username: 'sgg',
        password: '123123'
    }
    if(username === 'sgg' && password === '123123') {
        window.localStorage.setItem('user.info', JSON.stringify(userInfo))
        return userInfo
    }
    return null;
}

export async function logout() {
    await sleep()
    window.localStorage.removeItem('user.info')
    return null;
}

export async function getUserInfo() {
    await sleep()
    const userInfoStr = window.localStorage.getItem('user.info')
    if(userInfoStr) {
        return JSON.parse(userInfoStr)
    }
    return null;
}

export default {
    login,
    logout,
    getUserInfo
}