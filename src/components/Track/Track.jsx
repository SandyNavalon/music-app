import React from "react";
import './Track.scss';

const Track = () => {

    function renderAction(isRemoval) {

        if(isRemoval){
            return <button className="Track-action">-</button>
        } else{
            return <button className="Track-action">+</button>
        }
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3>track name will go here</h3>
                <p> track artist will go here | track album will go here </p>
            </div>
            {renderAction}
        </div>
    )
}

export default Track;