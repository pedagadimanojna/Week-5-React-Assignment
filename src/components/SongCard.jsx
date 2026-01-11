const SongCard = ({ song, onPlay }) => {
  return (
    <div className="bg-gray-800 p-4 rounded">
      <div className="w-full h-40 bg-gray-300 flex items-center justify-center text-gray-500">
        300 × 300
      </div>

      <h3 className="mt-2 font-bold">{song.title}</h3>
      <p className="text-sm text-gray-400">{song.artist}</p>

      <button
        onClick={onPlay}
        className="text-green-400 mt-2"
      >
        ▶ Play
      </button>
    </div>
  );
};

export default SongCard;
