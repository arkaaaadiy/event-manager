import Axios from "axios"
import {
    AUTH_LOGOUT,
    AUTH_SUCCESS
} from "./ActionType"

export function auth(email, password, isLogin) {
    return async dispatch => {
        const authData = {
            email,
            password,
            returnSectureToken: true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBr6tg27M3PQOCj4D_jNvaZrghAvQ7IySQ'
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBr6tg27M3PQOCj4D_jNvaZrghAvQ7IySQ'
        }

        const response = await Axios.post(url, authData)
        const data = response.data

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000)

        localStorage.setItem('token', data.idToken)
        localStorage.setItem('userId', data.localId)
        localStorage.setItem('expirationDate', expirationDate)

        dispatch(authSuccess(data.idToken, data.localId))
        dispatch(autoLogout(3600))
    }
}

export function authSuccess(token, localId) {
    return {
        type: AUTH_SUCCESS,
        token,
        localId
    }
}

export function autoLogout(time) {
    return dispatch => {
        setTimeout(() => {
            logout()
        }, time * 1000 * 24);
    }
}

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    localStorage.removeItem('expirationDate')
    return {
        type: AUTH_LOGOUT
    }
}
export function autoLogin() {
    return dispatch => {
        return new Promise(function (resolve, reject) {
                const token = localStorage.getItem('token')
                const userId = localStorage.getItem('userId')
                if (!token) {
                    dispatch(logout())
                    reject()
                } else {
                    const expirationDate = new Date(localStorage.getItem('expirationDate'))
                    if (expirationDate <= new Date()) {
                        dispatch(logout())
                        reject()
                    } else {
                        dispatch(authSuccess(token, userId))
                        dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
                        resolve()
                    }
                }
            })
        }
    }    