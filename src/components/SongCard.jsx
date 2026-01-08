const SongCard = ({ song, onPlay }) => (
  <div className="bg-gray-800 p-4 rounded hover:bg-gray-700">
    <img
      src={song.image}
      alt={song.title}
      className="rounded"
    />
    <h3 className="mt-2 font-bold">{song.title}</h3>
    <p className="text-sm text-gray-400">{song.artist}</p>
    <button
      className="mt-2 text-green-400"
      onClick={() => onPlay(song)}
    >
      ▶ Play
    </button>
  </div>
);

export default SongCard;
