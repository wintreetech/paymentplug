import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import ContactArea from "../components/contact/contact-area";
import HeaderFour from "../layout/header/header-four";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";

export default function ContactPage() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Contact" />
			{/* seo title */}

			<div className="main-page-wrapper">
				{/* header start */}
				<HeaderFour />
				{/* header end */}
				<main>
					{/* breadcrumb start */}
					<BreadcrumbOne
						title="Contact us for inquiries"
						subtitle="Get our all info and also can message us directly from here"
						page="Contact"
						shape="/assets/images/shape/shape_33.svg"
					/>
					{/* breadcrumb end */}

					{/* contact area start */}
					<ContactArea />
					{/* contact area end */}

					{/* news letter start */}
					<NewsletterBanner />
					{/* news letter end */}
				</main>

				{/* footer area start */}
				<div className="footer-large-wrapper position-relative">
					{/* newsletter area start */}
					<NewsletterBannerTwo />
					{/* newsletter area end */}

					{/* footer start */}
					<FooterFour />
					{/* footer end */}
				</div>
				{/* footer area end */}
			</div>
		</Wrapper>
	);
}
