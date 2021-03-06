import './App.css';
import{Playlist, SearchBar, SearchResults} from '../index'
import { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState(
    [
      {name: 'name1', artist: 'artist1', album: 'album1', id:'1'},
      {name: 'name2', artist: 'artist2', album: 'album2', id:'2'},
      {name: 'name3', artist: 'artist3', album: 'album3', id:'3'},
      {name: 'name4', artist: 'artist4', album: 'album4', id:'4'},
    ]
  );

  const [playlist, setPlaylist] = useState('My Playlist');

  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {name: 'playlist-name1', artist: 'playlist-artist1', album: 'playlist-album1', id:'10'},
      {name: 'playlist-name2', artist: 'playlist-artist2', album: 'playlist-album2', id:'20'},
      {name: 'playlist-name3', artist: 'playlist-artist3', album: 'playlist-album3', id:'30'},
      {name: 'playlist-name4', artist: 'playlist-artist4', album: 'playlist-album4', id:'40'},
    ]
  );

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
  };

  //INPUT SEARCH
  const searchInput = (term) => {
    console.log(term);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={searchInput}/>

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
