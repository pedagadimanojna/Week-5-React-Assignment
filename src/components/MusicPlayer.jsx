import { useSelector } from 'react-redux';

const MusicPlayer = () => {
  const { activeSong } = useSelector((state) => state.player);

  if (!activeSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black p-4">
      <p className="text-white">{activeSong.title}</p>
      <audio controls src={activeSong.audio} className="w-full" />
    </div>
  );
};

export default MusicPlayer;
