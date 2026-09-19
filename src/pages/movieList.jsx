import { useEffect, useState } from "react";
import { FaSearchengin } from "react-icons/fa";

import MoviesCard from "../components/moviesCard";
import MovieDetailsModal from "../components/MovieDetailsModal";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  // Selected movie for modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      // If search box is empty
      if (!search.trim()) {
        const res = await fetch("https://api.tvmaze.com/shows");
        const data = await res.json();

        setMovies(data);
        return;
      }

      // Search movie
      const res = await fetch(
        `https://api.tvmaze.com/search/shows?q=${search}`
      );

      const data = await res.json();

      // Show only the first matching movie
      if (data.length > 0) {
        setMovies([data[0].show]);
      } else {
        setMovies([]);
      }
    };

    getMovies();
  }, [search]);

  // Open modal
  const handleSeeDetails = (movie) => {
    setSelectedMovie(movie);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="mx-auto w-[95%] max-w-7xl py-8">

      {/* Search Box */}
      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-xl">
          <FaSearchengin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search for a movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input w-full pl-11"
          />
        </div>
      </div>

      {/* Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold">
          {search ? "Search Result" : "Trending Movies"}
        </h2>

        <p className="mt-2 text-gray-500">
          {search
            ? `Showing result for "${search}"`
            : `Explore our collection of ${movies.length} movies and shows`}
        </p>
      </div>

      {/* Movie Grid */}
      {movies.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {movies.map((movie) => (
            <MoviesCard
              key={movie.id}
              movie={movie}
              onSeeDetails={handleSeeDetails}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center">
          <h3 className="text-xl font-semibold">
            No movie found
          </h3>

          <p className="mt-2 text-gray-500">
            Try searching with another movie name.
          </p>
        </div>
      )}

      {/* Movie Details Modal */}
      <MovieDetailsModal
        movie={selectedMovie}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default MovieList;