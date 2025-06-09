import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import PricingArea from "../components/pricing/pricing-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function PricingPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Pricing" />
      {/* seo title */}
    
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Our Membership & pricing"
            subtitle="Find out the pricing for different service and products"
            page="Pricing"
            style_4={true}
          />
          {/* breadcrumb end */}

          {/* pricing area start */}
          <PricingArea/>
          {/* pricing area end */}

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
