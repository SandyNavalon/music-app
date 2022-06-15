import React from "react";
import './Track.scss';

const Track = (props) => {
    const { track, onRemove } = props;

    const handleRemoveClick = () => {
        onRemove(track.id)
    }

    function renderAction() {
        if(props.isRemoval){
            return <button className="Track-action" onClick={handleRemoveClick}>-</button>
        } else{
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }

    const addTrack = () => {
        props.onAdd(props.track);
    }

    function removeTrack() {
        props.onRemove(props.track);
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>{props.track.name}</h3>
                <p> {props.track.artist} | {props.track.album} </p>
            </div>
            {renderAction()}
        </div>
    )
}

export default Track;