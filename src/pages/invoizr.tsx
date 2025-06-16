import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";
import InvoizrServiceDetails from "../components/services/invoizr-service-details";

export default function Invoizr() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="Invoizr" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Invoizr"
            subtitle="The platform offers invoicing via INVOIZR app and web for access."
            page="Invoizr"
            shape="/assets/images/shape/shape-invoizr.svg"
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* service details area start */}
          <InvoizrServiceDetails />
          {/* service details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
