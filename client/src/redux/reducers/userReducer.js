import { GET_FOLLOWINGLISTS } from "../constants/userConstant";



export const userReducer = (state={ followingLists: [] }, action) => {
    switch (action.type){
        case GET_FOLLOWINGLISTS:
            return {
                ...state,
                followingLists:  action.payload.following
            }
        default:
            return state
    }
}