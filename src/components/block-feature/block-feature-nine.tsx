import { NavLink } from "react-router-dom";

// card item
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-thirteen text-center vstack tran3s w-100 mt-30">
      <div className="icon d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <p className="mt-45 lg-mt-30 mb-30 lg-mb-20">{title}</p>
      <h3 className="fw-500">{subtitle}</h3>
    </div>
  );
}

const BlockFeatureNine = () => {
  return (
    <div className="block-feature-nine position-relative pt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="title-four text-center mb-30 lg-mb-10">
          <h2>What We Do</h2>
        </div>

        <div className="row gx-xl-5 justify-content-center">
          <div className="col-lg-4 col-md-6 d-flex wow fadeInUp">
            <CardItem
              icon="/assets/images/icon/icon_51.svg"
              title="SOLUTION"
              subtitle="Get all digital solution from our expert"
            />
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <CardItem
              icon="/assets/images/icon/icon_52.svg"
              title="REPUTATED"
              subtitle="13+ years of successful client relations."
            />
          </div>
          <div
            className="col-lg-4 col-md-6 d-flex wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <CardItem
              icon="/assets/images/icon/icon_53.svg"
              title="SUPPORT"
              subtitle="Get quick & reliable support by us."
            />
          </div>
        </div>

        <h3 className="heading font-magnita text-white mt-110 lg-mt-80">
          Design, <span>Marketing,</span> Branding, <span>Development</span> &
          more.{" "}
          <NavLink to="#">
            <img src="/assets/images/icon/icon_54.svg" alt="arrow" className="lazy-img" />
          </NavLink>
        </h3>
      </div>
      <img src="/assets/images/shape/shape_21.svg" alt="shape" className="lazy-img shapes shape_01" />
      <img src="/assets/images/shape/shape_22.svg" alt="shape" className="lazy-img shapes shape_02" />
      <img src="/assets/images/shape/shape_23.svg" alt="shape" className="lazy-img shapes shape_03" />
    </div>
  );
};

export default BlockFeatureNine;
