import { ACTIONS } from "../actions";
import { initialState } from "../store";

const albumsReducer = (state=initialState.album, action)=> {
    switch(action.type){
        default:return state
    }
}
export default albumsReducer