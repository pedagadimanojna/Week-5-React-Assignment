const movies = [
  { id: 1, name: "Inception", tickets: 120 },
  { id: 2, name: "Interstellar", tickets: 90 },
];

export default function Tables() {
  return (
    <div className="ml-64 p-6">
      <table className="w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            <th>Name</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(m => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.tickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
