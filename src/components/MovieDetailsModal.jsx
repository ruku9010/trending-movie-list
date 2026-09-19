
import { FaStar } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black"
          aria-label="Close modal"
        >
          <IoClose size={24} />
        </button>

        {/* Movie Image */}
        <div className="h-72 w-full overflow-hidden sm:h-96">
          <img
            src={movie.image?.original}
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Movie Details */}
        <div className="p-6 sm:p-8">

          {/* Movie Title */}
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            {movie.name}
          </h2>

          {/* Rating & Release */}
          <div className="mb-6 flex justify-around items-center gap-5">
            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span className="font-medium">
                Rating: {movie.rating?.average || "N/A"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaRegCalendarDays />
              <span className="font-medium">
                Release: {movie.premiered || "N/A"}
              </span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h3 className="mb-2 text-lg font-semibold">
              Overview:
            </h3>

            <div
              className="leading-7 text-gray-600"
              dangerouslySetInnerHTML={{
                __html:
                  movie.summary || "No description available.",
              }}
            />
          </div>

          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="btn btn-error text-white"
            >
              <IoClose size={20} />
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;