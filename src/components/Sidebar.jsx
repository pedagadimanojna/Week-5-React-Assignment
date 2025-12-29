import { LayoutDashboard, Calendar, Kanban, BarChart, Table } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 h-screen fixed">
      <h1 className="text-xl font-bold p-4 dark:text-white">🎬 Movie Admin</h1>

      <nav className="space-y-2 p-2">
        <Link to="/" className="flex gap-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700">
          <LayoutDashboard /> Dashboard
        </Link>
        <Link to="/calendar" className="flex gap-2 p-2">
          <Calendar /> Calendar
        </Link>
        <Link to="/kanban" className="flex gap-2 p-2">
          <Kanban /> Kanban
        </Link>
        <Link to="/analytics" className="flex gap-2 p-2">
          <BarChart /> Analytics
        </Link>
        <Link to="/tables" className="flex gap-2 p-2">
          <Table /> Tables
        </Link>
      </nav>
    </div>
  );
}
