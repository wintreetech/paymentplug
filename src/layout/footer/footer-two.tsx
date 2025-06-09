import { NavLink } from 'react-router-dom';
// internal
import FooterSocial from './footer-social';

// types
type IProps = {
  bg?:boolean
}
const FooterTwo = ({bg=true}:IProps) => {
  return (
    <div className={`footer-two ${bg?'':'no-bg'}`}>
    <div className="container">
      <div className="bg-wrapper position-relative">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-3 col-lg-4 footer-intro mb-30">
              <div className="logo mb-35 md-mb-20">
                <NavLink to="/">
                  <img src="/assets/images/logo/logo_02.svg" alt="logo"/>
                </NavLink>
              </div> 
              <p className="lh-sm mb-40 md-mb-20">
                2190 Urban Terrace, Mirpur,  link Licensed in 50 states.
              </p>
              {/* social link */}
              <ul className="style-none d-flex align-items-center social-icon">
                <FooterSocial/>
              </ul>
              {/* social link */}
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Links</h5>
              <ul className="footer-nav-link style-none">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/pricing">Pricing Plan</NavLink></li>
                <li><NavLink to="/about-us">About us</NavLink></li>
                <li><NavLink to="/service-v1">Our services</NavLink></li>
                <li><NavLink to="/project-v1">Portfolio</NavLink></li>
                <li><NavLink to="/blog">Careers</NavLink></li>
                <li><NavLink to="/service-v2">Features</NavLink></li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-20">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-nav-link style-none">
                <li><NavLink to="/about-us-2">About us</NavLink></li>
                <li><NavLink to="/blog-grid">Blogs</NavLink></li>
                <li><NavLink to="/faq">FAQ’s</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </div>
            <div className="col-xxl-2 col-lg-3 col-sm-4 mb-20">
              <h5 className="footer-title">Support</h5>
              <ul className="footer-nav-link style-none">
                <li><NavLink to="/contact">Terms of use</NavLink></li>
                <li><NavLink to="/contact">Terms & conditions</NavLink></li>
                <li><NavLink to="/contact">Privacy</NavLink></li>
                <li><NavLink to="/contact">Cookie policy</NavLink></li>
                <li><NavLink to="/contact">Self-service</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="copyright text-center">Copyright @{new Date().getFullYear()} babun inc.</div>
        </div>
        <img src="/assets/images/shape/shape_06.svg" alt="shape" className="lazy-img shapes shape_01"/>
        <img src="/assets/images/shape/shape_06.svg" alt="shape" className="lazy-img shapes shape_02"/>
      </div>
    </div>
  </div>
  );
};

export default FooterTwo;