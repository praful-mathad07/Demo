import React from "react";

const Projects = () => {
  return (
    <div className="app-container">
      <div className="hero-section">
        <h1>Scientifically Verified Carbon Projects and Pricing</h1>
        <p className="hero-description">
          Cool Effect triple verifies the science behind every carbon project we
          represent. When you buy carbon offsets from us, we offer full pricing
          transparency with over 90% of every dollar going directly to the
          carbon projects.
        </p>
      </div>
      <div className="row">
        <div class="col-sm-4">
          <div class="card">
            <img src="images/chile.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bhopal-Gas Buster</h5>
              <p class="card-text">
                ODS: Technology Based Avoidance and Reduction
              </p>

              <p> Rs 150/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/gas-buster"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="images/fresh-air.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Delhi-Breath Of Fresh Air</h5>
              <p class="card-text">
                Cookstoves: Technology-based Avoidance/Reduction
              </p>
              <p> Rs 100/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/breath-of-fresh-air-guatemala"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="images/trees.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Tamilnadu-The Giving Trees</h5>
              <br></br>
              <p class="card-text">Tree Planting: Nature-based Removal</p>
              <p> Rs 180/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/breath-of-fresh-air-guatemala"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="images/bright idea.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">A Bright Idea</h5>
              <p class="card-text">Renewable Energy: Technology-based</p>
              <p> Rs 280/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/renewable-energy"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="images/sea.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Mayanmar-Sea of Change</h5>

              <p class="card-text">Blue Carbon: Nature-based Removal</p>
              <p> Rs 450/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/sea-of-change"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img src="images/soil.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Karnataka-The Dirt on Dirt</h5>

              <p class="card-text pb-2">
                Soil Enrichment: Nature Based Removal
              </p>
              <p> Rs 45/tonnes</p>
              <a
                href="https://www.cooleffect.org/project/the-dirt-on-dirt"
                class="btn btn-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
