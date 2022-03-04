import { connect } from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromSongListAction, singleSongAction } from "../redux/actions";
import { Container, Row, Col } from "react-bootstrap";

const mapStateToProps = (state) => ({
  likedSongs: state.likes.favSong,
});

const mapDispatchToProps = (dispatch) => ({
  removeSongs: (song) => {
    dispatch(removeFromSongListAction(song));
  },
  setSingleSong: (singleSong) => {
    dispatch(singleSongAction(singleSong));
  },
});

const LikedSongs = ({ likedSongs, removeSongs, setSingleSong }) => {
  console.log("likesong", likedSongs);
  return (
    <Container>
          <h1 className="mb-3 text-light text-center"><strong>Favorite Song</strong></h1>
      <Row className="d-flex justify-content-center">
          
        <Col md={12}>
          {likedSongs &&
            likedSongs.map((song) => (
              <div className="py-3 trackHover">
                <span
                  className="card-title trackHover px-3"
                  onClick={() => setSingleSong(song)}
                  style={{ color: "white" }}
                >
                  {song.title}
                </span>
                <small className="duration" style={{ color: "white" }}>
                  {Math.floor(parseInt(song.duration) / 60)}:
                  {parseInt(song.duration) % 60 < 10
                    ? "0" + (parseInt(song.duration) % 60)
                    : parseInt(song.duration) % 60}
                  <span>
                    <i
                      class="ml-4 bi bi-heart-fill"
                      onClick={() => {
                        removeSongs(song);
                      }}
                    ></i>
                  </span>
                </small>
              </div>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LikedSongs);
