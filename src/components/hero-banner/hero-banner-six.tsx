import { NavLink } from "react-router-dom";
// internal
import PartnersSliderOne from "../partners/partners-slider-one";


const HeroBannerSix = () => {
  return (
    <div className="hero-banner-six pt-170 md-pt-110 position-relative">
      <div className="container position-relative">
        <div className="row justify-content-between">
          <div className="col-md-6 wow fadeInLeft">
            <div className="pt-20 pb-50">
              <h1 className="hero-heading fw-bold">
                Delivers more, not just marketing.
              </h1>
              <p className="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
                Unlock your business growth potential with a marketing agency
                expertise.
              </p>
              <div className="d-flex flex-wrap">
                <NavLink to="/contact"
                  className="btn-eighteen tran3s me-4 mt-10"
                >
                  Contact
                </NavLink>
                <NavLink to="/contact" className="btn-nineteen tran3s mt-10">
                  Let’s Get Started
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-md-flex justify-content-end wow fadeInRight">
            <div className="media-wrapper position-relative ms-lg-5">
              <img
                src="/assets/images/assets/screen_22.svg"
                alt="screen"
                className="lazy-img shapes screen_01"
              />
              <img
                src="/assets/images/assets/screen_23.png"
                alt="screen"
                className="lazy-img shapes screen_02"
              />
              <img
                src="/assets/images/shape/shape_43.svg"
                alt="shape"
                className="lazy-img shapes bg-shape"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="partner-logo-one pt-60 md-pt-50">
              <p className="fw-500 text-dark mb-40">
                <span className="text-decoration-underline">Join 27,000+</span>{" "}
                companies who’ve reached{" "}
              </p>
              <PartnersSliderOne />
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/shape_42.svg"
        alt="shape"
        className="lazy-img shapes shape_01"
      />
    </div>
  );
};

export default HeroBannerSix;
