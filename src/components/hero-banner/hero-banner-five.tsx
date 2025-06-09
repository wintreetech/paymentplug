import { NavLink } from "react-router-dom";

const HeroBannerFive = () => {
  return (
    <div className="hero-banner-five">
      <div className="bg-wrapper position-relative pt-85 sm-pt-50 pb-120 xl-pb-100 sm-pb-10">
        <div className="container position-relative">
          <div className="row justify-content-between">
            <div className="col-lg-6 col-md-8 wow fadeInLeft">
              <h1 className="hero-heading font-magnita">
                More <br /> than a Digital Agency.
              </h1>
              <p className="text-lg text-dark pt-60 lg-pt-40 pb-30 lg-pb-10 sm-pb-30">
                Digital agency with top rated talented people provide quality
                services with babun.
              </p>
              <div className="d-md-inline-flex flex-wrap align-items-center">
                <div className="me-5 mt-15">
                  <NavLink to="/contact" className="btn-sixteen tran3s">
                    Get Started
                  </NavLink>
                </div>
                <div className="rating sm-mt-20">
                  <h3 className="fw-bold text-dark">A+ Rating</h3>
                  <p className="m0">By Trusted Pilot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="media-wrapper ps-5 pe-5 d-flex align-items-end">
          <img
            src="/assets/images/assets/businessman_01.png"
            alt="image"
            className="lazy-img me-auto ms-auto"
          />
          <img
            src="/assets/images/assets/screen_18.png"
            alt="image"
            className="lazy-img shapes shape_01"
          />
          <img
            src="/assets/images/assets/sticker.png"
            alt="image"
            className="lazy-img shapes shape_02"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBannerFive;
