import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderThree from "../layout/header/header-three";
import HeroBannerThree from "../components/hero-banner/hero-banner-three";
import BlockFeatureSix from "../components/block-feature/block-feature-six";
import TextFeatureFour from "../components/text-feature/text-feature-four";
import TextFeatureFive from "../components/text-feature/text-feature-five";
import BlockFeatureSeven from "../components/block-feature/block-feature-seven";
import FeedbackThree from "../components/feedback/feedback-three";
import FancyBannerFour from "../components/fancy-banner/fancy-banner-four";
import HomeThreeBlogs from "../components/blogs/home-3-blogs";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";



export default function HomePageThree() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Home 3" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderThree />
        {/* header end */}
        <main>

          {/* hero banner start */}
          <HeroBannerThree />
          {/* hero banner end */}

          {/* block feature six start */}
          <BlockFeatureSix />
          {/* block feature six end */}

          {/* text feature four start */}
          <TextFeatureFour />
          {/* text feature four end */}

          {/* text feature five start */}
          <TextFeatureFive />
          {/* text feature five end */}

          {/* block feature seven start */}
          <BlockFeatureSeven />
          {/* block feature seven end */}

          {/* feedback three start */}
          <FeedbackThree/>
          {/* feedback three end */}

          {/* fancy banner four start */}
          <FancyBannerFour/>
          {/* fancy banner four end */}

          {/* blog item start */}
          <HomeThreeBlogs/>
          {/* blog item end */}

          {/* newsletter start */}
          <NewsletterBanner/>
          {/* newsletter end */}
        </main>

        {/* footer start */}
        <FooterThree />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
