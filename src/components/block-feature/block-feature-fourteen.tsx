const feature_data = [
  {
    id: 1,
    icon: "/assets//images/icon/icon_98.svg",
    title: "Address Verification",
    desc: "Ensure transactions match customer address to reduce fraud.",
  },
  {
    id: 2,
    icon: "/assets//images/icon/icon_99.svg",
    title: "Fraud Scrubbing",
    desc: "Automatically filter and block suspicious payments.",
  },
  {
    id: 3,
    icon: "/assets//images/icon/icon_100.svg",
    title: "Whitelist & Blacklist",
    desc: "Manage trusted and blocked BINs, IPs, emails, and countries.",
  },
  {
    id: 4,
    icon: "/assets//images/icon/icon_101.svg",
    title: "Real-Time Alerts",
    desc: "Get instant notifications on potential fraud attempts.",
  },
];

const BlockFeatureFourteen = () => {
  return (
    <div className="block-feature-fourteen box-layout pt-40">
      <div className="bg-wrapper light-bg-deep border-40 position-relative z-1 pt-120 lg-pt-80 pb-150 lg-pb-80">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-6">
                <div className="title-two text-center text-lg-start mb-30">
                  <div className="upper-title-two mb-10">Fraud Guard</div>
                  <h2 className="text-dark">Intelligent Fraud Protection</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center gx-xl-5 mt-10">
              {feature_data.map((f) => (
                <div
                  key={f.id}
                  className="col-lg-6 d-flex wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="card-style-twenty d-flex position-relative z-1 tran3s w-100 mt-50 md-mt-30">
                    <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                      <img src={f.icon} alt="icon" className="lazy-img" />
                    </div>
                    <div className="text">
                      <h4 className="fw-bold mb-25">{f.title}</h4>
                      <p className="mb-20 pe-xxl-5 me-xxl-5">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="section-subheading md-mt-40">
              <p className="text-lg mb-20 mt-30">
                We use multiple fraud rules and external engines to protect
                every transaction.
              </p>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shape/shape_05.svg"
          alt="shape"
          className="lazy-img shapes shape_01"
        />
      </div>
    </div>
  );
};

export default BlockFeatureFourteen;
