import React from "react";
import './Playlist.scss';

import TrackList from "../Tracklist/TrackList";

const Playlist = (props) => {

    return(
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList tracks = {props.playlistTracks} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={true}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;