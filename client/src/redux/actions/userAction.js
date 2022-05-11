import * as api from '../../api/index'
import { GET_FOLLOWINGLISTS } from '../constants/userConstant'

export const followingLists =  () => async (dispatch) => {
    try { 
        const {data} = await api.followingLists()
        
        dispatch({ type: GET_FOLLOWINGLISTS, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}