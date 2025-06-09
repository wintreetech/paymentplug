import Slider from "react-slick";

// slider setting
const slider_setting = {
  dots: false,
  arrows: false,
  centerPadding: "0px",
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

// slider logos
const slider_logos: string[] = [
  '/assets/images/logo/media_01.png',
  '/assets/images/logo/media_02.png',
  '/assets/images/logo/media_03.png',
  '/assets/images/logo/media_04.png',
  '/assets/images/logo/media_05.png',
  '/assets/images/logo/media_03.png',
  '/assets/images/logo/media_01.png',
];

const PartnersSliderOne = () => {
  return (
    <Slider {...slider_setting} className="partner-slider-one">
      {slider_logos.map((logo, i) => (
        <div key={i} className="item">
          <div className="logo d-flex align-items-center justify-content-center">
            <img src={logo} alt="logo" />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PartnersSliderOne;
