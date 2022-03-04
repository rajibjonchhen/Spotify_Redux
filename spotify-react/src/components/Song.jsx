import React from "react";
import { connect } from "react-redux";
import { addSongToLikesAction } from "../redux/actions";

const mapStateToProps =()=> ({})

const mapDispatchToProps =(dispatch)=> ({
  addTofavorite:(song)=> {
    dispatch(addSongToLikesAction(song))
  }
})


const Song = ({ track, addTofavorite }) => (
  <div className="py-3 trackHover">
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    <span><i class="ml-4 bi bi-heart" onClick={addTofavorite(track.title)}></i></span>
    </small>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Song);
