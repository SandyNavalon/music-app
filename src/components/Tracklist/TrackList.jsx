import React from "react";
import Track from "../Track/Track";
import './TrackList.scss';

const TrackList = (searchResults) => {

    const tracks = searchResults;

    console.log(searchResults);

    return(
        <div className="TrackList">
            {/* {tracks.map((track) =>
                <Track track = {track} key={track.id}/>
            )} */}
        </div>
    )
}

export default TrackList;