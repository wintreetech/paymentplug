const FancyBannerSeven = () => {
  return (
    <div className="fancy-banner-seven box-layout pt-100 lg-pt-80">
      <div className="bg-wrapper border-40 position-relative z-1 overflow-hidden pt-130 lg-pt-80 pb-130 lg-pb-80">
        <div className="container position-relative z-2">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="title-two mb-60">
                <div className="upper-title-two text-white mb-15">
                  Invoicing Solution
                </div>
                <h2 className="text-white">Create & Manage Invoices Online</h2>
              </div>
            </div>
            <div className="col-xl-5 col-md-6 ms-auto">
              <ul className="style-none sm-mt-60">
                <li>Smart invoicing for seamless payments</li>
                <li>Access and manage from any platform</li>
                <li>Customizable invoices for every need</li>
                <li>Secure billing with layered protection</li>
              </ul>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shape/shape_50.svg"
          alt="shape"
          className="lazy-img shapes shape_01"
        />
      </div>
    </div>
  );
};

export default FancyBannerSeven;
