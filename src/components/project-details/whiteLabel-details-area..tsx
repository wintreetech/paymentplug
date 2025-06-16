import { NavLink } from "react-router-dom";
// gallery images
import ProjectDetailsFeature from "./project-details-feature";

// list item
function ListItem({
  icon,
  text,
  sm_text,
}: {
  icon: string;
  text: string;
  sm_text: string;
}) {
  return (
    <li className="d-flex">
      <img src={icon} alt="icon" className="lazy-img icon" />
      <div className="ps-4">
        <div className="text1">{text}</div>
        <span>{sm_text}</span>
      </div>
    </li>
  );
}

const WhiteLabelProjectDetails = () => {
  return (
    <div className="project-details-one position-relative pb-150 lg-pb-80">
      <div className="project-info position-relative mb-150 lg-mb-80">
        <div className="inner-wrapper m-auto">
          <div className="d-lg-flex align-items-center">
            <h3>
              Project <span>Details</span>
            </h3>
            <ul className="style-none d-md-flex flex-fill ps-lg-5">
              <ListItem
                icon="/assets/images/icon/icon_85.svg"
                text="Date"
                sm_text="23 July, 2022"
              />
              <ListItem
                icon="/assets/images/icon/icon_86.svg"
                text="Client Name"
                sm_text="Mariona Adisson, USA"
              />
              <ListItem
                icon="/assets/images/icon/icon_87.svg"
                text="Project Type"
                sm_text="Business Consulting"
              />
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <div className="upper-title">White Label</div>
          <h2>Merchant Back Office</h2>
        </div>
        <p>
          Fully customizable merchant back office interface, seamlessly
          integrated with your brand. Includes your logo, URL, and branded email
          notifications. Features a responsive design for desktops, tablets, and
          smartphones, a powerful real-time analytics dashboard, and multi-level
          user access management.
        </p>

        <div className="img-gallery mb-60 lg-mb-40">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="/assets/images/gallery/img_17.jpg"
                alt="gallery_img"
                className="lazy-img"
              />
            </div>
            <div className="col-sm-4">
              <img
                src="/assets/images/gallery/img_18.jpg"
                alt="gallery_img"
                className="lazy-img"
              />
              <img
                src="/assets/images/gallery/img_19.jpg"
                alt="gallery_img"
                className="lazy-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="upper-title">Process</div>
          <h2>Research & Processing.</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullaum laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit
          volupta velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
          {/* project details feature start */}
          <ProjectDetailsFeature />
          {/* project details feature end */}
        </div>
        <div className="text-feature-three text-feature-seven position-relative mt-120 lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
                <div>
                  <div className="upper-title">Final Result</div>
                  <h2>Find out the Project solution.</h2>
                </div>
                <p className="mb-55">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <ul className="style-none">
                  <li>Find the problem first</li>
                  <li>Make research and find out the solution</li>
                  <li>Finalize the solution & apply.</li>
                </ul>
                <div className="counter-wrapper border-0 mt-10">
                  <div className="row">
                    <div className="col-xl-6 col-sm-5">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold">
                          <span className="counter">1.2</span>x
                        </div>
                        <p className="m0 fs-5 lh-base">Rapid wealth grow</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-7">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold">
                          $<span className="counter">1.3</span>b+
                        </div>
                        <p className="m0 fs-5 lh-base">
                          Cumulative trading volume
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
                <div
                  className="media-wrapper w-100 position-relative"
                  style={{
                    backgroundImage: `url(/assets/images/media/img_36.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src="/assets/images/assets/screen_20.svg"
                    alt="screen"
                    className="lazy-img shapes screen_03"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-share mt-130 sm-mt-80 d-flex justify-content-end">
          <ul className="style-none d-flex align-items-center">
            <li>Share: </li>
            <li>
              <NavLink to="#">
                <i className="bi bi-facebook"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="bi bi-twitter"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="bi bi-dribbble"></i>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <i className="bi bi-instagram"></i>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="pagination-two mt-35">
          <ul className="style-none d-flex justify-content-between">
            <li>
              <NavLink to="#">
                <span className="d-flex align-items-center align-items-md-end">
                  <i className="bi bi-arrow-left"></i>
                  <span className="ms-3 ms-md-4">
                    <span className="pr-dir text-uppercase d-block">
                      Previous
                    </span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">
                      Market Analysis.
                    </span>
                  </span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="d-flex align-items-center text-end align-items-md-end">
                  <span className="me-3 me-md-4">
                    <span className="pr-dir text-uppercase d-block">Next</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">
                      Online Banking
                    </span>
                  </span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhiteLabelProjectDetails;
