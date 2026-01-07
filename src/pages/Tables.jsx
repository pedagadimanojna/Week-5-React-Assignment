import { useContext, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieForm from "../components/MovieForm";
import Notification from "../components/Notification";

export default function Tables() {
  const { movies, addMovie, updateMovie, notification, setNotification } =
    useContext(MovieContext);

  const [editingMovie, setEditingMovie] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 3;

  const filtered = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginated = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <div className="ml-64 p-6">
      <Notification notification={notification} clear={() => setNotification(null)} />

      <div className="flex justify-between mb-4">
        <input
          placeholder="Search movie..."
          className="p-2 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => {
            setEditingMovie(null);
            setShowForm(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Movie
        </button>
      </div>

      {showForm && (
        <MovieForm
          initialData={editingMovie}
          onSubmit={(movie) => {
            editingMovie ? updateMovie(movie) : addMovie(movie);
            setShowForm(false);
          }}
          onCancel={() => setShowForm(false)}
        />
      )}

      <table className="w-full bg-white dark:bg-gray-800 mt-4">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tickets</th>
            <th>Revenue</th>
            <th>Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {paginated.map((m) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.ticketsSold}</td>
              <td>${m.revenue}</td>
              <td>{m.date}</td>
              <td>
                <button
                  onClick={() => {
                    setEditingMovie(m);
                    setShowForm(true);
                  }}
                  className="text-blue-600"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
        <button disabled={page * pageSize >= filtered.length} onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
