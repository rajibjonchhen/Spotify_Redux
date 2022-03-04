import React from "react";
import { connect } from "react-redux";
import { singleSongAction } from "../redux/actions";

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => ({
  setSingleSong : (singleSong) => {
    dispatch(singleSongAction(singleSong))
  }
})

const Song = ({ track, setSingleSong }) => (
  <div className="py-3 trackHover" onClick={() => setSingleSong(track)}>
    <span className="card-title trackHover px-3" style={{ color: "white" }}>
      {track.title}
    </span>
    <small className="duration" style={{ color: "white" }}>
      {Math.floor(parseInt(track.duration) / 60)}:
      {parseInt(track.duration) % 60 < 10
        ? "0" + (parseInt(track.duration) % 60)
        : parseInt(track.duration) % 60}
    </small>
  </div>
);

export default  connect(mapStateToProps, mapDispatchToProps)(Song);
