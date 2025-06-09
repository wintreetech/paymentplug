import { NavLink } from "react-router-dom";
// internal
import useSticky from "../../hooks/use-sticky";
import Navbar from "./navbar";

const HeaderFour = () => {
	const { sticky } = useSticky();
	return (
		<>
			<header
				className={`theme-main-menu menu-overlay menu-style-four white-vr sticky-menu ${
					sticky ? "fixed" : ""
				}`}
			>
				<div className="inner-content position-relative">
					<div className="top-header">
						<div className="d-flex align-items-center justify-content-between">
							<div className="logo order-lg-0">
								<NavLink to="/" className="d-flex align-items-center">
									<img
										src="/assets/images/logo/paymentplug-logo-white.svg"
										alt="logo"
									/>
								</NavLink>
							</div>
							<div className="right-widget d-none d-md-block ms-auto ms-lg-0 me-3 me-lg-0 order-lg-3">
								<NavLink to="/contact" className="btn-twelve tran3s">
									Get Started
								</NavLink>
							</div>
							<nav className="navbar navbar-expand-lg p0 order-lg-2">
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
									<Navbar logo_white={true} />
									{/* header navbar end */}
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default HeaderFour;
