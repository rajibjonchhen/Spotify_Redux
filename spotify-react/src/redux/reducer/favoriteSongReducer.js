import { initialState } from '../store'
import { ACTIONS } from '../actions'

export const favoriteSongReducer =(state = initialState.likes, action)=> {
    switch(action.type){
       case ACTIONS.ADD_SONG_TO_LIKES:
           return {
               ...state,
               songs:[...state.songs, action.payload]
           }
        default: return state   
    }
    
}