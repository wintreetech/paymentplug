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
const ServiceDetailsArea = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-150 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <div className="heading" id="Monitoring">
                Monitoring Rules
              </div>
              <h2>Detect and control risk across your payment flow.</h2>
              <p>
                The default monitoring rules are thoughtfully designed based on
                the official compliance guidelines provided by VISA and
                MasterCard. These rules serve as a foundational layer for risk
                detection, helping to identify unusual transaction patterns,
                suspicious merchant behavior, and potential fraud indicators. By
                aligning with industry standards, they ensure that your payment
                operations remain secure, compliant, and efficient. These
                include:
              </p>

              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon="/assets/images/icon/icon_81.svg"
                      title="Transaction Monitoring"
                      subtitle="Transactions are monitored through card velocity, high-value activity, and ticket size."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon="/assets/images/icon/icon_82.svg"
                      title="Chargeback & Refund Monitoring"
                      subtitle="Chargebacks and refunds are tracked via volume, count, and refund ratios."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon="/assets/images/icon/icon_83.svg"
                      title="Sales Monitoring"
                      subtitle="Sales are analyzed by sales ratio, foreign transactions, and authorizations."
                    />
                  </div>
                </div>
              </div>

              <div className="divider" />

              <div className="img-meta mb-60 lg-mb-40">
                <img
                  src="/assets/images/media/risk-tracker-one.png"
                  alt="service_img"
                  className="lazy-img w-100 rounded-4"
                />
              </div>

              <div className="divider" />

              {/* Configurable Monitoring Rules start */}
              <div className="heading" id="Configure">
                Configurable Monitoring Rules
              </div>
              <h2>
                Custom monitoring aligns risk controls with your business.
              </h2>
              <p>
                All risk monitoring rules are completely configurable, giving
                you the flexibility to define, customize, and adjust settings
                precisely according to your unique business requirements and
                risk management goals.
              </p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon="/assets/images/icon/icon_104.svg"
                      title="Monitoring frequency "
                      subtitle="Set how often checks run, with options for daily, weekly, or monthly monitoring based on your operational needs"
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon="/assets/images/icon/icon_105.svg"
                      title="Threshold settings"
                      subtitle="Set clear alert and suspension thresholds to trigger timely actions based on predefined risk conditions."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon="/assets/images/icon/icon_106.svg"
                      title="Department alerts"
                      subtitle="Configure targeted alerts to notify the right teams and ensure timely response and accountability."
                    />
                  </div>
                </div>
              </div>

              <div className="divider" />

              {/* <div className="light-bg-deep quote-wrapper position-relative mb-60 lg-mb-40">
                <div className="d-xl-flex align-items-start">
                  <img
                    src="/assets/images/icon/icon_84.svg"
                    alt="icon"
                    className="lazy-img icon"
                  />
                  <div className="ps-xl-5">
                    <blockquote>
                      Risk comes from not knowing what you’re doing.
                    </blockquote>
                    <div>
                      <span className="fw-bold">- Warren Buffett</span>
                    </div>
                  </div>
                </div>
                <img
                  src="/assets/images/assets/ils_03.svg"
                  alt="ils_icon"
                  className="lazy-img shapes shape_01"
                />
              </div> */}

              {/* <div className="divider" /> */}

              {/* Monitoring Graphs */}
              <div
                className="heading"
                id="Graphs"
                style={{ scrollMarginTop: "100px" }}
              >
                Monitoring Graphs
              </div>
              <h2>Monitoring graphs display key metrics visually.</h2>
              <p>
                Visualize your merchant performance with real-time monitoring
                graphs updated daily, weekly, and monthly, enabling more
                effective management and control.
              </p>
              <ul className="style-none list-item pb-20">
                <li>Real-time monitoring graphs.</li>
                <li>Available daily, weekly, monthly.</li>
                <li>Clear merchant performance view.</li>
                <li>Better control over activity.</li>
                <li>Tracks performance trends.</li>
              </ul>

              <div className="img-meta mb-60 lg-mb-40">
                <img
                  src="/assets/images/media/risk-tracker-two.png"
                  alt="service_img"
                  className="lazy-img w-100 rounded-4"
                />
              </div>

              <div className="divider" />

              {/* Alerts and Reports */}
              <div
                className="heading"
                id="Alerts"
                style={{ scrollMarginTop: "100px" }}
              >
                Alerts and Reports
              </div>
              <h2>Send alerts and reports to Merchant and Partner.</h2>
              <p>
                Each monitoring rule allows customized alerts and reports, which
                can be automatically routed to relevant departments within
                Merchant and Partner organizations, such as Sales, Chargebacks,
                and more.
              </p>

              <div>
                <VerticalCard
                  icon="/assets/images/icon/icon_107.svg"
                  title="Configure Alerts and Reports"
                  description="Alerts and reports can be customized for each monitoring rule to ensure relevant information is captured and shared effectively."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_108.svg"
                  title="Target Specific Departments"
                  description="Notifications can be sent to designated Merchant and Partner departments, such as Sales, Chargebacks, and others, based on their roles."
                />
                <VerticalCard
                  icon="/assets/images/icon/icon_109.svg"
                  title="Set Delivery Frequency"
                  description="Choose to deliver alerts and reports daily, weekly, or monthly, so teams receive updates at the most convenient intervals."
                />
              </div>

              <div className="divider" />

              {/* Auto and Manual Suspension */}
              <div
                className="heading"
                id="Auto"
                style={{ scrollMarginTop: "100px" }}
              >
                Auto and Manual Suspension
              </div>
              <h2>Set alert and suspension thresholds via Risk Tracker.</h2>
              <p>
                Risk Tracker lets you set customizable alert and auto-suspension
                thresholds for each monitoring rule, enabling precise and timely
                risk management.
              </p>

              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem
                      icon="/assets/images/icon/icon_110.svg"
                      title="Alert Thresholds"
                      subtitle="Set specific alert levels for each monitoring rule to receive timely notifications about potential issues."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                    <CardItem
                      icon="/assets/images/icon/icon_111.svg"
                      title="Suspension Rules"
                      subtitle="Establish automatic suspension criteria that trigger when thresholds are met, helping to mitigate risks quickly."
                    />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                    <CardItem
                      icon="/assets/images/icon/icon_112.svg"
                      title="Risk Management"
                      subtitle="These features enable proactive, focused responses to enhance security and compliance."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* side section */}
          <div className="col-xxl-3 col-lg-4 position-relative">
            <aside className={`md-mt-40 sidebar-wrapper sticky-menu`}>
              <div className="service-nav-item">
                <ul className="style-none">
                  <ServiceNav
                    title="Monitoring Rules"
                    sectionId="Monitoring"
                    active={true}
                  />
                  <ServiceNav
                    title="Configurable Monitoring"
                    sectionId="Configure"
                  />
                  <ServiceNav title="Monitoring Graphs" sectionId="Graphs" />
                  <ServiceNav title="Alerts and Reports" sectionId="Alerts" />
                  <ServiceNav
                    title="Auto and Manual Suspension"
                    sectionId="Auto"
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

export default ServiceDetailsArea;
