import React from 'react'
import AlbumCard from './AlbumCard'
import { Row, Col } from 'react-bootstrap'
import {connect} from 'react-redux'
import { getSongsAction } from '../redux/actions'

const mapStateToProps =(state)=> ({
  songs:state.song.songs,
  searchQuery:state.song.searchQuery,
  isError : state.song.isError,
  isLoading : state.song.isLoading,
  homePageSongs : state.song.homePageSongs

})

const mapDispatchToProps =(dispatch)=> ({
  getSongs:(artistName, category)=> {
    dispatch(getSongsAction(artistName, category))
  }
})
 
class Home extends React.Component {
  // state = {
  //   rockSongs: [],
  //   popSongs: [],
  //   hipHopSongs: [],
  // }

  // rockArtists = [
  //   'queen',
  //   'u2',
  //   'thepolice',
  //   'eagles',
  //   'thedoors',
  //   'oasis',
  //   'thewho',
  //   'bonjovi',
  // ]

  // popArtists = [
  //   'arianagrande',
  //   'maroon5',
  //   'onerepublic',
  //   'coldplay',
  //   'katyperry',
  // ]

  // hipHopArtists = ['eminem', 'snoopdogg', 'lilwayne', 'drake', 'kanyewest']

  handleArtist = async (artistName, category) => {
    await this.props.getSongs(artistName, category)
    if(this.props.isLoading && this.props.isError){
      
    }

  }

  componentDidMount = async () => {
    // let rockRandomArtists = []
    // let popRandomArtists = []
    // let hipHopRandomArtists = []

    // while (rockRandomArtists.length < 4) {
    //   let artist =
    //     this.rockArtists[Math.floor(Math.random() * this.rockArtists.length)]
    //   if (!rockRandomArtists.includes(artist)) {
    //     rockRandomArtists.push(artist)
    //   }
    // }

    // while (popRandomArtists.length < 4) {
    //   let artist =
    //     this.popArtists[Math.floor(Math.random() * this.popArtists.length)]
    //   if (!popRandomArtists.includes(artist)) {
    //     popRandomArtists.push(artist)
    //   }
    // }

    // while (hipHopRandomArtists.length < 4) {
    //   let artist =
    //     this.hipHopArtists[
    //       Math.floor(Math.random() * this.hipHopArtists.length)
    //     ]
    //   if (!hipHopRandomArtists.includes(artist)) {
    //     hipHopRandomArtists.push(artist)
    //   }
    // }
    // for (let k = 0; k < popRandomArtists.length; k++)
      // await this.handleArtist(popRandomArtists[k], 'popSongs')
      await this.handleArtist("pop", 'Pop Songs')

    // for (let j = 0; j < rockRandomArtists.length; j++)
      // await this.handleArtist(rockRandomArtists[j], 'rockSongs')
      await this.handleArtist('rock', 'Rock Songs')
      
      // for (let l = 0; l < hipHopRandomArtists.length; l++)
      // await this.handleArtist(hipHopRandomArtists[l], 'hipHopSongs')
      await this.handleArtist("hit", 'Hit Songs')
      
      await this.handleArtist("classic", 'Classic Songs')
  }

  render() {
    return (
      <Col className='col-12 col-md-9 offset-md-3 mainPage'>
        <Row>
          <div className='col-9 col-lg-11 mainLinks d-none d-md-flex'>
            <div>TRENDING</div>
            <div>PODCAST</div>
            <div>MOODS AND GENRES</div>
            <div>NEW RELEASES</div>
            <div>DISCOVER</div>
          </div>
        </Row>
        { this.props.songs.length>0? (
          <Row>
            <Col xs={10}>
              <div id='searchResults'>
                <h2>Search Results</h2>
                <Row className='row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3'>
                  {this.props.songs.map((song) => (
                    <AlbumCard song={song} key={song.id} />
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        ) : (this.props.homePageSongs?.reverse().map(list =>
          <>
            <Row>
              <Col xs={10}>
                <div id='rock'>
                  <h2>{list.category}</h2>
                  <Row
                    className='display-cards row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3'
                    id='rockSection'
                  >
                    {list.homeSongs.reverse().map((song) => (
                      <AlbumCard song={song} key={song?.id} />
                    ))}
                  </Row>
                </div>
              </Col>
            </Row>
            </>)
        )}
  
      </Col>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
