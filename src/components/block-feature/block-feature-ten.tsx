

// card item
function CardItem({icon,title,subtitle}:{icon:string;title:string;subtitle:string}) {
  return (
    <div className="card-style-sixteen d-flex mt-60 lg-mt-40 mb-60 lg-mb-10">
      <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <div className="text">
        <h4 className="fw-bold mb-20 sm-mb-10">{title}</h4>
        <p className="m0">{subtitle}</p>
      </div>
    </div>
  );
}

const BlockFeatureTen = () => {
  return (
    <div className="block-feature-ten position-relative mt-150 lg-mt-80 pb-100 lg-pb-60">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="title-one mb-50 lg-mb-20">
              <h2>Complete Banking solution with great Facility.</h2>
            </div>
          </div>
        </div>
        <div className="line-wrapper position-relative">
          <div className="row gx-lg-5">
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_62.svg"
                title="Multiple Account"
                subtitle="Effortless payments and transfers with our streamlined banking process."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <CardItem
                icon="/assets/images/icon/icon_63.svg"
                title="Loan Facility"
                subtitle="Earning potential grows with dedication, innovation, & with our instruction from expert."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <CardItem
                icon="/assets/images/icon/icon_64.svg"
                title="Expense Track"
                subtitle="Strengthen budgeting through precise and instinctive monitoring of your expenses."
              />
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp">
              <CardItem
                icon="/assets/images/icon/icon_65.svg"
                title="DPS & FDR"
                subtitle="Achieve lasting dreams through disciplined savings & a thoughtful investment approach."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <CardItem
                icon="/assets/images/icon/icon_66.svg"
                title="International Account"
                subtitle="Achieve lasting dreams through disciplined savings and a thoughtful investment approach."
              />
            </div>
            <div
              className="col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <CardItem
                icon="/assets/images/icon/icon_67.svg"
                title="Credit Card"
                subtitle="Strengthen budgeting through precise and instinctive monitoring of your expenses."
              />
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/images/shape/shape_05.svg" alt="shape" className="lazy-img shapes shape_01" />
    </div>
  );
};

export default BlockFeatureTen;
