import { NavLink } from "react-router-dom";

const feature_data = [
  {
    id: 1,
    img: "/assets/images/assets/Integrate.svg",
    title: "Integrate",
    desc: "Connect to our platform effortlessly using powerful APIs and SDKs for a fast, flexible setup. API & SDK support.",
  },
  {
    id: 2,
    img: "/assets/images/assets/Customize.svg",
    title: "Customize",
    desc: "Design your branded checkout experience and tailor the platform to match your business model.",
  },
  {
    id: 3,
    img: "/assets/images/assets/Launch.svg",
    title: "Launch & Scale",
    desc: "Go live with enterprise-grade security, global reach, and real-time insights to fuel your growth.",
  },
];

const BlockFeatureFifteen = () => {
  return (
    <div className="block-feature-fifteen mt-90">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="title-two text-center mb-30 sm-mb-10">
                <div className="upper-title-two mb-10">
                  Simple, secure, and scalable
                </div>
                <h2 className="text-dark">
                  Your Journey to <br />
                  Smarter Payments
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {feature_data.map((f, i) => (
              <div
                key={f.id}
                className="col-md-4 d-flex wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                <div className="card-style-twentyOne mt-40">
                  <div className="icon rounded-circle m-auto position-relative d-flex align-items-center justify-content-center">
                    <img src={f.img} alt="icon" className="lazy-img" />
                    <span className="numb position-absolute d-flex align-items-center justify-content-center rounded-circle">
                      {f.id}
                    </span>
                  </div>

                  <h4 className="text-center mt-40">{f.title} </h4>
                  <p className="text-center text-lg mt-50 pe-xxl-5 ps-xxl-5">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-40 position-relative line-btn">
            <NavLink to="/contact" className="btn-twenty">
              talk to sales
            </NavLink>
          </div>

          {/* <img
            src="/assets/images/shape/shape_05.svg"
            alt="shape"
            className="lazy-img shapes shape_01"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureFifteen;
