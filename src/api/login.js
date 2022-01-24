async function sleep(duration = 1000) {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve
        },duration)
    })
}

export async function login(username, password) {
    await sleep()
    const userInfo = {
        username: 'admin',
        password: '123123'
    }
    if(username === 'admin' && password === '123123') {
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
    return;
}