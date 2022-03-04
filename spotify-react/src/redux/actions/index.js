export const ACTIONS= {
    GET_SONGS:"GET_SONGS",
    GET_ARTIST:"GET_ARTIST",
    GET_ALBUMS:"GET_ALBUMS",
    SET_CATEGORY:"SET_CATEGORY",
    SEARCH_QUERY :"SEARCH_QUERY"
}

export const searchQueryAction =(searchQuery)=>({
  type:ACTIONS.SEARCH_QUERY,
  payload:searchQuery
})

export const getSongsAction =(artist_name, category)=> {
    return async(dispatch)=> {
        try {
            let response = await fetch(
              'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
              artist_name,
              {
                method: 'GET',
                headers: new Headers({
                  'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
                  'X-RapidAPI-Key':
                    '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0',
                }),
              }
            )
            if(response.ok){
              let result = await response.json()
              let songInfo = result.data
              console.log("Result", songInfo);
              // this.setState({
              //   [category]: [...this.state[category], songInfo[0]],
              // })
              dispatch({
                type:ACTIONS.GET_SONGS,
                payload:songInfo
              })
              dispatch({
                type: ACTIONS.SET_CATEGORY,
                payload: category
              })
            }
          } catch (err) {
            console.log(err)
          }
    }
}
