import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderTwo from "../layout/header/header-two";
import BreadcrumbOne from "../components/breadcrumb/breadcrumb-one";
import product_data from "../data/product-data";
import ProductDetailsArea from "../components/shop/product-details/product-details-area";
import FancyBannerThree from "../components/fancy-banner/fancy-banner-three";
import NewsletterBanner from "../components/newsletter/newsletter-banner";
import FooterThree from "../layout/footer/footer-three";

export default function ShopDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = [...product_data].find((p) => Number(p.id) === Number(id));

  useEffect(() => {
    if (!product) {
      navigate("/not-found");
    }
  }, [product, navigate]);
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Shop details" />
      {/* seo title */}
    
      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderTwo/>
        {/* header end */}
        <main>
          {/* breadcrumb start */}
          <BreadcrumbOne
            title="Our Product Showcase"
            subtitle="Meet our products, guiding you through financial intricacies with precision"
            page="Shop"
            bg_img="/assets/images/media/img_47.jpg"
            shape="/assets/images/shape/shape_26.svg"
          />
          {/* breadcrumb end */}

          {/* shop details area start */}
          {product ? (
            <ProductDetailsArea product={product} />
          ) : (
            <div className="container">
              <div className="mt-80 mb-80 text-center">
                <h3>Not Found Any Product this id {id}</h3>
              </div>
            </div>
          )}
          {/* shop details area end */}

          {/* fancy banner three start */}
          <FancyBannerThree />
          {/* fancy banner three end */}

          {/* news letter start */}
          <NewsletterBanner/>
          {/* news letter end */}
        </main>

        {/* footer start */}
        <FooterThree style_2={true} />
        {/* footer end */}
      </div>
    </Wrapper>
  );
}
