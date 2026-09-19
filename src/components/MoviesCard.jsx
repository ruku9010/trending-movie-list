import { FaStar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";

const MoviesCard = ({ movie, onSeeDetails }) => {
  return (
    <div className="group overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      
      {/* Movie Image */}
      <div className="relative overflow-hidden">
        <img
          src={movie.image?.medium}
          alt={movie.name}
          className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="mb-3 truncate text-lg font-bold">
          {movie.name}
        </h3>

        <div className="mb-5 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span>{movie.rating?.average || "N/A"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaRegCalendarDays />
            <span>
              {movie.premiered?.slice(0, 4) || "N/A"}
            </span>
          </div>
        </div>

        {/* See Details */}
        <button
          onClick={() => onSeeDetails(movie)}
          className="btn btn-primary w-full"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default MoviesCard;