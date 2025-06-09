import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import HeaderTwo from "../layout/header/header-two";
import blog_data from "../data/blog-data";
import BlogDetailsArea from "../components/blogs/blog-details/blog-details-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function BlogDetailsPage() {

  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blog_data.find(b => Number(b.id) === Number(id));

  useEffect(() => {
    if (!blog) {
      navigate("/not-found");
    }
  }, [blog, navigate]);

  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Blog Details" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo />
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Single Blog Details"
            subtitle="Meet our experts, guiding you through financial intricacies with precision"
            page="Blog"
            bg_img="/assets/images/media/img_32.jpg"
            style_2={true}
            shape="/assets/images/shape/shape_35.svg"
          />
          {/* breadcrumb end */}

          {/* blog details area start */}
          {blog ? (
            <BlogDetailsArea blog={blog} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any blog this id {id}</h3>
              </div>
            </div>
          )}
          {/* blog details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner />
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>

    </Wrapper>
  );
}
