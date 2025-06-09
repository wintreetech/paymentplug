import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import TeamDetailsArea from "../components/team/team-details-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function TeamDetailsPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Team Details" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Single Team Details"
            subtitle="Find the team members details here with all the information"
            page="Team"
            style_4={true}
            col="col-xxl-7 col-xl-6 m-auto"
          />
          {/* breadcrumb end */}

          {/* team details area start */}
          <TeamDetailsArea />
          {/* team details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}
        </main>

        {/* footer start */}
        <FooterTwo/>
        {/* footer end */}
      </div>
    
    </Wrapper>
  );
}
