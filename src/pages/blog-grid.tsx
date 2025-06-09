import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";
import BlogGridArea from "../components/blogs/blog-grid-area";

export default function BlogGridPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog Grid" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Explore our News"
            subtitle="Find the team members details here with all the information"
            page="Blog"
          />
          {/* breadcrumb end */}

          {/* blog grid area start */}
          <BlogGridArea />
          {/* blog grid area end */}

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
