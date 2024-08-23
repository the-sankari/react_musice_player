import { useState } from "react";
import "./App.css";
import { PlayerControls } from "./components/PlayerControls";
import { TrackList } from "./components/TrackList";
import MusicContext from "./constexts/MusicContext";
import sinister from "./assets/sinister.mp3";
import stomp from "./assets/stomp.mp3";
import underwater from "./assets/underwater.mp3";

const App = () => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    currentTrackIndex: 0,
    isPlaying: false,
    tracks: [
      {
        id: 1,
        name: "sinister music",
        file: sinister,
      },
      {
        id: 2,
        name: "stomp music",
        file: stomp,
      },
      {
        id: 3,
        name: "underwater",
        file: underwater,
      },
    ],
  });
  return (
    <MusicContext.Provider value={[state, setState]}>
      <header>
        <h1>Music Player</h1>
      </header>

      <div>
        <TrackList />
        <PlayerControls />
      </div>
    </MusicContext.Provider>
  );
};

export default App;
