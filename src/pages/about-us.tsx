import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import TextFeatureOne from "../components/text-feature/text-feature-one";
import TextFeatureThree from "../components/text-feature/text-feature-three";
import FeedbackOne from "../components/feedback/feedback-one";
import PartnersSliderOne from "../components/partners/partners-slider-one";
import HomeFourBlogs from "../components/blogs/home-4-blogs";
import HeaderFour from "../layout/header/header-four";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";
import BlockFeatureFive from "../components/block-feature/block-feature-five";

export default function AboutUsPage() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="About us" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Trusted by Global Leaders"
            subtitle="Powering smarter payment growth through expertise, innovation & trust."
            page="About Us"
            bg_img="/assets/images/media/img_26.jpg"
            shape="/assets/images/shape/about-us-shape.svg"
            style_2={false}
          />
          {/* breadcrumb end */}

          {/* text feature one area start */}
          <TextFeatureOne style_2={true} />
          {/* text feature one area end */}

          {/* block feature five start */}
          <BlockFeatureFive />
          {/* block feature five end */}

          {/* text feature one area start */}
          <TextFeatureThree style_2={true} />
          {/* text feature one area end */}

          {/* feedback one start */}
          <FeedbackOne cls="top-border pt-80 pb-80" />
          {/* feedback one end */}

          {/* partner logo start */}
          <div className="partner-logo-one pt-80 lg-pt-40 pb-80 lg-pb-40">
            <div className="container">
              <PartnersSliderOne />
            </div>
          </div>
          {/* partner logo end */}

          {/* blogs start */}
          <HomeFourBlogs cls="mt-180 lg-mt-80 mb-180 lg-mb-80" />
          {/* blogs end */}
        </main>

        {/* footer area start */}
        <div className="footer-large-wrapper position-relative">
          {/* newsletter area start */}
          <NewsletterBannerTwo />
          {/* newsletter area end */}

          {/* footer start */}
          <FooterFour />
          {/* footer end */}
        </div>
        {/* footer area end */}
      </div>
    </Wrapper>
  );
}
