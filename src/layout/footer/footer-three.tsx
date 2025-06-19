import { NavLink } from "react-router-dom";
// internal
import FooterSocial from "./footer-social";

const FooterThree = ({ style_2 }: { style_2?: boolean }) => {
  return (
    <div className="footer-three">
      <div className="container">
        <div className="inner-wrapper position-relative">
          <div className="row justify-content-between">
            <div className="col-lg-4 footer-intro mb-30">
              <div
                className={`round-bg ${
                  style_2 ? "color-two" : ""
                } rounded-circle text-center d-flex flex-column align-items-center justify-content-center`}
              >
                <div className="logo mb-15">
                  <NavLink to="/">
                    <img src="/assets/images/logo/logo_02.svg" alt="logo" />
                  </NavLink>
                </div>
                <p className="lh-sm mb-45 lg-mb-30">
                  2190 Urban Terrace, Mirpur, <br />
                  Licensed in 50 states.
                </p>
                <p className="m0">
                  <a href="#">+757 699-4478</a>
                </p>
              </div>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/pricing">Pricing Plan</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/service-v1">Our services</NavLink>
                </li>
                <li>
                  <NavLink to="/project-v2">Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to="/service-v2">Features</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/about-us-2">About us</NavLink>
                </li>
                <li>
                  <NavLink to="/blog-grid">Blogs</NavLink>
                </li>
                <li>
                  <NavLink to="/faq">FAQ’s</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li>
                  <NavLink to="/contact">Terms of use</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Terms & conditions</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Privacy</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Cookie policy</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="/assets/images/shape/shape_36.svg"
            alt="shape"
            className="lazy-img shapes shape_01"
          />
          <img
            src={
              style_2
                ? "/assets/images/shape/shape_39.svg"
                : "/assets/images/shape/shape_37.svg"
            }
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">
          <div className="row">
            <div className="col-xl-4 col-lg-3 order-lg-3 mb-15">
              <ul className="style-none d-flex align-items-center justify-content-center justify-content-lg-end social-icon">
                {/* social link */}
                <FooterSocial />
                {/* social link */}
              </ul>
            </div>
            <div className="col-xl-4 col-lg-6 order-lg-2 mb-15">
              <ul className="style-none bottom-nav d-flex justify-content-center order-lg-last">
                <li>
                  <NavLink to="/contact">Privacy & Terms</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Cookies</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-xl-4 col-lg-3 order-lg-1 mb-15">
              <div className="copyright text-center text-lg-start order-lg-first">
                Copyright @{new Date().getFullYear()} babun inc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterThree;
