import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import BlogListArea from "../components/blogs/blog-list-area";
import FooterThree from "../layout/footer/footer-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";

export default function BlogPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Explore our News"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            shape="/assets/images/shape/shape_34.svg"
          />
          {/* breadcrumb end */}

          {/* blog list area start */}
          <BlogListArea />
          {/* blog list area end */}

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
