import * as api from '../../api/index'
import { CREATE_POST, CREATE_POST_REQUEST, FETCH_USER_FEED } from '../constants/postConstant'

export const fetchNewfeeds =  () => async (dispatch) => {
    try {
        const  data  = await api.fetchNewfeeds()
        dispatch({ type: FETCH_USER_FEED, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (formData) => async (dispatch) => {
    try {

        dispatch({ type: CREATE_POST_REQUEST })

        const {data} = await api.createPost(formData)
        dispatch({ type: CREATE_POST, payload: data })
    } catch (error) {
        
    }
}
