import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../features/playerSlice";

const MusicPlayer = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  // ✅ RESTORE LAST PLAYED SONG
  useEffect(() => {
    const savedSong = localStorage.getItem("lastSong");
    if (savedSong) {
      dispatch(setActiveSong(JSON.parse(savedSong)));
    }
  }, [dispatch]);

  if (!activeSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 flex justify-between items-center">
      <div>
        <p className="font-bold">{activeSong.title}</p>
        <p className="text-sm text-gray-400">{activeSong.artist}</p>
      </div>

      <button
        onClick={() => dispatch(playPause(!isPlaying))}
        className="bg-green-500 px-4 py-2 rounded"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <audio src={activeSong.url} autoPlay={isPlaying} />
    </div>
  );
};

export default MusicPlayer;
