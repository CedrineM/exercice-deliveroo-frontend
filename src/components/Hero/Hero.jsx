import "./Hero.css";

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="container">
        <section className="resto-info">
          <div>
            <h1>{data.restaurant.name}</h1>
            <p>{data.restaurant.description}</p>
          </div>
          <div className="col-img">
            <img src={data.restaurant.picture} alt="Image de brunch" />
          </div>
        </section>
      </div>
    </section>
  );
};
export default Hero;
