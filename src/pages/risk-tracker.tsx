import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServiceDetailsArea from "../components/services/service-details-area";
import FooterFour from "../layout/footer/footer-four";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";

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
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <ServiceDetailsArea />
          {/* service details area end */}
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
