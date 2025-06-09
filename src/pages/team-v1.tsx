import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import TeamOneArea from "../components/team/team-v1-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function TeamV1Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Talented Experts"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Team"
            shape="/assets/images/shape/shape_31.svg"
            bg_img="/assets/images/media/img_32.jpg"
          />
          {/* breadcrumb end */}

          {/* team v1 area start */}
          <TeamOneArea/>
          {/* team v1 area end */}

          {/* fancy banner three start */}
          <FancyBannerThree/>
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner/>
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    
    </Wrapper>
  );
}
