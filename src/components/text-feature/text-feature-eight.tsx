import { NavLink } from "react-router-dom";
import { IFaq } from "../../data/faq-data";
import FaqItem from "../faq/faq-item";

// faq data
const faq_data: IFaq[] = [
	{
		id: "one",
		title: "Fast Setup, Full Customization",
		desc: "Create your gateway in minutes. Customize the look, flow, and features to align perfectly with your brand.",
		isShow: true,
	},
	{
		id: "two",
		title: "Unified Payment Operations",
		desc: "Manage transactions, monitor performance, and handle settlements—all from a central, real-time dashboard.",
	},
	{
		id: "three",
		title: "Cross-Border Enabled",
		desc: "Expand your reach. Accept and process payments from global markets with multi-currency and international compliance support.",
	},
];
// faq data 2
const faq_data_2: IFaq[] = [
	{
		id: "one",
		title: "Quality Services",
		desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
		isShow: true,
	},
	{
		id: "two",
		title: "Fair Pricing",
		desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
	},
	{
		id: "three",
		title: "Trusted & Secure",
		desc: "It only takes 5 minutes. Set-up is smooth and simple, with fully customizable page design to reflect your brand.",
	},
];

const TextFeatureEight = ({ style_2 = false }: { style_2?: boolean }) => {
	return (
		<>
			{!style_2 && (
				<div className="text-feature-eight mt-130 lg-mt-80">
					<div className="container">
						<div className="row">
							<div className="col-lg-6 wow fadeInLeft">
								<div className="pe-xl-5 me-xxl-4 mt-50 lg-mt-10">
									<div className="title-three mb-50 lg-mb-30">
										<div className="upper-title">
											{" "}
											Build smarter infrastructure with less effort.
										</div>
										<h2>Connect Your Payments Globally</h2>
									</div>
									<div
										className="accordion accordion-style-three mb-70 lg-mb-40"
										id="accordionOne"
									>
										{faq_data.map((faq, i) => (
											<FaqItem key={i} {...faq} parent="accordionOne" />
										))}
									</div>

									<a
										target="_blank"
										href="https://docs.paymentplug.com/"
										className="btn-thirteen tran3 flex-fill"
									>
										View Integration Docs
									</a>
								</div>
							</div>
							<div className="col-lg-6 col-md-8 m-auto wow fadeInRight">
								<div className="media-wrapper md-mt-40">
									<img
										src="/assets/images/assets/screen_16.png"
										alt="screen"
										className="lazy-img ms-auto"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			{style_2 && (
				<div className="text-feature-eight mt-160 lg-mt-80">
					<div className="container">
						<div className="row">
							<div className="col-xl-5 col-lg-6 wow fadeInLeft">
								<div className="title-one mt-20">
									<div className="upper-title">Why Choose Us</div>
									<h2 className="color-deep">
										We’ve been helping customer globally.
									</h2>
								</div>
							</div>
							<div className="col-lg-6 ms-auto wow fadeInRight">
								<div
									className="accordion accordion-style-three md-mt-40"
									id="accordionOne"
								>
									{faq_data_2.map((faq, i) => (
										<FaqItem
											key={i}
											{...faq}
											parent="accordionOne"
											cls="fw-bold"
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TextFeatureEight;
