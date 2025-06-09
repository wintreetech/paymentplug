
import { NavLink } from 'react-router-dom';


const FancyBannerFour = () => {
  return (
    <div className="fancy-banner-four position-relative mt-150 lg-mt-80 pt-80 lg-pt-50 wow fadeInUp">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-6 order-lg-last">
            <div className="pb-120 xl-pb-100 lg-pb-50 ps-xl-5">
              <div className="title-one mb-30">
                <h2 className="text-dark">Download our bank Mobile App.</h2>
              </div>
              <p className="mb-40">
                Control of all your banking needs needs anywhere, anytime
              </p>
              <ul className="style-none">
                <li>Compare different insurance Item</li>
                <li>Buy, store and share all your policies online</li>
                <li>Email & Live chat</li>
              </ul>
              <div className="d-sm-flex align-items-center platform-button-group mt-50 lg-mt-30">
                <a
                  href="#"
                  className="d-flex align-items-center windows-button"
                >
                  <img
                    src="/assets/images/icon/playstore.svg"
                    alt="playstore"
                    className="lazy-img icon"
                  />
                  <div>
                    <span>Get it on</span>
                    <strong>Google play</strong>
                  </div>
                </a>
                <NavLink to="#" className="d-flex align-items-center ios-button">
                  <img
                    src="/assets/images/icon/apple.svg"
                    alt="apple"
                    className="lazy-img icon"
                  />
                  <div>
                    <span>Download on the</span>
                    <strong>App store</strong>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="/assets/images/assets/screen_11.png"
              alt="screen"
              className="lazy-i"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FancyBannerFour;
