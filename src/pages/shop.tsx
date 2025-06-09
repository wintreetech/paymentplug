import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FooterThree from "../layout/footer/footer-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import ShopArea from "../components/shop/shop-area";

export default function ShopPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Shop" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Product Showcase"
            subtitle="Meet our products, guiding you through financial intricacies with precision"
            page="Shop"
            bg_img="/assets/images/media/img_47.jpg"
            shape="/assets/images/shape/shape_26.svg"
          />
          {/* breadcrumb end */}

          {/* shop area start */}
          <ShopArea/>
          {/* shop area end */}

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
