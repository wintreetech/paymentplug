import { NavLink } from 'react-router-dom';
// internal
import Navbar from './navbar';
import useSticky from '../../hooks/use-sticky';
import LoginModal from '../../components/common/login-modal';

const HeaderSeven = () => {
  const {sticky} = useSticky();
  return (
    <>
      <header className={`theme-main-menu menu-overlay white-vr sticky-menu ${sticky?'fixed':''}`}>
        <div className="inner-content position-relative">
          <div className="top-header">
            <div className="d-flex align-items-center justify-content-between">
              <div className="logo order-lg-0">
                <NavLink to="/" className="d-flex align-items-center">
                  <img src="/assets/images/logo/logo_01.svg" alt="logo" />
                </NavLink>
              </div>

              <div className="right-widget ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
                <ul className="d-flex align-items-center style-none">
                  <li className="d-none d-md-block">
                    <NavLink to="/contact" className="quote-one fw-500 tran3s">
                      Start Quote
                    </NavLink>
                  </li>
                </ul>
              </div>
              <nav className="navbar navbar-expand-lg p0 order-lg-2">
                <button className="navbar-toggler d-block d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {/* header navbar start */}
                  <Navbar logo_white={true} />
                  {/* header navbar end */}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* login modal start */}
      <LoginModal />
      {/* login modal end */}
    </>
  );
};

export default HeaderSeven;