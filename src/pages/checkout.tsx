import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";
import HeaderOne from "../layout/header/header-one";
import CheckoutArea from "../components/checkout/checkout-area";

export default function CheckoutPage() {
  return (
    <Wrapper>

      {/* seo title */}
      <SEOCom title="Checkout" />
      {/* seo title */}

      <div className="main-page-wrapper">
        {/* header start */}
        <HeaderOne/>
        {/* header end */}
        <main>
          {/* checkout area start */}
          <CheckoutArea />
          {/* checkout area end */}
        </main>
      </div>
    
    </Wrapper>
  );
}
