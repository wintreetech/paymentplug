// card item
function CardItem({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="card-style-sixteen text-center mt-25">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4
        className="fw-bold mt-35 lg-mt-30"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h4>
    </div>
  );
}

const ProductFeature = () => {
  return (
    <div className="row">
      <div className="col-lg-3 col-sm-6 wow fadeInUp">
        <CardItem
          icon="/assets/images/icon/icon_81.svg"
          title="Free Delivery within <br /> 3 days."
        />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
        <CardItem
          icon="/assets/images/icon/icon_82.svg"
          title="7 Days refund <br /> policy."
        />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
        <CardItem
          icon="/assets/images/icon/icon_83.svg"
          title="Secure payment <br /> methods"
        />
      </div>
      <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
        <CardItem
          icon="/assets/images/icon/icon_83.svg"
          title="Store pickup <br /> facility."
        />
      </div>
    </div>
  );
};

export default ProductFeature;
