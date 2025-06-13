import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderFour from "../layout/header/header-four";
import HeroBannerFour from "../components/hero-banner/hero-banner-four";
import TextFeatureSix from "../components/text-feature/text-feature-six";
import BlockFeatureEight from "../components/block-feature/block-feature-eight";
import TextFeatureSeven from "../components/text-feature/text-feature-seven";
import TextFeatureEight from "../components/text-feature/text-feature-eight";
import TextFeatureNine from "../components/text-feature/text-feature-nine";
import FeedbackFour from "../components/feedback/feedback-four";
import HomeFourBlogs from "../components/blogs/home-4-blogs";
import NewsletterBannerTwo from "../components/newsletter/newsletter-banner-2";
import FooterFour from "../layout/footer/footer-four";
import BlockFeatureSeven from "../components/block-feature/block-feature-seven";
import FaqSectionTwo from "../components/faq/faq-section-two";
import FancyBannerSeven from "../components/fancy-banner/fancy-banner-seven";
import BlockFeatureFifteen from "../components/block-feature/block-feature-fifteen";
import FaqSectionOne from "../components/faq/faq-section-one";
import HomeTwoBlogs from "../components/blogs/home-2-blogs";
import FancyBannerTwo from "../components/fancy-banner/fancy-banner-two";

export default function HomePageFour() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="PaymentPlug | Seamless Payment Solutions with White Label Wallets, Risk Tracking, Invoicing & More." />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderFour />
        {/* header end */}
        <main>
          {/* hero banner start */}
          <HeroBannerFour />
          {/* hero banner end */}

          {/* block feature seven start */}
          <BlockFeatureSeven />
          {/* block feature seven end */}

          {/* text feature six start */}
          <TextFeatureSix />
          {/* text feature six end */}

          {/* block feature seven start */}
          <BlockFeatureEight />
          {/* block feature seven end */}

          {/* text feature seven start */}
          <TextFeatureSeven />
          {/* text feature seven end */}

          {/* project faq area start */}
          <FaqSectionTwo />
          {/* project faq area end */}

          {/* fancy banner start */}
          <FancyBannerSeven />
          {/* fancy banner end */}

          {/* text feature eight start */}
          <TextFeatureEight />
          {/* text feature eight end */}

          {/* text feature nine start */}
          <TextFeatureNine />
          {/* text feature nine end */}

          {/* block feature start */}
          <BlockFeatureFifteen />
          {/* block feature end */}

          {/* feedback four start */}
          <FeedbackFour />
          {/* feedback four end */}

          {/* blog item start */}
          <HomeTwoBlogs />
          {/* blog item end */}

          {/* faq section start */}
          <FaqSectionOne />
          {/* faq section end */}

          {/* fancy banner two start */}
          <FancyBannerTwo />
          {/* fancy banner two end */}

          {/* blog item start */}
          <HomeFourBlogs />
          {/* blog item end */}
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
