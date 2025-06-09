import { NavLink } from "react-router-dom";
import { IBlog } from "../../../types/blog-d-t";

const BlogItemThree = ({ blog }: { blog: IBlog }) => {
  return (
    <article
      className="blog-meta-one style-two d-flex flex-column-reverse mt-35 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="post-data">
        <div className="post-info">
          <span className="fw-500 text-dark">{blog.author} -</span> {blog.date}
        </div>
        <NavLink to={`/blog-details/${blog.id}`} className="mt-15">
          <h4 className="tran3s blog-title">
            {blog.title}
          </h4>
        </NavLink>
      </div>
      <figure
        className="post-img position-relative d-flex justify-content-end align-items-end m0"
        style={{ backgroundImage: `url(${blog.img})` }}
      >
        <NavLink to={`/blog-details/${blog.id}`}
          className="round-btn stretched-link rounded-circle d-flex align-items-center justify-content-center tran3s"
        >
          <i className="bi bi-arrow-up-right"></i>
        </NavLink>
      </figure>
    </article>
  );
};

export default BlogItemThree;
