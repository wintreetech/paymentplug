import { NavLink } from "react-router-dom";


const FancyBannerThree = () => {
  return (
    <>
      <div className="fancy-banner-three position-relative wow fadeInUp">
        <div className="container">
          <div className="row align-content-center">
            <div className="col-lg-8 col-md-9">
              <div className="title-one mb-20 lg-mb-10">
                <h2 className="text-white">
                  Want to Chat? Feel free to Contact our Team.
                </h2>
              </div>
              <p className="text-lg m0 text-white opacity-75">
                If you have anything in mind just contact us with our expert.
              </p>
            </div>
            <div className="col-lg-4 col-md-3">
              <NavLink to="/contact"
                className="quote-btn tran5s rounded-circle d-flex align-items-center justify-content-center ms-auto"
              >
                <img src="/assets/images/icon/icon_30.svg" alt="icon" className="lazy-img" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FancyBannerThree;
