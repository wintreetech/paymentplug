import Slider from 'react-slick';
import { feedback_five } from '../../data/feedback-data';


// slider setting 
const slider_setting = {
  dots: true,
  arrows: false,
  centerPadding: '0px',
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  autoplay: true,
  autoplaySpeed: 6000
}

const FeedbackFive = ({border}:{border?:string}) => {
  return (
    <div className={`feedback-section-five ${border?`border-${border}`:'border-100'} position-relative pt-225 xl-pt-200 lg-pt-120 md-pt-80 pb-300 xl-pb-200 lg-pb-150`}>
    <div className="container">
      <div className="position-relative">
        <Slider {...slider_setting} className="feedback-slider-three">
          {feedback_five.map((item) => (
          <div key={item.id} className="item">
            <div className="feedback-block-five">
              <blockquote>{item.desc}</blockquote>
              <h6 className="name fw-bold">{item.name}</h6>
              <div className="text-md text-dark">{item.location}</div>
            </div>
          </div>
          ))}
        </Slider>
      </div>
    </div>
    <img src="/assets/images/shape/shape_24.svg" alt="shape" className="lazy-img shapes shape_01"/>
    <img src="/assets/images/assets/screen_19.png" alt="shape" className="lazy-img shapes shape_02"/>
  </div>
  );
};

export default FeedbackFive;