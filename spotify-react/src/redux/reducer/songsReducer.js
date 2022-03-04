import { ACTIONS } from "../actions";
import { initialState } from "../store";

const songsReducer = (state=initialState.song, action)=> {
    switch(action.type){
        default:return state
    }
}
export default songsReducer