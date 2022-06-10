import React from "react";
import TrackList from "../Tracklist/TrackList";
import './SearchResults.scss';

const SearchResults = (props) => {

    return(
    <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks = {props.searchResults}/>
    </div>
    )
}

export default SearchResults;