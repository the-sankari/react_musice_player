import { useMusicPlayer } from "../hooks/useMusicPlayer";

const TrackList = () => {
  const music = useMusicPlayer();
  return (
    <>
      <h1>Track List</h1>
      {music.trackList.map((track, index) => (
        <div key={`${track}_${index}`}>
          <button onClick={() => music.playTrack(index)}>
            {music.isPlaying && music.currentTrackIndex === index
              ? "pause"
              : "play"}
          </button>
          <h2>{track.name}</h2>
        </div>
      ))}
    </>
  );
};

export { TrackList };
