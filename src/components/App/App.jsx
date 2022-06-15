import './App.css';
import { useState } from 'react';

import{Playlist, SearchBar, SearchResults} from '../index'

import Spotify from '../../util/Spotify';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  const [playlist, setPlaylist] = useState('My Playlist');

  const [playlistTracks, setPlaylistTracks] = useState([]);

  // ADD TRACK METHOD
  const addTrack = (track) => {
    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    setPlaylistTracks([track, ...playlistTracks])
  }

  //REMOVE TRACK METHOD
  const removeTrack = (trackId) => {
    setPlaylistTracks(prev => prev.filter(track => (track.id !== trackId)))
  };

  //UPDATE PLAYLIST NAME METHOD
  const updatePlaylistName = (name) => {
    setPlaylist(name)
  }

  //SAVE PLAYLIST SPOTIFY
  const savePlaylist = () => {
    const trackUri = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(playlist, trackUri).then(() => {
      setPlaylist('New Playlist');
      setPlaylistTracks([])
    })
  };

  //INPUT SEARCH
  const search = (term) => {
    Spotify.search(term).then(searchResults => {
      setSearchResults(searchResults)
    })
    }


  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search}/>

        <div className="App-playlist">
          <SearchResults
          searchResults = {searchResults}
          onAdd = {addTrack}/>

          <Playlist
          playlistName = {playlist}
          playlistTracks = {playlistTracks}
          onRemove={removeTrack}
          onNameChange={updatePlaylistName}
          onSave={savePlaylist}
          />
          {/* {searchResults.map((track) => <h1 key={track.id}>{track.name}</h1> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
