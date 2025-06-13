import { NavLink } from "react-router-dom";

// card item
function CardItem({
	icon,
	title,
	desc,
}: {
	icon: string;
	title: string;
	desc: string;
}) {
	return (
		<div className="card-style-three d-flex pt-75 lg-pt-40 pb-45 lg-pb-20">
			<img src={icon} alt="icon" className="lazy-img icon" />
			<div className="ps-4">
				<h4 className="fw-bold mb-20">{title}</h4>
				<p> {desc} </p>
			</div>
		</div>
	);
}

function CounterBlock({
	num,
	text,
	title,
	delay,
}: {
	num: number;
	text: string;
	title: string;
	delay: string;
}) {
	return (
		<div className="col-md-3 col-6">
			<div
				className="counter-block-two text-center text-md-start mt-35 wow fadeInUp"
				data-wow-delay={`0.${delay}s`}
			>
				<div className="main-count fw-500">
					<span className="counter">{num}</span>
					{text}
				</div>
				<p className="m0 text-md">{title}</p>
			</div>
		</div>
	);
}

const TextFeatureOne = ({ style_2 = false }: { style_2?: boolean }) => {
	return (
		<>
			{!style_2 && (
				<div className="text-feature-one mt-150 lg-mt-100">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-5 col-lg-6 wow fadeInLeft">
								<div className="title-one">
									<div className="upper-title">About us</div>
									<h2>Trusted by 15k+ Clients Globally</h2>
								</div>
								<p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-20">
									We power seamless, scalable, and secure payment solutions for
									businesses worldwide. With a passion for innovation and a
									commitment to excellence, Paymentplug is your trusted partner
									in modern financial infrastructure.
								</p>
								<div className="d-inline-flex flex-wrap align-items-center">
									<NavLink to="/about-us" className="btn-four mt-15 me-4">
										More About us
									</NavLink>
									<NavLink to="/contact" className="btn-three icon-link mt-15">
										<span>Request a Callback</span>
										<img
											src="/assets/images/icon/icon_09.svg"
											alt="icon"
											className="lazy-img icon ms-1"
										/>
									</NavLink>
								</div>
							</div>
							<div className="col-xl-7 col-lg-6 wow fadeInRight">
								<div className="media-list-item ms-auto pe-xxl-5 pe-4 ps-xxl-5 ps-4 pb-35 md-mt-60 d-flex align-items-end">
									<ul className="style-none">
										<li>Mobile app easy management & access</li>
										<li>Ton’s of features for handle the card easily</li>
										<li>Strong security system.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{style_2 && (
				<div className="text-feature-one mt-150 lg-mt-80">
					<div className="container">
						<div className="line-wrapper position-relative">
							<div className="row align-items-center">
								<div className="col-lg-5 wow fadeInLeft">
									<div className="title-one">
										<div className="upper-title">About us</div>
										<h2>Trusted by 15k+ Clients Globally</h2>
									</div>
									<p className="text-lg mt-45 lg-mt-30 mb-35 lg-mb-30">
										We power seamless, scalable, and secure payment solutions
										for businesses worldwide. With a passion for innovation and
										a commitment to excellence, Paymentplug is your trusted
										partner in modern financial infrastructure.
									</p>
									<NavLink
										to="/contact"
										className="btn-three icon-link mt-15 md-mb-40"
									>
										<span>Request a Callback</span>
										<img
											src="/assets/images/icon/icon_09.svg"
											alt="icon"
											className="lazy-img icon ms-1"
										/>
									</NavLink>
								</div>
								<div className="col-lg-6 ms-auto wow fadeInRight">
									<CardItem
										icon="/assets/images/icon/icon_10.svg"
										title="Our Mission"
										desc="To deliver cutting-edge, cost-effective payment technologies that simplify operations for PSPs, acquirers, ISOs, and global merchants. We’re here to accelerate your success."
									/>
									<CardItem
										icon="/assets/images/icon/icon_11.svg"
										title="Our company vision."
										desc="To be the most trusted and innovative payment orchestration platform — setting new industry standards and enabling global commerce with flexibility, transparency, and speed."
									/>
								</div>
							</div>
							<img
								src="/assets/images/shape/shape_05.svg"
								alt="shape"
								className="lazy-img shapes shape_01"
							/>
						</div>

						<div className="counter-wrapper mt-80 lg-mt-20">
							<div className="row">
								<CounterBlock num={120} text="+" title="Partners" delay="0" />
								<CounterBlock
									num={2.4}
									text="m+"
									title="Transactions"
									delay="1"
								/>
								<CounterBlock num={120} text="+" title="Currencies" delay="2" />
								<CounterBlock num={99.9} text="%" title="Uptime" delay="3" />
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TextFeatureOne;
