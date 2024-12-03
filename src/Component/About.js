import React from "react";
import "../Component/About.css";

const About = () => {
  return (
    <div className="app-container">
      <div className="hero-section">
        <h1>Our Mission is to Reduce Carbon Emissions</h1>
        <p className="hero-description">
          Combining science, expertise, and transparency, we are creating a
          community built around one simple vision: give people the power and
          confidence to band together and reduce the carbon pollution that
          causes climate change.
        </p>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="images/photo1.jpg"
              class="d-block w-100 h-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="header">How We Do It</h5>
              <p>
                We go above and beyond, holding the highest standards for our
                projects and their effectiveness. By doing so, we allow anyone
                to confidently and effectively fight against climate change.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/photo4.png"
              class="d-block w-100 h-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="header">Who We Are</h5>
              <p>
                Meet our crew of experts, advisors, and activists who work
                tirelessly to help Earth.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="images/photo3.png"
              class="d-block w-100 h-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5 className="header">How We're Sparking Change</h5>
              <p>Learn more about how we’re making a difference.</p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default About;
