import Sidebar from './components/Sidebar';
import TopPlay from './components/TopPlay';
import ThemeToggle from './components/ThemeToggle';
import Discover from './pages/Discover';
import MusicPlayer from './components/MusicPlayer';

const App = () => (
  <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
    <Sidebar />

    {/* IMPORTANT CHANGE IS pb-32 */}
    <main className="flex-1 p-6 pb-32">
      <ThemeToggle />
      <TopPlay />
      <Discover />
    </main>

    <MusicPlayer />
  </div>
);

export default App;
