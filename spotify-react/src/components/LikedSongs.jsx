import { connect } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromSongListAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  likedSongs: state.likes.favSong,
});


const mapDispatchToProps =(dispatch)=> ({
    removeSongs:(song)=> {
        dispatch(removeFromSongListAction(song))
    }
})

const LikedSongs = ({ likedSongs, removeSongs }) => {
    console.log("likesong", likedSongs);
  return (
      <>
      {likedSongs &&
        likedSongs.map((song, i) => (
          <div id="favourite-songs-container" className="bg-wrapper px-4">
            <div className="row my-3">
              <div className="col-12 album-action-icons d-flex align-items-center">
                <i className="bi bi-play-circle-fill">
                  <div className="white-bg"></div>
                </i>
                <i className="bi bi-three-dots"></i>
                <RiDeleteBin6Line className="ml-auto" style={{ background: "#282C34", fontSize:"20px"}} onClick={() => {removeSongs(song)}}/>
              </div>
            </div>

            <div className="row light-gray-text">
              <div className="col-1">
                <p>#</p>
              </div>

              <div className="col-10">
                <p>{song.title}</p>
              </div>

              <div className="col-1">
                <p>
                  <i className="bi bi-clock"></i>
                </p>
              </div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
    </>

    
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);