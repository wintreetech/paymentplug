import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ServiceTwoArea from "../components/services/service-v2-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function ServiceV2Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Service v2" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Our offerings & services"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            page="Services"
            style_4={true}
            col="col-xl-8 m-auto"
          />
          {/* breadcrumb end */}

          {/* service area start */}
          <ServiceTwoArea />
          {/* service area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo />
        {/* footer end */}
      </div>
     
    </Wrapper>
  );
}
