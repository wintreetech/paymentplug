import { NavLink } from "react-router-dom";

const TextFeatureThree = ({
	cls,
	style_2,
}: {
	cls?: string;
	style_2?: boolean;
}) => {
	return (
		<>
			{!style_2 && (
				<div
					className={`text-feature-three position-relative ${
						cls ? cls : "mt-30 pb-150 lg-pb-80"
					}`}
				>
					<div className="container">
						<div className="row">
							<div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
								<div className="title-one">
									<div className="upper-title">About us</div>
									<h2>Guideline for your financial grow.</h2>
								</div>
								<p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
									Your success is our mission. As business advisors, we offer
									expert guidance, unlocking your potential for growth and
									profitability
								</p>
								<div>
									<NavLink to="/about-us" className="btn-four mt-15">
										More About us
									</NavLink>
								</div>
								<div className="counter-wrapper mt-60 lg-mt-40 pt-25 lg-pt-10">
									<div className="row">
										<div className="col-xl-6 col-sm-5">
											<div className="counter-block-one mt-20">
												<div className="main-count fw-bold">
													<span className="counter">1.2</span>x
												</div>
												<p className="m0">Rapid wealth grow</p>
											</div>
										</div>
										<div className="col-xl-6 col-sm-7">
											<div className="counter-block-one mt-20">
												<div className="main-count fw-bold">
													$<span className="counter">1.3</span>b+
												</div>
												<p className="m0">Cumulative trading volume</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
								<div className="media-wrapper w-100 position-relative">
									<img
										src="/assets/images/assets/screen_04.svg"
										alt="screen"
										className="lazy-img shapes screen_01"
									/>
									<img
										src="/assets/images/assets/screen_05.svg"
										alt="screen"
										className="lazy-img shapes screen_02"
									/>
								</div>
							</div>
						</div>
					</div>
					<img
						src="/assets/images/shape/shape_06.svg"
						alt="shape"
						className="lazy-img shapes shape_01"
					/>
				</div>
			)}

			{style_2 && (
				<div className="text-feature-three text-feature-one position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
								<div className="title-one">
									<div className="upper-title">Stay Ahead, Stay Connected</div>
									<h2>Empowering the future of global payments.</h2>
								</div>
								<p className="text-lg mt-35 lg-mt-10 mb-30">
									We provide the tools and technology to simplify, scale, and
									secure your entire payment ecosystem—built for businesses
									ready to lead.
								</p>
								<div>
									<NavLink to="/contact" className="btn-four mt-15">
										Let’s Talk
									</NavLink>
								</div>
								<div className="counter-wrapper mt-50 lg-mt-40 pt-5">
									<div className="row">
										<div className="col-xl-6 col-sm-5">
											<div className="counter-block-one mt-20">
												<div className="main-count fw-bold">
													<span className="counter">2.5</span>x
												</div>
												<p className="m0">Faster Payment Routing</p>
											</div>
										</div>
										<div className="col-xl-6 col-sm-7">
											<div className="counter-block-one mt-20">
												<div className="main-count fw-bold">
													$<span className="counter">2.1</span>b+
												</div>
												<p className="m0">Processed Annually</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xxl-7 col-lg-6 wow fadeInLeft">
								<div className="media-list-item me-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-40 d-flex align-items-end">
									<ul className="style-none">
										<li>Instant Access Anywhere</li>
										<li>Built for Simplicity</li>
										<li>Secured by Design</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TextFeatureThree;
