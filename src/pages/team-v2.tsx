import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import TeamTwoArea from "../components/team/team-v2-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function TeamV2Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team v2" />
      {/* seo title */}

    
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Our Talented Experts"
            subtitle="Meet our experts, guiding through financial intricacies with precision"
            page="Team"
            style_4={true}
          />
          {/* breadcrumb end */}

          {/* team v2 area start */}
          <TeamTwoArea/>
          {/* team v2 area end */}

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
