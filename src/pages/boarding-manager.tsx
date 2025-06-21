import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import BoardingServiceDetails from "../components/services/boarding-service-details";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import HomeFourBlogs from "../components/blogs/home-4-blogs";

export default function BoardingManger() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Wallet" />
			{/* seo title */}

			<div className="main-page-wrapper">
				{/* header start */}
				<HeaderTwo />
				{/* header end */}
				<main>
					{/* breadcrumb start */}
					<BreadcrumbOne
						title="Boarding Manager"
						subtitle="Boarding Manager simplifies merchant onboarding"
						page="Boarding Manager"
						shape="/assets/images/shape/shape-boarding-manager.svg"
						bg_img="/assets/images/media/bm-bg.png"
						style_2={true}
						cls="me-xl-4"
					/>
					{/* breadcrumb end */}

					{/* service details area start */}
					<BoardingServiceDetails />
					{/* service details area end */}

					{/* fancy banner two start */}
					<FancyBannerTwo />
					{/* fancy banner two end */}

					{/* blog item start */}
					<HomeFourBlogs />
					{/* blog item end */}
				</main>

				<div className="footer-large-wrapper position-relative">
					<NewsletterBannerTwo />
					<FooterFour />
				</div>
			</div>
		</Wrapper>
	);
}
