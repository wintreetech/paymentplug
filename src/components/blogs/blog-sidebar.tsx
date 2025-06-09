import { NavLink } from "react-router-dom";
import blog_data from "../../data/blog-data";

const BlogSidebar = () => {
  const recent_blogs = blog_data.filter((b) => b.page === "blog-list").slice(-2);
  return (
    <div className="blog-sidebar md-mt-60 ps-xxl-4">
      <form action="#" className="sidebar-search">
        <input type="text" placeholder="Search.." />
        <button className="tran3s">
          <i className="bi bi-search"></i>
        </button>
      </form>
      <div className="blog-category mt-60 lg-mt-40">
        <h3 className="sidebar-title">Category</h3>
        <ul className="style-none">
          <li>
            <NavLink to="#">
              Digital <span>(3)</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Marketing <span>(4)</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Consultation <span>(8)</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Payments <span>(5)</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="#">
              Banking <span>(7)</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="blog-recent-news mt-60 lg-mt-40">
        <h3 className="sidebar-title">Recent News</h3>
        {recent_blogs.map((b,i) => (
        <article key={i} className="recent-news">
          <figure
            className="post-img"
            style={{
              backgroundImage: `url(${b.img})`,
            }}
          ></figure>
          <div className="post-data">
            <div className="date">{b.date}</div>
            <NavLink to={`/blog-details/${b.id}`} className="blog-title">
              <h3>{b.title}</h3>
            </NavLink>
          </div>
        </article>
        ))}
      </div>

      <div className="blog-keyword mt-60 lg-mt-40">
        <h3 className="sidebar-title">Keywords</h3>
        <ul className="style-none d-flex flex-wrap">
          <li>
            <NavLink to="#">Finance</NavLink>
          </li>
          <li>
            <NavLink to="#">Business</NavLink>
          </li>
          <li>
            <NavLink to="#">Online Banking</NavLink>
          </li>
          <li>
            <NavLink to="#">Consultation</NavLink>
          </li>
          <li>
            <NavLink to="#">Branding</NavLink>
          </li>
          <li>
            <NavLink to="#">Cards</NavLink>
          </li>
          <li>
            <NavLink to="#">Payments</NavLink>
          </li>
          <li>
            <NavLink to="#">Loan</NavLink>
          </li>
        </ul>
      </div>
      <div className="contact-banner text-center mt-50 lg-mt-30">
        <h3 className="mb-20">
          Any Questions? <br />
          Let’s talk
        </h3>
        <NavLink to="/contact" className="tran3s fw-500">
          Let’s Talk
        </NavLink>
      </div>
    </div>
  );
};

export default BlogSidebar;
