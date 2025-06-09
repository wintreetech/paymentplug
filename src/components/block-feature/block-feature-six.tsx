import { NavLink } from "react-router-dom";
// internal
import service_data from "../../data/service-data";

const BlockFeatureSix = ({ style_2 = false }: { style_2?: boolean }) => {
  const service_items = service_data.filter((s) => s.page === "home-3");
  return (
    <>
      {!style_2 &&
        <div className="block-feature-six position-relative pt-150 lg-pt-80 pb-120 lg-pb-50">
          <div className="container">
            <div className="row gx-lg-5">
              <div className="col-lg-4 wow fadeInLeft">
                <div className="title-one">
                  <h2 className="text-dark">Our Featured products.</h2>
                </div>
                <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">
                  Inciddnt ut labore et dolor magna aliu. ad mim venam, quis
                  nostru{" "}
                </p>
                <NavLink to="/service-v2"
                  className="btn-eleven d-inline-flex align-items-center"
                >
                  <span className="text">All Services</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center">
                    <img src="/assets/images/icon/icon_27.svg" alt="icon" className="lazy-img" />
                  </div>
                </NavLink>
              </div>
              <div className="col-lg-8 md-mt-50">
                <div className="row">
                  {service_items.map((item, i) => (
                    <div key={item.id}
                      className="col-md-6 d-flex wow fadeInUp"
                      data-wow-delay={`0.${i}s`}
                    >
                      <div className="card-style-eight position-relative vstack tran3s w-100 mb-30 active">
                        <div className="icon d-flex align-items-center">
                          <img src={item.icon} alt="icon" className="lazy-img"/>
                        </div>
                        <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                        <p>{item.desc}</p>
                        <NavLink to="/service-details" className="stretched-link"></NavLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <img src="/assets/images/shape/shape_11.svg" alt="shape" className="lazy-img shapes shape_01" />
          <img src="/assets/images/shape/shape_12.svg" alt="shape" className="lazy-img shapes shape_02" />
        </div>
      }

      {style_2 && 
      <div className="block-feature-six bg-two position-relative pt-150 lg-pt-60 pb-120 lg-pb-40">
        <div className="container">
          <div className="row gx-lg-5">
            <div className="col-lg-4 wow fadeInLeft">
              <div className="title-one">
                <h2>Our Featured products.</h2>
              </div>
              <p className="text-lg text-dark mt-40 md-mt-20 mb-35 md-mb-30">Inciddnt ut labore et dolor magna aliu. ad mim venam, quis nostru </p>
              <NavLink to="/contact" className="btn-eleven d-inline-flex align-items-center md-mb-60">
                <span className="text">Contact Us</span>
                <div className="icon tran3s rounded-circle d-flex align-items-center">
                  <img src="/assets/images/icon/icon_27.svg" alt="icon" className="lazy-img" />
               </div>
              </NavLink>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {service_items.map((item, i) => (
                  <div key={item.id} className="col-md-6 d-flex wow fadeInUp" data-wow-delay={`0.${i}s`}>
                    <div className="card-style-eight rounded-5 vstack tran3s w-100 mb-30">
                      <div className="icon d-flex align-items-center">
                      <img src={item.icon} alt="icon" className="lazy-img" />
                      </div>
                      <h4 className="fw-bold mt-30 mb-20">{item.title}</h4>
                      <p>{item.desc}</p>
                      <NavLink to="/service-details" className="stretched-link"></NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/images/shape/shape_11.svg" alt="shape" className="lazy-img shapes shape_01" />
        <img src="/assets/images/shape/shape_12.svg" alt="shape" className="lazy-img shapes shape_02" />
      </div>}
    </>
  );
};

export default BlockFeatureSix;
