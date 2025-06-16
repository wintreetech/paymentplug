import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import FooterTwo from "../layout/footer/footer-two";
import WhiteLabelProjectDetails from "../components/project-details/whiteLabel-details-area.";

export default function WhiteLabel() {
  return (
    <Wrapper>
      {/* seo title */}
      <SEOCom title="White Label" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <div
            className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 lg-pb-70 md-pb-30 position-relative"
            style={{ backgroundImage: `url(/assets/images/media/img_26.jpg)` }}
          >
            <div className="container position-relative">
              <div className="row align-items-center">
                <div
                  className="col-lg-8 m-auto text-center"
                  style={{ width: "100%" }}
                >
                  <div className="tag">White Label</div>
                  <h1 className="hero-heading no-bg text-white">
                    White-Label Payments and Merchant Management
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* breadcrumb end */}

          {/* project details area start */}
          <WhiteLabelProjectDetails />
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
