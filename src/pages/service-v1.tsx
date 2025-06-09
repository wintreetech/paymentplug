import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import ServiceOneArea from "../components/services/service-v1-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function ServiceV1Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service v1" />
      {/* seo title */}
 
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our offerings & Services"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page="Services"
            shape="/assets/images/shape/shape_26.svg"
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            cls="me-xxl-4 me-lg-5"
          />
          {/* breadcrumb end */}

          {/* service v1 area start */}
          <ServiceOneArea />
          {/* service v1 area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner/>
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
     
    </Wrapper>
  );
}
