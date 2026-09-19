import heroImg from "/src/assets/hero.jpg";

const Banner = () => {
  return (
    <>
      <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      `url(${heroImg})`,
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold">DISCOVER MOVIES</h1>
      <p className="mb-5">
        Explore and discover your favorite<br></br>movies from around the world.
      </p>
      <a href="http://localhost:5173/movie-list"><button className="btn btn-primary">Explore Now</button></a>
    </div>
  </div>
</div>
    </>
  );
};

export default Banner;
