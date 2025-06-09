import { NavLink } from "react-router-dom";

// props type
type IProps = {
  title: string;
  subtitle: string;
  bg_img?: string;
  shape: string;
  page: string;
  cls?: string;
  style_2?: boolean;
};

const BreadcrumbOne = ({
  title,
  subtitle,
  bg_img = '/assets/images/media/img_26.jpg',
  page,
  cls='',
  style_2 = false,
  shape
}: IProps) => {
  return (
    <>
        <div
          className="inner-banner-one pt-225 lg-pt-200 md-pt-150 pb-100 md-pb-70 position-relative"
          style={{ backgroundImage: `url(${bg_img})` }}
        >
          <div className="container position-relative">
            {!style_2 && (
              <div className="row align-items-center">
                <div className="col-lg-7">
                  <h1 className={`hero-heading d-inline-block position-relative ${cls}`}>
                    {title} <img src={shape} alt="shape" />
                  </h1>
                </div>
                <div className="col-xl-4 col-lg-5 ms-auto">
                  <p className="text-white text-lg mb-70 lg-mb-40">
                    {subtitle}
                  </p>
                  <ul className="style-none d-inline-flex pager">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>/</li>
                    <li>{page}</li>
                  </ul>
                </div>
              </div>
            )}
            {style_2 && (
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h1 className={`hero-heading d-inline-block position-relative ${cls}`}>
                    {title} <img src={shape} alt="shape" />
                  </h1>
                </div>
                <div className="col-xl-4 col-lg-5 ms-auto">
                  <p className="text-white text-lg mb-70 lg-mb-40">
                    {subtitle}
                  </p>
                  <ul className="style-none d-inline-flex pager">
                    <li>
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li>/</li>
                    <li>{page}</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
    </>
  );
};

export default BreadcrumbOne;
