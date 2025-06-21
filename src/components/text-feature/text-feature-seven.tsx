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
    <div className="card-style-twelve w-100 text-center mt-30">
      <div className="icon m-auto tran3s d-flex align-items-center justify-content-center rounded-circle">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-20 mb-15">{title}</h4>
      <p className="ps-xl-4 pe-xl-4">{subtitle}</p>
    </div>
  );
}

const TextFeatureSeven = () => {
  return (
    <div className="text-feature-seven mt-170 lg-mt-80">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-last wow fadeInRight">
            <div className="ps-xl-5 ms-xxl-4">
              <div className="title-three mb-35 md-mb-20">
                <div className="upper-title">Management</div>
                <h2>Manage all payments easily.</h2>
              </div>
              <p className="text-lg mb-40 lg-mb-30">
                Handle everything from routing logic to settlement rules with
                powerful centralized tools.
              </p>
              <ul className="style-none">
                <li>Simple tools for effortless payment oversight.</li>
                <li>Instant access to payments on any device.</li>
                <li>Manage all transactions with ease anywhere.</li>
              </ul>
              <div className="d-flex justify-content-between align-items-center mt-65 lg-mt-50">
                <NavLink
                  to="/about-us"
                  className="btn-thirteen tran3 flex-fill"
                >
                  Learn More
                </NavLink>
                <NavLink to="/about-us" className="btn-fourteen tran3s">
                  <i className="bi bi-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 m-auto wow fadeInLeft">
            <div className="media-wrapper md-mt-60">
              <img
                src="/assets/images/assets/screen_15.png"
                alt="screen"
                className="lazy-img"
              />
            </div>
          </div>
        </div>

        <div className="border-bottom mt-40 pb-50 sm-pb-30">
          <div className="row">
            <div className="col-lg-4 d-flex wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_43.svg"
                title="Instant Wallet Transfers"
                subtitle="Move funds instantly between wallets without any extra charges."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon="/assets/images/icon/icon_44.svg"
                title="Contactless Payment Support"
                subtitle="Easily accept payments using mobile wallets like Apple Pay and Google Pay."
              />
            </div>
            <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <CardItem
                icon="/assets/images/icon/icon_45.svg"
                title="Secure Transaction Monitoring"
                subtitle="Constant fraud detection keeps your payments safe and secure."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextFeatureSeven;
