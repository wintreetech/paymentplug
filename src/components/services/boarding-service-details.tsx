import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import VerticalCard from "../cards/verticalCard";

// ServiceNav
function ServiceNav({
	title,
	sectionId = null,
	active,
}: {
	title: string;
	sectionId?: string | null;
	active?: boolean;
}) {
	const navigate = useNavigate();
	const location = useLocation();

	const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		if (sectionId && typeof sectionId === "string" && sectionId.length > 0) {
			const targetElement = document.getElementById(sectionId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}

			navigate(location.pathname + `#${sectionId}`, { replace: true });
		}
	};

	return (
		<li>
			<NavLink
				to={sectionId ? `/#${sectionId}` : "/#"}
				className={`d-flex align-items-center w-100 ${active ? "active" : ""}`}
				onClick={handleNavLinkClick}
			>
				<span>{title}</span>
			</NavLink>
		</li>
	);
}
// CardItem
function CardItem({
	icon,
	title,
	subtitle,
}: {
	icon: string;
	title: string;
	subtitle: string;
}) {
	return (
		<div className="card-style-sixteen text-center mt-40">
			<div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
				<img src={icon} alt="icon" className="lazy-img" />
			</div>
			<h4 className="fw-bold mt-35 lg-mt-30 mb-15" style={{ fontSize: "18px" }}>
				{title}
			</h4>
			<p className="m0" style={{ fontSize: "16px" }}>
				{subtitle}
			</p>
		</div>
	);
}
const BoardingServiceDetails = () => {
	return (
		<div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
			<div className="container">
				<div className="row">
					<div className="col-xxl-9 col-lg-8 order-lg-last">
						<div className="details-meta ps-xxl-5 ps-xl-3">
							<div className="heading" id="Onboarding">
								Easy Merchant Onboarding
							</div>
							<h2>Simplified Merchant Onboarding with Multi-Bank</h2>
							<p>
								With Boarding Manager, businesses can easily manage the merchant
								onboarding process and submit applications to multiple banks
								simultaneously through one unified platform.
							</p>

							<div>
								<VerticalCard
									icon="/assets/images/icon/icon_128.svg"
									title="Effortless Onboarding"
									description="Boarding Manager makes the merchant onboarding process simple and efficient, helping businesses get started quickly."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_129.svg"
									title="Multi-Bank Support"
									description="Merchants can apply to multiple banks simultaneously, saving time and simplifying the onboarding process through one platform."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_130.svg"
									title="Flexible Integration Options"
									description="Choose between using the built-in interface or integrating your own system through the available API for a tailored experience."
								/>
							</div>

							<div className="divider" />

							{/* Configurable Monitoring Rules start */}
							<div
								className="heading"
								id="Application-Form"
								style={{ scrollMarginTop: "100px" }}
							>
								Merchant Application Form
							</div>
							<h2>Merchant Application Form for Multi-Acquirer Onboarding</h2>
							<p>
								Boarding Manager captures and securely stores complete merchant
								information through a single form, enabling quick and efficient
								application submission to multiple acquirers.
							</p>
							<div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
								<div className="row">
									<div className="col-md-4 wow fadeInUp">
										<CardItem
											icon="/assets/images/icon/icon_131.svg"
											title="Single Form"
											subtitle="Collects and stores complete merchant information using a single form for consistent and efficient onboarding."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
										<CardItem
											icon="/assets/images/icon/icon_132.svg"
											title="Custom Packages"
											subtitle="Allows you to create tailored application packages for different acquirers based on specific business needs."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
										<CardItem
											icon="/assets/images/icon/icon_133.svg"
											title="One-Time Input"
											subtitle="Merchants only need to provide their details once, even when applying to multiple acquirers, saving time and effort."
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							{/* Alerts and Reports */}
							<div
								className="heading"
								id="Bank-Specific-MAF"
								style={{ scrollMarginTop: "100px" }}
							>
								Bank-Specific MAF
							</div>
							<h2>Bank-Specific MAF Forms for Partner Requirements</h2>
							<p>
								Boarding Manager allows you to add bank-specific forms based on
								partner needs, showing only the required fields for each
								selected acquirer to simplify data entry.
							</p>

							<ul className="style-none list-item pb-20">
								<li>
									Easily add new bank forms based on partner requirements.
								</li>
								<li>
									Selecting a bank generates a custom form with only the needed
									fields.
								</li>
								<li>
									Flexible system to incorporate additional bank forms as
									required.
								</li>
								<li>
									Merchants complete only the information specific to the chosen
									bank.
								</li>
							</ul>

							<div className="divider" />

							{/* Auto and Manual Suspension */}
							<div
								className="heading"
								id="Speed-Options"
								style={{ scrollMarginTop: "100px" }}
							>
								Speed Options
							</div>
							<h2>Fast and Easy Onboarding for Small Merchants</h2>
							<p>
								Designed for efficiency, the Speed Option in Boarding Manager
								streamlines onboarding for small merchants with minimal data,
								perfect for Payment Facilitator models to speed up processing.
							</p>

							<div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
								<div className="row">
									<div className="col-md-4 wow fadeInUp">
										<CardItem
											icon="/assets/images/icon/icon_134.svg"
											title="Quick Onboarding"
											subtitle="Provides a Speed Option for fast onboarding of small merchants with minimal input."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
										<CardItem
											icon="/assets/images/icon/icon_135.svg"
											title="Fast Processing Start"
											subtitle="Allows merchants to begin processing payments quickly with minimal setup and effort."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
										<CardItem
											icon="/assets/images/icon/icon_136.svg"
											title="Payment Facilitator Friendly"
											subtitle="Especially useful for Payment Facilitator models to simplify and speed up onboarding."
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							<div
								className="heading"
								id="Integration"
								style={{ scrollMarginTop: "100px" }}
							>
								MAF Integration API
							</div>
							<h2>MAF API for Fast Online Verification and Integration</h2>
							<p>
								Designed for fast online input verification, this API offers
								quick response times and flexible integration with various
								partner platforms. It easily connects merchant forms on partner
								websites to our solution.
							</p>

							<ul className="style-none list-item pb-20">
								<li>
									Provides fast online input verification with quick response
									times.
								</li>
								<li>
									Versatile integration supports various technical platforms to
									meet partner needs.
								</li>
								<li>
									Easily integrates merchant forms on partner websites with our
									solution.
								</li>
							</ul>
						</div>
					</div>

					{/* side section */}
					<div className="col-xxl-3 col-lg-4">
						<aside
							className="md-mt-40 sidebar-wrapper"
							style={{
								position: "sticky",
								zIndex: 100, // Ensure it stays on top if overlapping occurs
							}}
						>
							<div className="service-nav-item">
								<ul className="style-none">
									<ServiceNav
										title="Easy Merchant Onboarding"
										sectionId="Onboarding"
										active={true}
									/>
									<ServiceNav
										title="Merchant Application Form"
										sectionId="Application-Form"
									/>
									<ServiceNav
										title="Bank-Specific MAF"
										sectionId="Bank-Specific-MAF"
									/>
									<ServiceNav title="Speed Options" sectionId="Speed-Options" />
									<ServiceNav
										title="MAF Integration API"
										sectionId="Integration"
									/>
								</ul>
							</div>
							<div className="contact-banner text-center mt-40 lg-mt-20">
								<h3 className="mb-20">Any Questions? Let’s talk</h3>
								<NavLink to="/contact" className="tran3s fw-500">
									Let’s Talk
								</NavLink>
							</div>
						</aside>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoardingServiceDetails;
