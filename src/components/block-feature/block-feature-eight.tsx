import { NavLink } from "react-router-dom";
// internal
import service_data from "../../data/service-data";

const BlockFeatureEight = () => {
  const services = service_data.filter((s) => s.page === "home-4");
  return (
    <div className="block-feature-eight position-relative pt-130 lg-pt-80 pb-130 lg-pb-60">
      <div className="container">
        <div className="position-relative">
          <div className="title-two mb-20 lg-mb-10">
            <h2>Card Features</h2>
          </div>
          <p className="text-lg mb-45 lg-mb-10">
            Innovative tools crafted for seamless and secure payments.
          </p>
          <div className="row">
            {services.map((item, i) => (
              <div
                key={i}
                className="col-lg-4 d-flex wow fadeInUp"
                data-wow-delay={`0.${i + 1}s`}
              >
                <div className="card-style-eleven vstack tran3s w-100 mt-30">
                  <img
                    src={item.icon}
                    alt="icon"
                    className="lazy-img icon me-auto"
                  />
                  <h4 className="fw-500 mt-30 mb-15">{item.title}</h4>
                  <p className="mb-25">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-btn md-mt-40">
            <NavLink to="products/risk-tracker" className="btn-thirteen tran3">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/shape_16.svg"
        alt="shape"
        className="lazy-img shapes shape_01"
      />
    </div>
  );
};

export default BlockFeatureEight;
