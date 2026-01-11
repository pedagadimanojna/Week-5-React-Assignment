import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setActiveSong } from "../features/playerSlice";
import SongCard from "../components/SongCard";
import { fetchSongsByGenre } from "../services/musicApi";

const Discover = () => {
  const dispatch = useDispatch();

  // restore genre from localStorage or default to All
  const [genre, setGenre] = useState(
    localStorage.getItem("genre") || "All"
  );
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchSongsByGenre(genre).then(setSongs);
    localStorage.setItem("genre", genre);
  }, [genre]);

  return (
    <>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="mb-4 p-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        <option>All</option>
        <option>Pop</option>
        <option>Rock</option>
      </select>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={() => {
              dispatch(setActiveSong(song));
              localStorage.setItem(
                "lastSong",
                JSON.stringify(song)
              );
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Discover;
