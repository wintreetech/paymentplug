// card item
type IProps = {
  icon: string;
  title: string;
  desc: string;
  bg_img: string;
};
function CardItem({ icon, title, desc, bg_img }: IProps) {
  return (
    <div className="card-style-nine vstack tran3s w-100 mt-30">
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div
          className={`icon tran3s rounded-circle d-flex align-items-center justify-content-center order-last`}
        >
          <img src={icon} alt="icon" className="lazy-img" />
        </div>
        <h3 className="fw-bold m0 text-dark order-first">{title}</h3>
      </div>
      <p className="mt-35 lg-mt-30 mb-60 lg-mb-40">{desc}</p>
      <img
        src={bg_img}
        alt="bg-img"
        className="lazy-img mt-auto me-auto ms-auto w-100"
      />
    </div>
  );
}

const BlockFeatureSeven = () => {
  return (
    <div className="block-feature-seven position-relative mt-170 lg-mt-80">
      <div className="container">
        <div className="position-relative">
          <div className="row">
            <div className="col-xl-11 wow fadeInLeft">
              <div
                className="title-one pe-xxl-5 mb-50 lg-mb-30"
                style={{ textTransform: "capitalize" }}
              >
                <h2>Connect, manage, and grow your payment operations.</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-5 d-flex wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_36.svg"
                title="Smart Routing"
                desc="Seamlessly route transactions across multiple gateways to maximize success rates and minimize cost."
                bg_img="/assets/images/assets/screen_08.svg"
              />
            </div>
            <div className="col-lg-7 d-flex wow fadeInUp" data-wow-delay="0.1s">
              <CardItem
                icon="/assets/images/icon/icon_37.svg"
                title="Smart Transaction Management"
                desc="Smart transaction tools ensure real-time control and visibility across all payment activities. Intelligent systems help businesses manage, monitor, and optimize every transaction with precision."
                bg_img="/assets/images/assets/screen_09.svg"
              />
            </div>
            <div className="col-12 d-flex wow fadeInUp" data-wow-delay="0.2s">
              <div className="card-style-nine vstack tran3s w-100 mt-30">
                <div className="row align-items-end">
                  <div className="col-lg-6">
                    <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                      <img
                        src="/assets/images/icon/icon_38.svg"
                        alt=""
                        className="lazy-img"
                      />
                    </div>
                    <h3 className="fw-bold mt-30 lg-mt-20 text-dark">
                      Global Gateway Integration
                    </h3>
                    <p className="mt-35 lg-mt-30 mb-40">
                      Global gateway integration enables seamless connections to
                      multiple acquirers, payment providers, and financial
                      networks, supporting cross-border transactions and
                      localized payment methods.
                    </p>
                  </div>
                  <div className="col-lg-5 ms-auto">
                    <img
                      src="/assets/images/assets/screen_10.svg"
                      alt=""
                      className="lazy-img mt-auto me-auto ms-auto w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/shape/shape_13.svg"
            alt="shape"
            className="lazy-img shapes shape_01"
          />
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureSeven;
