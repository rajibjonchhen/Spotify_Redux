import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import albumsReducer from '../reducer/albumsReducer'
import artistsReducer from '../reducer/artistsReducer'
import songsReducer from '../reducer/songsReducer'

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeThatAlwaysWorks = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export const initialState = {
    song:{
        songs:[],
        category:'',
        searchQuery:'',
        singleSong:{},
        homePageSongs:[],
        isLoading:true,
        isError:false,
    },
    album:{
        albums:[]
    },
    artist:{
        artists:[]
    }
    

}


// **************** CONNECTING REDUCERS ****************

const multiReducer = combineReducers({
    song: songsReducer,
    album: albumsReducer,
    artist:artistsReducer
})

// *************** CONFIGURATION STOREE HERE *****************

let configStore = createStore(
    multiReducer,
    initialState,
    composeThatAlwaysWorks(applyMiddleware(thunk))
  )

  export default configStore