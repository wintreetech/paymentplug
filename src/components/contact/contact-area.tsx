import ContactForm from "../forms/contact-form";

// address block item
function AddressBlock({
	icon,
	title,
	subtitle,
}: {
	icon: string;
	title: string;
	subtitle: string;
}) {
	return (
		<div className="address-block-one text-center mb-40 wow fadeInUp">
			<div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
				<img src={icon} alt="icon" className="lazy-img" />
			</div>
			<h5 className="title">{title}</h5>
			<p dangerouslySetInnerHTML={{ __html: subtitle }}></p>
		</div>
	);
}

const handleChatClick = () => {
	// Open the live chat link in a new tab
	alert("Live chat service is currently unavailable.");
};

const ContactArea = () => {
	return (
		<div className="contact-us-section pt-150 lg-pt-80">
			<div className="container">
				<div className="position-relative">
					<div className="row">
						<div className="col-12 m-auto">
							<div className="row" style={{ justifyContent: "space-around" }}>
								<div className="col-md-4">
									<AddressBlock
										icon="/assets/images/icon/icon_90.svg"
										title="Our Address"
										subtitle="124 City Road London <br/> United Kingdom EC1V 2NX"
									/>
								</div>

								<div className="col-md-4" onClick={handleChatClick}>
									<AddressBlock
										icon="/assets/images/icon/icon_92.svg"
										title="Live Support"
										subtitle='<a href="#" className="webaddress">Start Chat with <br> Support Team</a>'
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-wrapper light-bg mt-80 lg-mt-40">
						<div className="row">
							<div className="col-lg-5">
								<div className="d-flex flex-column flex-lg-column-reverse">
									<div className="row">
										<div className="col-md-8 col-6 me-auto ms-auto">
											<img
												src="/assets/images/assets/ils_07.svg"
												alt="icon"
												className="lazy-img me-auto ms-auto"
											/>
										</div>
									</div>
									<div className="title-one text-center text-lg-start md-mt-20 mb-70 md-mb-30">
										<h2>Have inquiries? Reach out via message</h2>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="form-style-one ps-xl-5">
									{/* form start */}
									<ContactForm />
									{/* form end */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="map-banner mt-120 lg-mt-80">
				<div className="gmap_canvas h-100 w-100">
					<iframe
						className="gmap_iframe h-100 w-100"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2357497086928!2d-0.0886605!3d51.5272357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ca671a6cfb1%3A0x382927fb9ac5269b!2s124%20City%20Rd%2C%20London%20EC1V%202NP%2C%20UK!5e0!3m2!1sen!2sin!4v1749553472532!5m2!1sen!2sin collage&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default ContactArea;
