import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {
  const music = useMusicPlayer();
  return (
    <>
      <div>
        <p>{music.currentTrackName}</p>
      </div>
      <div>
        <button onClick={() => music.playPreviousTrack()}>Prev</button>
        <button onClick={() => music.togglePlay()}>
          {music.isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={() => music.playNextTrack()}>Next</button>
      </div>
    </>
  );
};

export { PlayerControls };
