import { LOGIN } from '../constants/authConstant'
import * as api from '../../api/index'

export const login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(formData)
        dispatch({ type: LOGIN, payload: data })
        navigate('/')
    } catch (error) {
        console.log(error.message);
    }
}