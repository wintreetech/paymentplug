import { NavLink } from "react-router-dom";


const ProjectDetailsTwoArea = () => {
  return (
    <div className="project-details-two light-bg border-top pt-150 lg-pt-80 pb-95 lg-pb-60">
      <div className="container">
        <div className="bg-wrapper">
          <div className="row">
            <div className="col-lg-7">
              <div className="slider-wrapper">
                <div id="imageCarousel" className="carousel slide h-100">
                  <div className="carousel-inner h-100">
                    <div
                      className="carousel-item h-100 active"
                      style={{ backgroundImage: `url(/assets/images/media/img_37.jpg)` }}
                    ></div>
                    <div
                      className="carousel-item h-100"
                      style={{ backgroundImage: `url(/assets/images/media/img_01.jpg)` }}
                    ></div>
                    <div
                      className="carousel-item h-100"
                      style={{ backgroundImage: `url(/assets/images/media/img_02.jpg)` }}
                    ></div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="prev"
                  >
                    <i className="bi bi-chevron-left"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#imageCarousel"
                    data-bs-slide="next"
                  >
                    <i className="bi bi-chevron-right"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info-wrapper">
                <h3 className="fw-bold">Details</h3>
                <p className="pt-10 pb-5">
                  The Internet advertising famous today behaved lately.
                </p>
                <ul className="style-none list-meta">
                  <li className="d-flex align-items-center">
                    <div className="icon">
                      <img src="/assets/images/icon/icon_85.svg" alt="" className="lazy-img"/>
                    </div>
                    <div className="ps-4">
                      <div className="text1">Date</div>
                      <span>23 July, 2022</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon">
                      <img src="/assets/images/icon/icon_88.svg" alt="icon" className="lazy-img" />
                    </div>
                    <div className="ps-4">
                      <div className="text1">Client Name</div>
                      <span>Mariona Adisson, USA</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon">
                      <img src="/assets/images/icon/icon_89.svg" alt="icon" className="lazy-img" />
                    </div>
                    <div className="ps-4">
                      <div className="text1">Project Type</div>
                      <span>Business Consulting</span>
                    </div>
                  </li>
                </ul>
                <div className="social-share mt-40 d-flex">
                  <ul className="style-none d-flex align-items-center">
                    <li>Share: </li>
                    <li>
                      <NavLink to="#">
                        <i className="bi bi-facebook"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="bi bi-twitter"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="bi bi-dribbble"></i>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="bi bi-instagram"></i>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination-two border-0 mt-20">
          <ul className="style-none d-flex justify-content-between">
            <li>
              <NavLink to="#">
                <span className="d-flex align-items-center align-items-md-end">
                  <i className="bi bi-arrow-left"></i>
                  <span className="ms-3 ms-md-4">
                    <span className="pr-dir text-uppercase d-block">
                      Previous
                    </span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">
                      Market Analysis.
                    </span>
                  </span>
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="#">
                <span className="d-flex align-items-center text-end align-items-md-end">
                  <span className="me-3 me-md-4">
                    <span className="pr-dir text-uppercase d-block">Next</span>
                    <span className="pr-name d-none d-md-block tran3s fw-500">
                      Online Banking
                    </span>
                  </span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsTwoArea;
