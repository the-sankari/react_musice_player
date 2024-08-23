import { useContext } from "react";
import MusicContext from "../constexts/MusicContext";

const useMusicePlayer = () => {
  const [state, setState] = useContext(MusicContext);
// Function 1: togglePlay
  const togglePlay = () => {
    if (state.isPlaying) {
      setState({ ...state, isPlaying: false });
      state.audioPlaying.pause();
    }else{
        setState({ ...state, isPlaying: true });
        state.audioPlaying.play();
    }
  };
  return {
    togglePlay,
  };
};

export { useMusicePlayer };
