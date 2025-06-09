import { useState } from "react";
// internal
import portfolio_data from "../../data/portfolio-data";
import ImageLightbox from "../common/image-lightbox";
import usePagination from "../../hooks/use-pagination";
import { IPortfolio } from "../../types/portfolio-d-t";
import Pagination from "../../ui/pagination";
import { NavLink } from "react-router-dom";

const ProjectTwoArea = () => {
  const portfolio_items = portfolio_data.filter(
    (p) => p.portfolio === "portfolio-v3-page"
  );
  const {currentItems,handlePageClick,pageCount} = usePagination<IPortfolio>(portfolio_items,4);
  // images
  const images = portfolio_items.map((p) => p.img);
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState<number>(0);
  // image open state
  const [open, setOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setOpen(true);
  };
  return (
    <>
      <div className="portfolio-two position-relative mt-150 lg-mt-80 mb-150 lg-mb-60">
        <div className="container">
          <div className="position-relative">
            <div id="isotop-gallery-wrapper" className="column-two">
              <div className="grid-sizer"></div>
              <div className="row">
                {currentItems?.map((item, i) => (
                  <div key={i} className="col-md-6">
                    <div className="portfolio-block-one mb-60 lg-mb-40">
                      <div className="img-holder round-border">
                        <img
                          src={item.img}
                          alt="portfolio-img"
                          className="img-meta w-100 tran5s"
                        />
                        <a
                          className="fancybox expend d-flex align-items-center justify-content-center tran3s cursor-pointer"
                          title="Click for large view"
                          onClick={() => handleImagePopup(i)}
                        >
                          <i className="bi bi-plus"></i>
                        </a>
                      </div>
                      <div className="caption">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <ul className="style-none d-flex tag">
                              <li>PRINT</li>
                              <li>DESIGN</li>
                            </ul>
                            <h6>
                              <NavLink to="#" className="pj-title">
                                Tax Preparation.
                              </NavLink>
                            </h6>
                          </div>
                          <div>
                            <NavLink to="#" className="arrow tran3s">
                              <i className="bi bi-arrow-up-right"></i>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pagination-one border-top border-bottom pt-15 pb-15 mt-40 lg-mt-10">
              <Pagination handlePageClick={handlePageClick} pageCount={pageCount} />
            </div>
          </div>
        </div>
      </div>
      {/* image light box start */}
      <ImageLightbox
        images={images}
        visible={open}
        setVisible={setOpen}
        index={photoIndex}
        setIndex={setPhotoIndex}
      />
      {/* image light box end */}
    </>
  );
};

export default ProjectTwoArea;
