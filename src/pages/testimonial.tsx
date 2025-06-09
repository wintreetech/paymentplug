import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import FeedbackFour from "../components/feedback/feedback-four";
import FeedbackOne from "../components/feedback/feedback-one";
import FeedbackFive from "../components/feedback/feedback-five";
import FeedbackThree from "../components/feedback/feedback-three";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function TestimonialPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="About us" />
      {/* seo title */}
    
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our clients word"
            subtitle="Check what’s our client say about us and explore their thought’s."
            page="Testimonials"
            bg_img="/assets/images/media/img_32.jpg"
            shape="/assets/images/shape/shape_32.svg"
            style_2={true}
            cls="me-xl-4"
          />
          {/* breadcrumb end */}

          {/* testimonial four area start */}
          <FeedbackFour spacing="mt-150 lg-mt-80" />
          {/* testimonial four area end */}

          {/* testimonial one area start */}
          <FeedbackOne cls="border-0 pt-80 pb-80" />
          {/* testimonial one area end */}

          {/* testimonial five area start */}
          <FeedbackFive border="0" />
          {/* testimonial five area end */}

          {/* testimonial three area start */}
          <FeedbackThree spacing="pt-180 lg-pt-100 pb-180 md-pb-80" bottom_slider={false} />
          {/* testimonial three area end */}

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
