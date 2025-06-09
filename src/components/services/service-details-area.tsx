import { NavLink } from 'react-router-dom';

// ServiceNav
function ServiceNav({icon,title,active}:{icon:string;title:string;active?:boolean}) {
  return (
    <li>
      <NavLink to="#" className={`d-flex align-items-center w-100 ${active?'active':''}`}>
        <img src={icon} alt="icon" className="lazy-img"/>
          <span>{title}</span>
      </NavLink>
  </li>
  )
}
// CardItem
function CardItem({icon,title,subtitle}:{icon:string;title:string;subtitle:string}) {
  return (
    <div className="card-style-sixteen text-center mt-40">
      <div className="icon m-auto tran3s rounded-circle d-flex align-items-center justify-content-center">
        <img src={icon} alt="icon" className="lazy-img"/>
       </div>
      <h4 className="fw-bold mt-35 lg-mt-30 mb-15">{title}</h4>
      <p className="m0">{subtitle}</p>
    </div>
  )
}
const ServiceDetailsArea = () => {
  return (
    <div className="service-details mt-150 lg-mt-80 mb-100 lg-mb-80">
      <div className="container">
        <div className="row">
          <div className="col-xxl-9 col-lg-8 order-lg-last">
            <div className="details-meta ps-xxl-5 ps-xl-3">
              <h2>Multiple Accounts for flexible banking.</h2>
              <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.They can actually generate value and create opportunities. </p>
              <p>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify and leverage the potential within their risk and compliance functions, enabling them to thrive in an ever-changing business landscape.</p>
              <div className="img-meta mb-60 lg-mb-40">
                <img src="/assets/images/media/img_35.jpg" alt="service_img" className="lazy-img w-100 rounded-4"/>
              </div>
              <h3>Our Processing.</h3>
              <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.</p>
              <div className="line-wrapper pb-30 mt-60 lg-mt-40 mb-70 lg-mb-40">
                <div className="row">
                  <div className="col-md-4 wow fadeInUp">
                    <CardItem icon="/assets/images/icon/icon_81.svg" title='Collect Doc' subtitle='We collect require documents & send for check' />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                  <CardItem icon="/assets/images/icon/icon_82.svg" title='Check & Finalize' subtitle='We check the documents & send for final approval' />
                  </div>
                  <div className="col-md-4 wow fadeInUp" data-wow-delay="0.2s">
                  <CardItem icon="/assets/images/icon/icon_83.svg" title='Approved' subtitle='After approve you ready to use your accounts' />
                  </div>
                </div>
              </div>
              <div className="light-bg-deep quote-wrapper position-relative mb-60 lg-mb-40">
                <div className="d-xl-flex align-items-start">
                  <img src="/assets/images/icon/icon_84.svg" alt="icon" className="lazy-img icon"/>
                    <div className="ps-xl-5">
                      <blockquote>Quick solutions coupled with extraordinary performance— a recommendation that is great though.</blockquote>
                      <div><span className="fw-bold">James Bond.</span> USA</div>
                    </div>
                </div>
                <img src="/assets/images/assets/ils_03.svg" alt="ils_icon" className="lazy-img shapes shape_01"/>
              </div>
              <h3>Qualifications & Requirements</h3>
              <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation. They can actually generate value and create opportunities. </p>
              <ul className="style-none list-item pb-20">
                <li>Need to be 18+</li>
                <li>Require valid passport, driving license or national ID.</li>
                <li>Need to be a job holder</li>
                <li>Must be citizen of republic of United States</li>
                <li>2 copy passport size photo.</li>
              </ul>
              <p>Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects.</p>
            </div>
          </div>
          <div className="col-xxl-3 col-lg-4 order-lg-first">
            <aside className="md-mt-40">
              <div className="service-nav-item">
                <ul className="style-none">
                  <ServiceNav icon="/assets/images/icon/icon_72.svg" title='Multiple Accounts' active={true}/>
                  <ServiceNav icon="/assets/images/icon/icon_73.svg" title='Loan Facility'/>
                  <ServiceNav icon="/assets/images/icon/icon_74.svg" title='Expense Track'/>
                  <ServiceNav icon="/assets/images/icon/icon_75.svg" title='DPS & FDR'/>
                  <ServiceNav icon="/assets/images/icon/icon_76.svg" title='International Account'/>
                  <ServiceNav icon="/assets/images/icon/icon_77.svg" title='Saving Account'/>
                  <ServiceNav icon="/assets/images/icon/icon_78.svg" title='Agent Banking'/>
                  <ServiceNav icon="/assets/images/icon/icon_79.svg" title='Credit & Debit Cards'/>
                  <ServiceNav icon="/assets/images/icon/icon_80.svg" title='Consultation'/>
                </ul>
              </div>
              <div className="contact-banner text-center mt-40 lg-mt-20">
                <h3 className="mb-20">Any Questions? Let’s talk</h3>
                <NavLink to="/contact" className="tran3s fw-500">Let’s Talk</NavLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsArea;