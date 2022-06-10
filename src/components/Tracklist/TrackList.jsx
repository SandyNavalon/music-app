import React from "react";
import Track from "../Track/Track";
import './TrackList.scss';

const TrackList = (props) => {

    // console.log(props);

    return(
        <div className="TrackList">
            {props.tracks?.map((track) =>
                {return (<Track track = {track} key={track.id}/>)}
            )}
        </div>
    )
}

export default TrackList;