import React from "react";
import './Playlist.scss';

import TrackList from "../Tracklist/TrackList";

const Playlist = () => {

    return(
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList />
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    )
}

export default Playlist;