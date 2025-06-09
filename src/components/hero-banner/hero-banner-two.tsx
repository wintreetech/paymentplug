import Slider from "react-slick";
// internal
import { NavLink } from "react-router-dom";

// slider bg
const slider_bg = [
  '/assets/images/media/img_01.jpg',
  '/assets/images/media/img_02.jpg',
  '/assets/images/media/img_03.jpg'
];
// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  autoplaySpeed: 7000,
};

const HeroBannerTwo = () => {
  return (
    <div className="hero-banner-one pt-225 xl-pt-200 lg-pt-150 pb-150 lg-pb-100 position-relative">
      <Slider {...slider_setting} className="hero-slider-one m0">
        {slider_bg.map((bg, i) => (
          <div className="item m0" key={i}>
            <div
              className="hero-img"
              style={{ backgroundImage: `url(${bg})` }}
            ></div>
          </div>
        ))}
      </Slider>
      <div className="container position-relative">
        <div className="row">
          <div className="col-xl-6 col-lg-7 ms-auto">
            <h1 className="hero-heading d-inline-block position-relative wow fadeInUp">
              Your business <br />
              Consultant & <br />
              Solution.
            </h1>
            <p
              className="text-xl text-white pt-35 pb-25 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              Empowering businesses with innovative strategies and actionable
              recommendations
            </p>
            <NavLink to="/contact"
              className="btn-two icon-link wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <span>Let’s Talk</span>
              <img src="/assets/images/icon/icon_02.svg" alt="icon" className="lazy-img icon ms-2" />
            </NavLink>
          </div>
        </div>
      </div>
      <NavLink to="/contact"
        className="more-btn rounded-circle d-flex align-items-center justify-content-center tran3s wow fadeInLeft"
        target="_blank"
      >
        <i className="bi bi-arrow-up-right"></i>
      </NavLink>
    </div>
  );
};

export default HeroBannerTwo;
