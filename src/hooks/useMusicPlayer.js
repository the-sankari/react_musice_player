import { useContext } from "react";
import MusicContext from "../constexts/MusicContext";

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext);
  // Function 1: togglePlay
  const togglePlay = () => {
    if (state.isPlaying) {
      setState({ ...state, isPlaying: false });
      state.audioPlayer.pause();
    } else {
      setState({ ...state, isPlaying: true });
      state.audioPlayer.play();
    }
  };

  const playTrack = async (index) => {
    if (index === state.currentTrackIndex) {
      togglePlay();
    } else {
      await state.audioPlayer.pause();
      state.audioPlayer = new Audio(state.tracks[index].file);
      state.audioPlayer.play();
      setState({ ...state, currentTrackIndex: index, isPlaying: true });
    }
  };

  const playNextTrack = () => {
    let newIndex = null;
    state.currentTrackIndex === state.tracks.length - 1
      ? (newIndex = 0)
      : (newIndex = state.currentTrackIndex + 1);
    playTrack(newIndex);
  };

  const playPreviousTrack = () => {
    let newIndex = null;
    state.currentTrackIndex === 0
      ? (newIndex = state.tracks.length - 1)
      : (newIndex = state.currentTrackIndex - 1);
    playTrack(newIndex);
  };

  return {
    togglePlay,
    playTrack,
    playNextTrack,
    playPreviousTrack,
    currentTrackIndex: state.currentTrackIndex,
    currentTrackName:
      state.currentTrackIndex != null &&
      state.tracks[state.currentTrackIndex].name,
    trackList: state.tracks,
    isPlaying: state.isPlaying,
  };
};

export { useMusicPlayer };
