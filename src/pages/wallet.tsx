import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import WalletServiceDetails from "../components/services/wallet-service-details";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";
import HomeFourBlogs from "../components/blogs/home-4-blogs";

export default function Wallet() {
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
						title="Wallet"
						subtitle="Enable real-time, secure transactions that build trust."
						page="Wallet"
						shape="/assets/images/shape/shape-wallet.svg"
						bg_img="/assets/images/media/wallet-bg.png"
						style_2={true}
						cls="me-xl-4"
					/>
					{/* breadcrumb end */}

					{/* service details area start */}
					<WalletServiceDetails />
					{/* service details area end */}

					{/* fancy banner two start */}
					<FancyBannerTwo />
					{/* fancy banner two end */}

					{/* blog item start */}
					<HomeFourBlogs />
					{/* blog item end */}
				</main>

				{/* footer start */}
				{/* <FooterThree style_2={true} /> */}

				<div className="footer-large-wrapper position-relative">
					<NewsletterBannerTwo />
					<FooterFour />
				</div>
				{/* footer end */}
			</div>
		</Wrapper>
	);
}
