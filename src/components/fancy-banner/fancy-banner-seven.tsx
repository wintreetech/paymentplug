import { Link } from "react-router-dom";

const FancyBannerSeven = () => {
	return (
		<div className="fancy-banner-seven box-layout pt-100 lg-pt-80">
			<div className="bg-wrapper border-40 position-relative z-1 overflow-hidden pt-130 lg-pt-80 pb-130 lg-pb-80">
				<div className="container position-relative z-2">
					<div className="row align-items-center">
						<div className="col-md-6">
							<div className="title-two mb-60">
								<div className="upper-title-two text-white mb-15">
									Simplify. Scale. Succeed.
								</div>
								<h2 className="text-white">
									Powering smarter payment operations.
								</h2>
							</div>
							<Link to={"/contact"} className="btn-twenty">
								Optimize Payments
							</Link>
						</div>
						<div className="col-xl-5 col-md-6 ms-auto">
							<ul className="style-none sm-mt-60">
								<li>Unified platform for all payment channels</li>
								<li>Real-time insights & monitoring tools</li>
								<li>Easy integration with zero downtime</li>
								<li>Enterprise-grade security & fraud control</li>
							</ul>
						</div>
					</div>
				</div>
				<img
					src="/assets/images/shape/shape_50.svg"
					alt="shape"
					className="lazy-img shapes shape_01"
				/>
			</div>
		</div>
	);
};

export default FancyBannerSeven;
