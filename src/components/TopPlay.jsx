import { useSelector } from 'react-redux';

const TopPlay = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="mb-4">
      {activeSong && (
        <p className="text-green-400">
          Now Playing: {activeSong.title}
        </p>
      )}
    </div>
  );
};

export default TopPlay;
