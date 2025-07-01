// gallery images
import BlockFeatureFour from "../block-feature/block-feature-four";
import BlockFeatureFourteen from "../block-feature/block-feature-fourteen";
import NumberedCardList from "../cards/numberedCardList";
import RolldownList from "../cards/rollDownList";
import FancyBannerSeven from "../fancy-banner/fancy-banner-seven";
import TextFeatureOne from "../text-feature/text-feature-one";
import WhiteLabelFeature from "./white-label-feature";

const items = [
  "Customizable back office with full brand integration",
  "Displays logo, custom URL, and branded notifications",
  "Responsive design for desktop, tablet, and mobile",
  "Dashboard with real-time insights and analytics",
  "Multi-level access control for user management",
  "Enables seamless transaction tracking and control",
];

const supportedPlatforms = [
  {
    title: "Magento",
    image: "/assets/images/assets/magento_logo.png",
  },
  {
    title: "Magento 2.0",
    image: "/assets/images/assets/magento_2.0_logo.png",
  },
  {
    title: "OpenCart",
    image: "/assets/images/assets/OpenCart_logo.png",
  },
  {
    title: "osCommerce",
    image: "/assets/images/assets/oscommerce_logo.png",
  },
  {
    title: "PrestaShop",
    image: "/assets/images/assets/prestashop_logo.png",
  },
  {
    title: "Zen Cart",
    image: "/assets/images/assets/zencart_logo.png",
  },
  {
    title: "WooCommerce",
    image: "/assets/images/assets/woocommerce_logo.png",
  },
];

// list item
// function ListItem({
//   icon,
//   text,
//   sm_text,
// }: {
//   icon: string;
//   text: string;
//   sm_text: string;
// }) {
//   return (
//     <li className="d-flex">
//       <img src={icon} alt="icon" className="lazy-img icon" />
//       <div className="ps-4">
//         <div className="text1">{text}</div>
//         <span>{sm_text}</span>
//       </div>
//     </li>
//   );
// }

const WhiteLabelProjectDetails = () => {
  return (
    <div className="project-details-one position-relative pb-150 lg-pb-80 mt-150">
      {/* <div className="project-info position-relative mb-150 lg-mb-80">
        <div className="inner-wrapper m-auto">
          <div className="d-lg-flex align-items-center">
            <h3>
              Project <span>Details</span>
            </h3>
            <ul className="style-none d-md-flex flex-fill ps-lg-5">
              <ListItem
                icon="/assets/images/icon/icon_85.svg"
                text="Date"
                sm_text="23 July, 2022"
              />
              <ListItem
                icon="/assets/images/icon/icon_86.svg"
                text="Client Name"
                sm_text="Mariona Adisson, USA"
              />
              <ListItem
                icon="/assets/images/icon/icon_87.svg"
                text="Project Type"
                sm_text="Business Consulting"
              />
            </ul>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div>
          <div className="upper-title">White Label</div>
          <h2>Merchant Back Office</h2>
        </div>
        <p>
          Fully customizable merchant back office interface, seamlessly
          integrated with your brand. Includes your logo, URL, and branded email
          notifications. Features a responsive design for desktops, tablets, and
          smartphones, a powerful real-time analytics dashboard, and multi-level
          user access management.
        </p>

        <NumberedCardList items={items} />

        <div className="img-gallery mb-60 lg-mb-40">
          <div className="row">
            <div className="col-sm-8">
              <img
                src="/assets/images/media/wl-one.png"
                alt="gallery_img"
                className="lazy-img"
              />
            </div>
            <div className="col-sm-4">
              <img
                src="/assets/images/media/wl-two.png"
                alt="gallery_img"
                className="lazy-img"
              />
              <img
                src="/assets/images/media/wl-three.png"
                alt="gallery_img"
                className="lazy-img"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="upper-title">Toolkit</div>
          <h2>Ready Integration Kits</h2>
        </div>
        <p>
          Ready-to-use integration kits enable instant merchant onboarding,
          supported by white-label documentation that aligns seamlessly with
          your brand.
        </p>
        <div className="line-wrapper border-top border-bottom pt-20 pb-60 lg-pb-40 mt-60 lg-mt-40 mb-70 lg-mb-40">
          {/* project details feature start */}
          <WhiteLabelFeature />
          {/* project details feature end */}
        </div>
        <div className="text-feature-three text-feature-seven position-relative mt-120 lg-mt-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-5 col-lg-6 ms-auto d-flex flex-column order-lg-last wow fadeInRight">
                <div>
                  <div className="upper-title">LabelPay</div>
                  <h2>Branded Standard Checkout</h2>
                </div>
                <p className="mb-55">
                  A fully responsive payment page customizable to your brand or
                  your merchant’s identity.
                </p>
                <ul className="style-none">
                  <li>Responsive page supporting multiple languages</li>
                  <li>Customizable to reflect partner or merchant identity</li>
                  <li>Includes logo, URL, and theme color customization</li>
                </ul>
                <div className="counter-wrapper border-0 mt-10">
                  <div className="row">
                    <div className="col-xl-6 col-sm-5">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold">
                          <span className="counter">1.2</span>x
                        </div>
                        <p className="m0 fs-5 lh-base">Rapid wealth grow</p>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-7">
                      <div className="counter-block-one mt-20">
                        <div className="main-count fw-bold">
                          $<span className="counter">1.3</span>b+
                        </div>
                        <p className="m0 fs-5 lh-base">
                          Cumulative trading volume
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-5 d-flex order-lg-first wow fadeInLeft">
                <div
                  className="media-wrapper w-100 position-relative"
                  style={{
                    backgroundImage: `url(/assets/images/media/wl-four.webp)`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img
                    src="/assets/images/assets/screen_20.svg"
                    alt="screen"
                    className="lazy-img shapes screen_03"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-80">
          <div className="upper-title">CartPlugin</div>
          <h2>Easy-to-Integrate Shopping Cart Plugins</h2>
        </div>
        <p>
          Integration with existing shopping carts is made easy for merchants
          through our ready-to-use third-party plugins, designed to simplify
          setup and ensure a smooth, hassle-free connection with popular
          e-commerce platforms.
        </p>

        <RolldownList items={supportedPlatforms} />
      </div>
      <BlockFeatureFour />
      <BlockFeatureFourteen />
      <FancyBannerSeven />
      <TextFeatureOne />
    </div>
  );
};

export default WhiteLabelProjectDetails;
