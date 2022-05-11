import { CREATE_POST, CREATE_POST_REQUEST, FETCH_USER_FEED } from "../constants/postConstant"

const initialState = { isLoading: false, posts: [] }
export const postReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCH_USER_FEED:
            return {
                ...state,
                isLoading: false,
                posts: [...state.posts, ...action.payload.data ],
            }
        case CREATE_POST_REQUEST:
            return {
                ...state, 
                isLoading: true
            }
        case CREATE_POST:
            return{
                ...state,
                isLoading: false,
                posts: [action.payload, ...state.posts]
            }
        default:
            return state
    }
}