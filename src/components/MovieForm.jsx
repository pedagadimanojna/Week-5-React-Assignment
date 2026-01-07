import { useState } from "react";

export default function MovieForm({ initialData, onSubmit, onCancel }) {
  const safeData = initialData || {};

  const [form, setForm] = useState({
    name: safeData.name || "",
    ticketsSold: safeData.ticketsSold || "",
    revenue: safeData.revenue || "",
    date: safeData.date || "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.ticketsSold || !form.revenue || !form.date) {
      setError("All fields are required");
      return;
    }

    onSubmit({
      ...safeData,
      ...form,
      ticketsSold: Number(form.ticketsSold),
      revenue: Number(form.revenue),
    });
  };

  return (
    <form className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-3" onSubmit={handleSubmit}>
      <h3 className="font-bold dark:text-white">
        {safeData.id ? "Edit Movie" : "Add Movie"}
      </h3>

      {error && <p className="text-red-500">{error}</p>}

      <input
        name="name"
        placeholder="Movie Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        name="ticketsSold"
        type="number"
        placeholder="Tickets Sold"
        value={form.ticketsSold}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        name="revenue"
        type="number"
        placeholder="Revenue"
        value={form.revenue}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <div className="flex gap-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
