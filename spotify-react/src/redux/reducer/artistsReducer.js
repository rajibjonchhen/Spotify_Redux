import { ACTIONS } from "../actions";
import { initialState } from "../store";

const artistsReducer = (state=initialState.artist, action)=> {
    switch(action.type){
        default:return state
    }
}
export default artistsReducer