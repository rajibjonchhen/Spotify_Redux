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
        case ACTIONS.SINGLE_SONG: 
            return {
                ...state,
                singleSong:action.payload
        }

        case ACTIONS.SET_HOME_PAGE_SONGS: 
        return {
            ...state,
            homePageSongs: [...state.homePageSongs, action.payload]
        }

        default:return state
    }
}
export default songsReducer