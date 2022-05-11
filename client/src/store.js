import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers/index'
import jwt_decode from 'jwt-decode'

const token = localStorage.getItem('token') ? localStorage.getItem('token') : null

const authState = {
    token: token,
    isAuthenticate: false,
    user: null
}

if(token){
    try {
        authState['user'] = jwt_decode(token)
        authState['isAuthenticate'] = true
    } catch (error) {
        authState['token'] = null
        localStorage.removeItem('token')
    }
}
const initialState = {
    auth: authState
}
const middleware = [thunk]
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store