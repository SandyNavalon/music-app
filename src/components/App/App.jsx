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

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults = {searchResults}/>
          <Playlist />
          {/* {searchResults.map((track) => <h1 key={track.id}>{track.name}</h1> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
}

export default App;
