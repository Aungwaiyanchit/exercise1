import { LOGIN } from '../constants/authConstant'

export const authReducer = (state={}, action) => {
    switch (action.type){
        case LOGIN:
            localStorage.setItem('token', action.payload.token)

            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        default:
            return state
    }
}