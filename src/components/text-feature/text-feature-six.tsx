import { NavLink } from "react-router-dom";

const TextFeatureSix = () => {
	return (
		<div className="text-feature-six position-relative mt-200 lg-mt-120">
			<div className="container">
				<div className="position-relative pb-140 xl-pb-100 md-pb-60">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<div className="title-two mb-30">
								<div className="upper-title">Visa & Mastercard</div>
								<h2>Empowering seamless global payments.</h2>
							</div>
							<p className="text-lg mb-35 pe-xl-5 me-xl-4">
								A cutting-edge platform with trusted partners driving smooth
								transactions.
							</p>
							<NavLink to="/contact" className="btn-thirteen tran3s me-5">
								Contact Sales
							</NavLink>
						</div>
						<div className="col-lg-4 ms-auto">
							<div className="ps-xl-5 ms-xxl-2 md-mt-60">
								<div className="card-style-ten border-bottom mb-60 lg-mb-40">
									<h4 className="fw-bold">Visa</h4>
									<p>
										Integrated with Visa’s global network for reliable, secure
										payments.
									</p>
									<div className="main-count d-inline-block position-relative fw-bold">
										<span className="counter">1.75</span>m
									</div>
									<div>Transactions processed monthly</div>
								</div>

								<div className="card-style-ten">
									<h4 className="fw-bold">Mastercard</h4>
									<p>
										Optimized routing across Mastercard for faster, smarter
										payments.
									</p>
									<div className="main-count d-inline-block position-relative fw-bold">
										<span className="counter">71</span>m
									</div>
									<div>Successful transactions managed</div>
								</div>
							</div>
						</div>
					</div>
					<div className="media-wrapper">
						<img
							src="/assets/images/assets/hand.png"
							alt="hand-img"
							className="lazy-img w-100"
						/>
						<img
							src="/assets/images/assets/screen_14.png"
							alt="screen-img"
							className="lazy-img shapes screen_01"
						/>
					</div>
					<img
						src="/assets/images/shape/shape_15.png"
						alt="shape"
						className="lazy-img shapes shape_01"
					/>
					<img
						src="/assets/images/shape/shape_16.svg"
						alt="shape"
						className="lazy-img shapes shape_02"
					/>
				</div>
			</div>
		</div>
	);
};

export default TextFeatureSix;
