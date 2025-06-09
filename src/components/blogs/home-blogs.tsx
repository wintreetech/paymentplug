import { NavLink } from "react-router-dom";
// internal
import blog_data from "../../data/blog-data";
import BlogItemOne from "./blog-item/blog-item-one";

const HomeBlogs = ({cls}:{cls?:string}) => {
  const blog_item = blog_data.filter((b) => b.page === "home");
  return (
    <div className={`blog-section-two position-relative ${cls?cls:'mt-20 pb-150 lg-pb-80'}`}>
      <div className="container">
        <div className="position-relative">
          <div className="title-one mb-30 lg-mb-10">
            <h2>Insights News.</h2>
          </div>

          <div className="row gx-xl-5">
            {blog_item.map((b, i) => (
              <div key={i} className="col-md-6">
                <BlogItemOne blog={b} />
              </div>
            ))}
          </div>

          <div className="section-btn sm-mt-60">
            <NavLink
              to="/blog"
              className="btn-seven d-inline-flex align-items-center"
            >
              <span className="text">See all blogs</span>
              <div className="icon tran3s rounded-circle d-flex align-items-center">
                <img
                  src="/assets/images/icon/icon_27.svg"
                  alt="icon"
                  className="lazy-img"
                />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/shape/shape_06.svg"
        alt="shape"
        className="lazy-img shapes shape_01"
      />
    </div>
  );
};

export default HomeBlogs;
