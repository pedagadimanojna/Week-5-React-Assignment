import { useSelector } from 'react-redux';

const SongDetails = () => {
  const { activeSong } = useSelector((state) => state.player);

  if (!activeSong) return <p>Select a song</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{activeSong.title}</h1>
      <p>{activeSong.artist}</p>
    </div>
  );
};

export default SongDetails;
