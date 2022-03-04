import { initialState } from '../store'
import { ACTIONS } from '../actions'

export const favoriteSongReducer =(state = initialState.likes, action)=> {
    switch(action.type){
       case ACTIONS.ADD_SONG_TO_LIKES:
           return {
               ...state,
               favSong:[...state.favSong, action.payload]
           }
        case ACTIONS.REMOVE_FROM_LIKES:
            return {
                ...state,
                favSong:state.favSong.filter((song, i)=> song.id !== action.payload)
            }
        default: return state   
    }
    
}