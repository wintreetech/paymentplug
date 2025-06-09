import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import BreadcrumbTwo from "../components/breadcrumb/breadcrumb-two";
import ProjectOneArea from "../components/project/project-v1-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";

export default function ProjectV1Page() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Project v1" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbTwo
            title="Our Most Recent Projects"
            subtitle="Offering solutions & services to address a of financial issues"
            page="Project"
            style_3={true}
          />
          {/* breadcrumb end */}

          {/* project v2 area start */}
          <ProjectOneArea />
          {/* project v2 area end */}

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
