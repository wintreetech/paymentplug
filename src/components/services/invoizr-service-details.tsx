import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import VerticalCard from "../cards/verticalCard";

// ServiceNav
function ServiceNav({
  title,
  sectionId = null,
  active,
}: {
  title: string;
  sectionId?: string | null;
  active?: boolean;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (sectionId && typeof sectionId === "string" && sectionId.length > 0) {
      const targetElement = document.getElementById(sectionId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      navigate(location.pathname + `#${sectionId}`, { replace: true });
    }
  };

  return (
    <li>
      <NavLink
        to={sectionId ? `/#${sectionId}` : "/#"}
        className={`d-flex align-items-center w-100 ${active ? "active" : ""}`}
        onClick={handleNavLinkClick}
      >
        <span>{title}</span>
      </NavLink>
    </li>
  );
}
// CardItem
function CardItem({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img" />
      </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15" style={{ fontSize: "18px" }}>
        {title}
      </h4>
      <p className="m0" style={{ fontSize: "16px" }}>
        {subtitle}
      </p>
    </div>
  );
}
const InvoizrServiceDetails = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <div
                className="heading"
                id="Integrated-Web-Interface"
                style={{ scrollMarginTop: "100px" }}
              >
                Integrated Web Interface
              </div>
              <h2>
                Fully Integrated Web & App Interface for Access to Invoices
              </h2>
              <p>
                The platform delivers invoicing via the INVOIZR mobile app and
                web module, allowing merchants to access details anytime,
                whether in the field or office.
              </p>

              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon="/assets/images/icon/icon_81.svg"
                      title="Platforms"
                      subtitle="Invoicing available via INVOIZR mobile app and web module for flexible use."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon="/assets/images/icon/icon_82.svg"
                      title="Accessibility"
                      subtitle="Merchants can access invoice details anytime, anywhere."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon="/assets/images/icon/icon_83.svg"
                      title="Flexibility"
                      subtitle=" Suitable for use both in the field and in the office."
                    />
                  </div>
                </div>
              </div>

              <div className="divider" />

              {/* Configurable Monitoring Rules start */}
              <div
                className="heading"
                id="White-Label"
                style={{ scrollMarginTop: "100px" }}
              >
                White-Label INVOIZR
              </div>
              <h2>Customizable White-Label INVOIZR Reflecting Your Brand</h2>
              <p>
                The INVOIZR app is fully customizable to reflect your brand
                identity. You can personalize the logo and icon, adjust theme
                colors, and publish the app on the App Store and Play Store
                under your own brand name.
              </p>

              <div>
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Logo & Icon Customization"
                  description="Easily personalize your brand’s logo and app icon to maintain a consistent and professional look across all platforms."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Theme Color Customization"
                  description="Adjust the app’s theme colors to align perfectly with your brand’s unique color scheme and style."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Branded App Publishing"
                  description="Upload and launch the INVOIZR app on both the App Store and Play Store under your own brand name, giving you full ownership and visibility."
                />
              </div>

              <div className="divider" />

              {/* Alerts and Reports */}
              <div
                className="heading"
                id="Itemized-Invoicing"
                style={{ scrollMarginTop: "100px" }}
              >
                Itemized Invoicing with Tax
              </div>
              <h2>Itemized Invoices with Tax & Product Management</h2>
              <p>
                Easily create itemized invoices with up-to-date product and
                service lists. Configure tax per item, set default lists, and
                send invoices directly via email.
              </p>

              <ul className="style-none list-item pb-20">
                <li>
                  Create detailed invoices based on your product and service
                  list
                </li>
                <li>
                  Easily update your product list while generating invoices
                </li>
                <li>Set tax rates individually for each product</li>
                <li>
                  Configure default product and service lists for faster
                  invoicing
                </li>
                <li>Send itemized invoices directly to customers via email</li>
              </ul>

              <div className="divider" />

              {/* Auto and Manual Suspension */}
              <div
                className="heading"
                id="Invoice-Management"
                style={{ scrollMarginTop: "100px" }}
              >
                Invoice Management
              </div>
              <h2>Invoice Management via INVOIZR App & Web Interface</h2>
              <p>
                Manage invoices easily through INVOIZR and the web
                interface—create, regenerate, cancel invoices, and send
                reminders via email or SMS.
              </p>

              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon="/assets/images/icon/icon_81.svg"
                      title="Multi-Platform Access"
                      subtitle="Conveniently manage invoices through the INVOIZR mobile app or web interface, giving you flexibility wherever you work."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon="/assets/images/icon/icon_82.svg"
                      title="Flexible Invoice Control"
                      subtitle="Create new invoices, regenerate existing ones, or cancel them effortlessly to keep your records accurate and up to date."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon="/assets/images/icon/icon_83.svg"
                      title="Automated Reminders"
                      subtitle=" Send timely payment reminders to customers via email, SMS, or both, helping you stay on top of collections."
                    />
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div
                className="heading"
                id="Share"
                style={{ scrollMarginTop: "100px" }}
              >
                Share via INVOIZR
              </div>
              <h2>Share Invoices via INVOIZR on WhatsApp, SMS, Email & More</h2>
              <p>
                Designed for fast online input verification, this API offers
                quick response times and flexible integration with various
                partner platforms. It easily connects merchant forms on partner
                websites to our solution.
              </p>

              <div className="divider" />

              {/* Configurable Monitoring Rules start */}
              <div
                className="heading"
                id="Security"
                style={{ scrollMarginTop: "100px" }}
              >
                Security & Compliance
              </div>
              <h2>Secure Transactions with Advanced Compliance</h2>
              <p>
                Your data and customer information stay protected through
                secured payment links, identity checks, PCI DSS-compliant APIs,
                encrypted communication, and OTP-based signup.
              </p>

              <div>
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Data Protection"
                  description="Customer and business data is handled with the highest sensitivity, ensuring security at every level of the platform."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Secure Access & Identity Verification"
                  description="Includes email and mobile number checks, OTP-based app signup, and the use of C-tokens and security keys to verify user identity."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_82.svg"
                  title="Branded App Publishing"
                  description="Built with PCI DSS Level 1 compliant APIs, JWT authentication, and TLS 1.2 protocol to ensure secure transactions and full regulatory compliance."
                />
              </div>
            </div>
          </div>

          {/* side section */}
          <div className="col-xxl-3 col-lg-4">
            <aside
              className="md-mt-40 sidebar-wrapper"
              style={{
                position: "sticky",
                zIndex: 100, // Ensure it stays on top if overlapping occurs
              }}
            >
              <div className="service-nav-item">
                <ul className="style-none">
                  <ServiceNav
                    title="Integrated Web Interface"
                    sectionId="Integrated-Web-Interface"
                    active={true}
                  />
                  <ServiceNav
                    title="White-Label INVOIZR"
                    sectionId="White-Label"
                  />
                  <ServiceNav
                    title="Itemized Invoicing with Tax"
                    sectionId="Itemized-Invoicing"
                  />
                  <ServiceNav
                    title="Invoice Management"
                    sectionId="Invoice-Management"
                  />
                  <ServiceNav title="Share via INVOIZR" sectionId="Share" />
                  <ServiceNav
                    title="Security & Compliance"
                    sectionId="Security"
                  />
                </ul>
              </div>
              <div className="contact-banner text-center mt-40 lg-mt-20">
                <h3 className="mb-20">Any Questions? Let’s talk</h3>
                <NavLink to="/contact" className="tran3s fw-500">
                  Let’s Talk
                </NavLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoizrServiceDetails;
