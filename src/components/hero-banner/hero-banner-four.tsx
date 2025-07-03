import { NavLink } from "react-router-dom";

const HeroBannerFour = () => {
  return (
    <div className="hero-banner-four pt-150 sm-pt-130 pb-225 lg-pb-150 position-relative">
      <div className="container position-relative">
        <div className="row">
          <div className="col-xxl-9 col-md-8">
            <h1 className="hero-heading text-white position-relative wow fadeInUp">
              Payment Orchestration <span>platform built for all</span>
            </h1>
            <div className="row">
              <div className="col-xl-8 col-lg-9">
                <p
                  className="text-xl text-white pt-40 md-pt-20 pb-35 md-pb-30 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  A white-label gateway that connects merchants to banks with
                  smart, global payment orchestration.
                </p>
              </div>
            </div>
            <div
              className="d-lg-inline-flex align-items-center wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <NavLink to="/contact" className="btn-twelve tran3s me-3 me-xl-5">
                Contact Sales
              </NavLink>
              <div className="d-flex align-items-center md-mt-20">
                <img
                  src="/assets/images/assets/screen_12.png"
                  alt="screen"
                  className="lazy-img avatar"
                />
                <div className="ps-3">
                  <strong className="text-white d-block text-xl">1.2m+</strong>
                  <span className="text-white opacity-75">
                    Payment Flows Managed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="media-wrapper wow fadeInUp">
        <img
          src="/assets/images/assets/screen_13.png"
          alt="screen"
          className="lazy-img w-100"
        />
      </div>
      <img
        src="/assets/images/shape/shape_14.svg"
        alt="shape"
        className="lazy-img shapes shape_01"
      />
      <img
        src="/assets/images/assets/screen_21.svg"
        alt="screen"
        className="lazy-img shapes shape_02 wow fadeInUp"
      />
    </div>
  );
};

export default HeroBannerFour;
