import { NavLink } from 'react-router-dom';
// internal
import Navbar from "./navbar";
import useSticky from '../../hooks/use-sticky';
import LoginModal from '../../components/common/login-modal';


const HeaderSix = () => {
  const {sticky} = useSticky();
  return (
    <>
    <header className={`theme-main-menu menu-overlay menu-style-six sticky-menu ${sticky?'fixed':''}`}>
      <div className="inner-content">
        <div className="top-header position-relative">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo order-lg-0">
              <NavLink to="/" className="d-flex align-items-center">
                <img src="/assets/images/logo/logo_06.svg" alt="logo" />
              </NavLink>
            </div>
            <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
              <ul className="d-flex align-items-center style-none">
                <li className="d-flex align-items-center login-btn-two">
                  <img
                    src="/assets/images/icon/icon_94.svg"
                    alt="icon"
                    className="lazy-img icon me-2"
                  />
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="fw-500"
                  >
                    Login
                  </a>
                </li>
                <li className="d-none d-md-inline-block ms-3 ms-xl-4">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                    className="fw-500 signup-btn-two tran3s"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
            <nav className="navbar navbar-expand-lg p0 ms-lg-5 order-lg-2">
              <button
                className="navbar-toggler d-block d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                {/* header navbar start */}
                <Navbar />
                {/* header navbar end */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>

    {/* login modal start */}
    <LoginModal/>
    {/* login modal end */}
    </>
  );
};

export default HeaderSix;
