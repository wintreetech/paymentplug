import { NavLink } from "react-router-dom";


const HeroBannerThree = () => {
  return (
    <div className="hero-banner-three pt-180 md-pt-130 pb-120 xl-pb-50 position-relative">
      <div className="container position-relative">
        <div className="row justify-content-between">
          <div className="col-lg-4 col-md-5 wow fadeInLeft">
            <h1 className="hero-heading font-magnita">All Banking Needs</h1>
            <p className="text-lg pt-35 lg-pt-30 pb-35 lg-pb-20">
              Digital agency with top rated talented people provide
            </p>
            <NavLink to="/contact" className="btn-ten tran3s">
              Get Started
            </NavLink>
          </div>
          <div className="col-xl-3 col-md-4 wow fadeInRight">
            <div className="right-widget sm-mt-40 ps-xxl-5 ps-xl-0 ps-lg-4">
              <div>
                <img
                  src="/assets/images/assets/screen_06.svg"
                  alt="screen"
                  className="lazy-img screen_01"
                />
              </div>
              <p className="lh-base text-md mt-70 lg-mt-30 mb-60 lg-mb-30">
                <span className="fw-500 text-dark text-decoration-underline">
                  Over 90+
                </span>{" "}
                countries using our service without any hassle.
              </p>
              <div className="row align-items-center">
                <div className="col-xl-5 col-md-4">
                  <img src="/assets/images/icon/icon_31.svg" alt="icon" className="lazy-img icon" />
                </div>
                <div className="col-xl-7 col-md-8">
                  <div className="main-count text-dark fw-500">
                    <span className="counter">1.75</span>m
                  </div>
                  <div>Total Active user</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img-wrapper">
        <img
          src="/assets/images/assets/businessman.png"
          alt="businessman"
          className="lazy-img m-auto"
        />
        <img src="/assets/images/assets/round_shape.png" alt="shape" className="lazy-img round-bg" />
      </div>
    </div>
  );
};

export default HeroBannerThree;
