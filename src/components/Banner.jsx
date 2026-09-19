import { Link } from "react-router";
import heroImg from "/src/assets/hero.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            DISCOVER MOVIES
          </h1>

          <p className="mb-5">
            Explore and discover your favorite
            <br />
            movies from around the world.
          </p>

          <Link to="/movie-list" className="btn btn-primary">
            Explore Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;