import { BRAND } from "../../config/brand";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1>
            {BRAND.tagline}
          </h1>

          <p>
            Discover handcrafted pieces designed to make every moment unforgettable.
          </p>


        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src={BRAND.heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;