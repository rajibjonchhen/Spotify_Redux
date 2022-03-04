import { ACTIONS } from "../actions";
import { initialState } from "../store";

const songsReducer = (state=initialState.song, action)=> {
    switch(action.type){
        case ACTIONS.GET_SONGS:
            return {
                ...state,
                songs:action.payload
            }
        case ACTIONS.SET_CATEGORY:
            return {
                ...state,
                category:[...state.category, action.payload]
            }

        case ACTIONS.SEARCH_QUERY: 
            return {
                ...state,
                searchQuery:action.payload
            }
        default:return state
    }
}
export default songsReducer