import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import ThemeToggle from './components/ThemeToggle';
import Discover from './pages/Discover';
import MusicPlayer from './components/MusicPlayer';

const App = () => (
  <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex">
    <Sidebar />

    <main className="flex-1 p-6 pb-32">
      {/* Top bar */}
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>

      <TopPlay />
      <Discover />
    </main>

    <MusicPlayer />
  </div>
);

export default App;
