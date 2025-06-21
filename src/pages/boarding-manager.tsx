import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import BoardingServiceDetails from "../components/services/boarding-service-details";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";

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

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        <div className="footer-large-wrapper position-relative">
          <NewsletterBannerTwo />
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
}
