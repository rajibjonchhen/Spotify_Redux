import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { singleSongAction } from "../redux/actions";
import { addSongToLikesAction, removeFromSongListAction } from "../redux/actions";
const mapStateToProps = (state) => ({
  favSong:state.likes.favSong
})

const mapDispatchToProps = (dispatch) => ({
  setSingleSong : (singleSong) => {
    dispatch(singleSongAction(singleSong))
  },
  addTofavorite:(song)=> {
    dispatch(addSongToLikesAction(song))
  },
  removeFromSong:(song)=> {
    dispatch(removeFromSongListAction(song))
  }
})

  
  
  
  const Song = ({ track, addTofavorite, removeFromSong, setSingleSong, favSong }) => {
    const [isLiked, setIsLiked] = useState(false)
    useEffect(()=> {
      let like = favSong.find(song => song.id === track.id) ? true : false
      console.log(like);
      setIsLiked(like)
    },[])
    return(
    <div className="p-3 trackHover w-100 d-flex justify-content-between" >
      <div className="d-flex justify-content-between w-100" >
      <span className="card-title trackHover px-3" onClick={() => setSingleSong(track)} style={{ color: "white" }}>
        {track.title}
      </span>
      <small className="duration" style={{ color: "white" }}>
        {Math.floor(parseInt(track.duration) / 60)}:
        {parseInt(track.duration) % 60 < 10
          ? "0" + (parseInt(track.duration) % 60)
          : parseInt(track.duration) % 60}
    
      </small>
    </div>
    <span style={{display:!isLiked ? "block":"none"}}> <i class="text-white ml-4 bi bi-heart" onClick={()=> {addTofavorite(track); setIsLiked(true)}}></i></span>
    <span style={{display:isLiked ? "block":"none"}}><i class="text-white  ml-4 bi bi-heart-fill" onClick={()=> {removeFromSong(track); setIsLiked(false)}}></i></span>
  </div>
        )
  };

export default  connect(mapStateToProps, mapDispatchToProps)(Song);
