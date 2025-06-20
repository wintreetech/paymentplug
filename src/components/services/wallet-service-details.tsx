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
const WalletServiceDetails = () => {
	return (
		<div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
			<div className="container">
				<div className="row">
					<div className="col-xxl-9 col-lg-8 order-lg-last">
						<div className="details-meta ps-xxl-5 ps-xl-3">
							<div
								className="heading"
								id="White-label"
								style={{ scrollMarginTop: "100px" }}
							>
								White-label Mobile Wallet
							</div>
							<h2>Customizable white-label mobile wallet system.</h2>
							<p>
								Payment Plug's White-Label Wallet Platform provides one of the
								fastest and most efficient ways to launch your own mobile wallet
								business, with a fully branded solution that's ready to go in no
								time.
							</p>

							<div className="container">
								<div className="row align-items-center">
									{/* Left: Text List (on top for mobile/tablet) */}
									<div className="col-12 col-lg-6 order-1 order-lg-1">
										<ul className="style-none list-item pb-20">
											<li>Load, send, and receive money.</li>
											<li>Purchase from the marketplace.</li>
											<li>View transaction history and activity logs.</li>
											<li>Lightweight app with low storage use.</li>
											<li>Refund requests reduce chargebacks.</li>
											<li>Transfers between customers and merchants</li>
											<li>Fully white-label app, ready within 1 day</li>
										</ul>
									</div>

									{/* Right: Image (below on mobile/tablet) */}
									<div className="col-12 col-lg-6 order-2 order-lg-2">
										<img
											src="/assets/images/media/img_35.jpg"
											alt="App Preview"
											className="img-fluid rounded-4"
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							{/* Configurable Monitoring Rules start */}
							<div
								className="heading"
								id="Integrated"
								style={{ scrollMarginTop: "100px" }}
							>
								Integrated Mobile Market Place
							</div>
							<h2>Merchants can sell via the wallet with sales tools.</h2>
							<p>
								Our Wallet System features a fully integrated marketplace that
								empowers merchants to seamlessly manage and grow their online
								offerings.
							</p>
							<div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
								<div className="row">
									<div className="col-md-4 wow fadeInUp">
										<CardItem
											icon="/assets/images/icon/icon_113.svg"
											title="Merchant Onboarding"
											subtitle="Quickly register and upload products, including bulk uploads for easy catalog management."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
										<CardItem
											icon="/assets/images/icon/icon_114.svg"
											title=" Promotions & Discounts"
											subtitle="Easily create and manage offers, discounts, and promo codes to effectively drive sales."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
										<CardItem
											icon="/assets/images/icon/icon_115.svg"
											title="Integration & Reports"
											subtitle="Easily integrate via API and track sales effectively with comprehensive built-in detailed reports."
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							{/* Alerts and Reports */}
							<div
								className="heading"
								id="Loyalty"
								style={{ scrollMarginTop: "100px" }}
							>
								Built-in Loyalty Program
							</div>
							<h2>Loyalty rewards for consumers and merchants.</h2>
							<p>
								Customize loyalty programs by setting up reward point systems
								that allocate points to both consumers and merchants based on
								their wallet activities, promoting continued engagement and
								usage.
							</p>

							<div>
								<VerticalCard
									icon="/assets/images/icon/icon_116.svg"
									title="Customizable Loyalty Programs"
									description="Design and set up loyalty programs tailored to your business needs by defining how reward points are structured."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_117.svg"
									title="Earn Points Through Wallet Activities"
									description="Both consumers and merchants earn points based on their various transactions and interactions within the wallet."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_118.svg"
									title=" Drive Engagement and Retention"
									description="Rewarding users encourages ongoing participation and loyalty, boosting long-term engagement with your platform."
								/>
							</div>

							<div className="divider" />

							{/* Auto and Manual Suspension */}
							<div
								className="heading"
								id="Multi-currency"
								style={{ scrollMarginTop: "100px" }}
							>
								Multi-currency Support
							</div>
							<h2>Supports preferred currencies with dynamic conversion.</h2>
							<p>
								The wallet system allows customers and merchants to use their
								preferred currencies, with built-in rate management enabling
								seamless and dynamic currency conversion during transfers.
							</p>

							<div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
								<div className="row">
									<div className="col-md-4 wow fadeInUp">
										<CardItem
											icon="/assets/images/icon/icon_119.svg"
											title=" Currency Selection"
											subtitle="Customers and merchants can select their preferred currencies for smooth and localized transactions."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
										<CardItem
											icon="/assets/images/icon/icon_120.svg"
											title="Rate Management"
											subtitle="An integrated system that efficiently manages and updates currency exchange rates in real time."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
										<CardItem
											icon="/assets/images/icon/icon_121.svg"
											title="Dynamic Conversion"
											subtitle="Wallet owners can set currency conversion rates to enable automatic conversions during transfers."
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							<div
								className="heading"
								id="Multilingual"
								style={{ scrollMarginTop: "100px" }}
							>
								Multilingual Availability
							</div>
							<h2>Supports multiple languages with custom options.</h2>
							<p>
								Our mobile apps support multiple default languages like English,
								German, Portuguese, and Hindi, with options to add more based on
								your needs.
							</p>

							<ul className="style-none list-item pb-20">
								<li>
									Additional languages can be added based on custom
									requirements.
								</li>
								<li>Compatible with all iOS and Android devices.</li>
							</ul>

							<div className="divider" />

							<div
								className="heading"
								id="QR"
								style={{ scrollMarginTop: "100px" }}
							>
								QR Code Technology
							</div>
							<h2>QR Code Payments</h2>
							<p>
								Each wallet user is automatically assigned a unique QR code,
								enabling quick and secure transfers by scanning the recipient’s
								code for seamless transactions.
							</p>

							<div>
								<VerticalCard
									icon="/assets/images/icon/icon_122.svg"
									title="Unique QR Code Assignment"
									description="Every wallet user is automatically assigned a unique QR code upon account creation, ensuring a personalized identifier for transactions."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_123.svg"
									title="Seamless Transfers via Scanning"
									description="Funds can be easily transferred by simply scanning the recipient’s unique QR code, streamlining the payment process."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_124.svg"
									title="Secure & Efficient Transactions"
									description="The QR-based transfer system enhances both security and speed, reducing manual input and potential errors during transactions."
								/>
							</div>

							<div className="divider" />

							<div
								className="heading"
								id="Web-Interface"
								style={{ scrollMarginTop: "100px" }}
							>
								Wallet Owner Web Interface
							</div>
							<h2>Wallet Owner Interface for User and Settings Management</h2>
							<p>
								The web-based interface enables wallet owners to efficiently
								manage users and customize various settings, including loyalty
								programs, currency conversions, and their associated rates,
								along with other essential configurations.
							</p>

							<div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
								<div className="row">
									<div className="col-md-4 wow fadeInUp">
										<CardItem
											icon="/assets/images/icon/icon_125.svg"
											title=" User Management"
											subtitle="Wallet owners can access a web-based dashboard to view, manage, and control all user accounts and related activities in one place."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
										<CardItem
											icon="/assets/images/icon/icon_126.svg"
											title="Loyalty Program Setup"
											subtitle="Easily create and customize loyalty programs to reward users, enhance engagement, and drive repeat usage of the wallet."
										/>
									</div>
									<div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
										<CardItem
											icon="/assets/images/icon/icon_127.svg"
											title="Currency & Settings Control"
											subtitle="Set up multiple currencies, define real-time or fixed conversion rates, and manage all financial preferences to suit business needs."
										/>
									</div>
								</div>
							</div>

							<div className="divider" />

							<div
								className="heading"
								id="Payment-Gateway"
								style={{ scrollMarginTop: "100px" }}
							>
								Built-in Payment Gateway
							</div>
							<h2>Payment Gateway with Built-in Invoicing and Reminders</h2>
							<p>
								Payment Plug delivers a comprehensive invoicing solution that
								enables merchants to generate, share, cancel, and regenerate
								invoices effortlessly. Merchants can receive online payments
								directly through these invoices and send automatic reminders to
								customers via email or SMS to ensure timely payments.
							</p>

							<ul className="style-none list-item pb-20">
								<li>
									Merchants can generate, share, cancel, and regenerate invoices
									easily.
								</li>
								<li>
									Customers can pay invoices securely online through the
									platform.
								</li>
								<li>
									Merchants can send payment reminders to customers via email or
									SMS.
								</li>
							</ul>

							<div className="divider" />

							<div
								className="heading"
								id="Security"
								style={{ scrollMarginTop: "100px" }}
							>
								Security & Compliance
							</div>
							<h2>PCI DSS Certified Wallet with TLS 1.2 Security</h2>
							<p>
								Each wallet user is automatically assigned a unique QR code,
								enabling quick and secure transfers by scanning the recipient’s
								code for seamless transactions.
							</p>

							<div>
								<VerticalCard
									icon="/assets/images/icon/icon_160.svg"
									title="PCI DSS Level 1 Compliance"
									description="The mobile app and wallet system adhere to the highest level of Payment Card Industry Data Security Standard (PCI DSS Level 1), ensuring robust protection for all payment-related data"
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_161.svg"
									title="Strong TLS 1.2 Protocol"
									description="All data transmissions are secured using the TLS 1.2 protocol, which provides strong encryption and protects against unauthorized access and data breaches.."
								/>
								<VerticalCard
									icon="/assets/images/icon/icon_162.svg"
									title="Trusted Security Certificates"
									description="The system uses industry-standard security certificates to verify authenticity and ensure a secure connection between users and the payment gateway."
								/>
							</div>

							<div className="w-100 h-100">
								<img
									src="/assets/images/media/img_35.jpg"
									alt="App Preview"
									className="w-100 h-100 object-fit-cover rounded-4"
								/>
							</div>
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
										title="White-label Mobile Wallet"
										sectionId="White-label"
										active={true}
									/>
									<ServiceNav
										title="Integrated Marketplace"
										sectionId="Integrated"
									/>
									<ServiceNav
										title="Built-in Loyalty Program"
										sectionId="Loyalty"
									/>
									<ServiceNav
										title="Multi-currency Support"
										sectionId="Multi-currency"
									/>
									<ServiceNav
										title="Multilingual Availability"
										sectionId="Multilingual"
									/>
									<ServiceNav title="QR Code Technology" sectionId="QR" />
									<ServiceNav
										title="Wallet Owner Web Interface"
										sectionId="Web-Interface"
									/>
									<ServiceNav
										title="Built-in Payment Gateway"
										sectionId="Payment-Gateway"
									/>
									<ServiceNav
										title="Security & Compliance"
										sectionId="Security"
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

export default WalletServiceDetails;
