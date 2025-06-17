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
      className={`card-style-six text-center vstack tran3s w-100 mt-30 ${
        isActive ? "active" : ""
      }`}
    >
      <div className="icon rounded-circle d-flex align-items-center justify-content-center m-auto">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-40 md-mt-30 mb-25">{title}</h4>
      <p className="mb-20">{subtitle}</p>
      {/* <NavLink
        to="/service-v2"
        className="arrow-btn tran3s m-auto stretched-link"
      >
        <img
          src="/assets/images/icon/icon_09.svg"
          alt="icon"
          className="lazy-img"
        />
      </NavLink> */}
    </div>
  );
}

const BlockFeatureFour = () => {
  return (
    <div className="block-feature-four position-relative mt-60 lg-mt-80 pb-150 lg-pb-80">
      <div className="container">
        <div className="row align-items-center">
          <div className=" col-lg-9 wow fadeInUp">
            <div className="title-one mb-50 lg-mb-20">
              <div className="upper-title">Multitender</div>
              <h2>Seamless Integration of Multiple Payment Options</h2>
              <p>
                With PAYMENT PLUG, you get access to an extensive suite of
                payment instruments, all under one roof. It’s the fastest way to
                launch your PSP and serve businesses of all sizes with ease.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-xxl-5">
          <div className="col-lg-4 d-flex wow fadeInUp">
            <BlockCardItem
              icon="/assets/images/icon/icon_20.svg"
              title="Multiple Methods"
              subtitle="Accept major payment types like cards, net banking, SEPA Express, and vouchers."
            />
          </div>

          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.1s">
            <BlockCardItem
              icon="/assets/images/icon/icon_21.svg"
              title="Unified Platform"
              subtitle="Access and manage all payment methods within a single, integrated system for smoother operations."
              isActive={true}
            />
          </div>
          <div className="col-lg-4 d-flex wow fadeInUp" data-wow-delay="0.2s">
            <BlockCardItem
              icon="/assets/images/icon/icon_22.svg"
              title="Quick Launch"
              subtitle="Launch your PSP business effortlessly with all essential payment tools available out of the box."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFeatureFour;
