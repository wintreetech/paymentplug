import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServiceDetailsArea from "../components/services/service-details-area";
import FooterFour from "../layout/footer/footer-four";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import HomeFourBlogs from "../components/blogs/home-4-blogs";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";

export default function RiskTracker() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Risk Tracker" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Risk Tracker"
            subtitle="Platform provides state of the art, white label payment gateway solution."
            page="Risk Tracker"
            shape="/assets/images/shape/shape-risk-tracker.svg"
            bg_img="/assets/images/media/risk-tracker-bg.png"
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <ServiceDetailsArea />
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
