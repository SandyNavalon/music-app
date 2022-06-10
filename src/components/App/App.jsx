import './App.css';
import{Playlist, SearchBar, SearchResults} from '../index'
import { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState(
    [
      {name: '1', artist: '1', album: '1', id:'1'},
      {name: '2', artist: '2', album: '2', id:'2'},
      {name: '3', artist: '3', album: '3', id:'3'},
      {name: '4', artist: '4', album: '4', id:'4'},
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
        </div>
      </div>
    </div>
  );
}

export default App;
