import { NavLink } from "react-router-dom";


const FancyBannerSix = () => {
  return (
    <div className="fancy-banner-six text-center position-relative pt-110 lg-pt-60 pb-110 lg-pb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-9 m-auto">
            <h2 className="text-white fw-bold">
              Apply for loan with low interest.
            </h2>
            <p className="text-white text-xl pt-10 pb-20">
              Apply for loan & get up to $20million with low interest
            </p>
            <NavLink to="/contact"
              className="btn-seventeen d-inline-flex align-items-center tran3s"
            >
              <span className="text">Get Started</span>
              <i className="bi bi-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerSix;
