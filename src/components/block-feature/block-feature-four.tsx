import { NavLink } from "react-router-dom";

// card item
function BlockCardItem({
  icon,
  title,
  subtitle,
  isActive,
}: {
  icon: string;
  title: string;
  subtitle: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`card-style-six text-center vstack tran3s w-100 mt-30 ${isActive ? "active" : ""}`}
    >
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-40 md-mt-30 mb-25">{title}</h4>
      <p className="mb-20">{subtitle}</p>
      <NavLink to="/service-v2"
        className="arrow-btn tran3s m-auto stretched-link"
      >
        <img src="/assets/images/icon/icon_09.svg" alt="icon" className="lazy-img" />
      </NavLink>
    </div>
  );
}

const BlockFeatureFour = () => {
  return (
    <div className="block-feature-four position-relative mt-150 lg-mt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-9 m-auto wow fadeInUp">
            <div className="title-one text-center mb-50 lg-mb-20">
              <h2>We are here to help you build, & protect your wealth.</h2>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-4 d-flex wow fadeInUp">
            <BlockCardItem
              icon="/assets/images/icon/icon_20.svg"
              title="Expert Advisor"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
            />
          </div>

          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
            <BlockCardItem
              icon="/assets/images/icon/icon_21.svg"
              title="Highly Secured"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
              isActive={true}
            />
          </div>
          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
            <BlockCardItem
              icon="/assets/images/icon/icon_22.svg"
              title="Management"
              subtitle="Elit esse cillum dolore eu fugiat nulla pariatur"
            />
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_01" />
      <img src="/assets/images/shape/shape_06.svg" alt="shape" className="lazy-img shapes shape_02" />
    </div>
  );
};

export default BlockFeatureFour;
