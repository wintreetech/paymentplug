import PartnersSliderOne from "../partners/partners-slider-one";

const HeroBannerOne = () => {
  // handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="hero-banner-two light-bg pt-200 pb-85 position-relative">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <h1 className="hero-heading text-center fw-bold wow fadeInUp mt-10">
                Your Goals, Our Expertise –{" "}
                <span className="d-inline-block position-relative">
                  Financial
                  <img
                    src="/assets/images/shape/shape_04.svg"
                    alt="shape"
                    className="lazy-img"
                  />
                </span>
                Success
              </h1>
              <p
                className="text-xl text-center pt-35 pb-35 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                Finance insights enable smart moves towards wealth & security.
              </p>
              <form
                onSubmit={handleSubmit}
                className="m-auto position-relative wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <input type="email" placeholder="Your email address..." />
                <button className="btn-four">Connect</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 m-auto">
              <div className="partner-logo-one pt-80 md-p-70">
                <p className="fw-500 text-dark text-center mb-40">
                  <span className="text-decoration-underline">
                    Join 27,000+
                  </span>{" "}
                  companies who’ve reached{" "}
                </p>
                {/* partner slider start */}
                <PartnersSliderOne />
                {/* partner slider end */}
              </div>
            </div>
          </div>
        </div>
        <img
          src="/assets/images/shape/shape_05.svg"
          alt="shape"
          className="lazy-img shapes shape_01"
        />
        <img
          src="/assets/images/shape/shape_06.svg"
          alt="shape"
          className="lazy-img shapes shape_02"
        />
        <img
          src="/assets/images/assets/screen_02.png"
          alt="screen"
          className="lazy-img shapes shape_03"
        />
        <img
          src="/assets/images/assets/screen_03.png"
          alt="screen"
          className="lazy-img shapes shape_04"
        />
      </div>
    </>
  );
};

export default HeroBannerOne;
