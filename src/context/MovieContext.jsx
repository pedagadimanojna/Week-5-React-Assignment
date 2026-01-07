import { createContext, useState } from "react";
import { movies as initialMovies } from "../data/tableData";

export const MovieContext = createContext();

export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState(initialMovies);
  const [notification, setNotification] = useState(null);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
    setNotification({ type: "success", message: "Movie added successfully" });
  };

  const updateMovie = (updatedMovie) => {
    setMovies(
      movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
    setNotification({ type: "success", message: "Movie updated successfully" });
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, updateMovie, notification, setNotification }}
    >
      {children}
    </MovieContext.Provider>
  );
}
