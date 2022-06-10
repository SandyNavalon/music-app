import React from "react";
import TrackList from "../Tracklist/TrackList";
import './SearchResults.scss';

const SearchResults = (searchResults) => {

    return(
    <div className="SearchResults">
        <h2>Results</h2>
        <TrackList {...searchResults}/>
    </div>
    )
}

export default SearchResults;