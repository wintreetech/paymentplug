import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import WishlistArea from "../components/wishlist/wishlist-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function WishlistPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Wishlist" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* cart area start */}
          <WishlistArea />
          {/* cart area end */}

          {/* fancy banner three start */}
          <FancyBannerThree/>
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
