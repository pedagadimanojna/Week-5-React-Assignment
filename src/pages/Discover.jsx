import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveSong } from '../features/playerSlice';
import { fetchSongsByGenre } from '../services/musicApi';
import SongCard from '../components/SongCard';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Discover = () => {
  const dispatch = useDispatch();
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchSongsByGenre()
      .then((data) => {
        setSongs(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {songs.map((song) => (
        <SongCard
          key={song.id}
          song={song}
          onPlay={() => dispatch(setActiveSong(song))}
        />
      ))}
    </div>
  );
};

export default Discover;
