import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import Kanban from "./pages/Kanban";
import Analytics from "./pages/Analytics";
import Tables from "./pages/Tables";

import ThemeProvider from "./context/ThemeContext";
import MovieProvider from "./context/MovieContext";

export default function App() {
  return (
    <ThemeProvider>
      <MovieProvider>
        <BrowserRouter>
          <Sidebar />
          <div className="ml-64">
            <Topbar />
            <div className="p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/tables" element={<Tables />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </MovieProvider>
    </ThemeProvider>
  );
}
