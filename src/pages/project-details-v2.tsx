import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ProjectDetailsTwoArea from "../components/project-details/project-details-v2-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function ProjectDetailsV2Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Project details v2" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Tax File Preparation & Consulting"
            subtitle="Offering solutions & services to address a spectrum of financial issues"
            tag="CONSULTING"
            page=""
            style_2={true}
          />
          {/* breadcrumb end */}

          {/* project details area start */}
          <ProjectDetailsTwoArea/>
          {/* project details area end */}

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
