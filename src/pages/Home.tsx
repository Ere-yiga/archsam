import { Link } from "react-router";
import "./Home.css";
/* import { services, projects } from "../data/content"; */
import { projects } from "../data/content";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <p className="hero__welcome">Welcome to</p>
          <h1>SAMARCH</h1>
          <h2>Architectural Firm and Construction Services</h2>
          <p className="hero__sub">
            Sustainable and state of the art designs and construction jobs.
          </p>
          <Link to="/services" className="btn">
            Explore Our Services →
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Our Services</h2>
        <div className="grid grid--projects">
          {projects.slice(0, 3).map((p) => (
            <div
              key={p.title}
              className="card card--image card--tall"
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <span className="card__label">{p.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="section section--dark about">
        <div className="about__text">
          <h2>About SAMARCH</h2>
          <p>
            SAMARCH Architectural Firm and Construction Services is a
            professional firm committed to delivering innovative, sustainable
            and world-class architectural designs and construction services.
          </p>
          <Link to="/about" className="btn">
            Learn More →
          </Link>
        </div>
        <div
          className="about__image"
          style={{ backgroundImage: `url(${projects[1].image})` }}
        />
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="section">
        <h2 className="section__title">Our Projects</h2>
        <div className="grid grid--projects">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card card--image card--tall"
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <span className="card__label">{p.title}</span>
            </div>
          ))}
        </div>
        {" "}
        <div className="center">
          <Link to="/projects" className="btn">
            View All Projects →
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="section section--grey">
        <h2 className="section__title">What Our Clients Say</h2>
        <blockquote className="testimonial">
          “SAMARCH delivered beyond our expectations. Their professionalism and
          attention to detail are second to none.”
          <cite>– Dr. Chinwe Dan-echems</cite>
        </blockquote>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta">
        <h2>Let's Build Your Dream Together!</h2>
        <p>Contact us today for your architectural and construction needs.</p>
        <Link to="/quote" className="btn">
          Get a Quote →
        </Link>
      </section>
    </>
  );
}

export default Home;
