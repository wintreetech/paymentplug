import { NavLink } from "react-router-dom";

// internal
import team_data from "../../data/team-data";
import TeamSingleTwo from "./team-single-2";

const TeamSectionThree = ({ style_2 = false }: { style_2?: boolean }) => {
  const teams = team_data.filter((t) => t.page === "team-three");
  return (
    <>
      {!style_2 && (
        <div className="team-section-three light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60 mt-90 lg-mt-40">
          <div className="container">
            <div className="position-relative">
              <div className="title-one mb-40 lg-mb-10 wow fadeInUp">
                <h2>Our Advisor</h2>
              </div>

              <div className="row">
                {teams.map((item, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <TeamSingleTwo team={item} spacing="mt-35" />
                  </div>
                ))}
              </div>

              <div className="section-btn sm-mt-40">
                <NavLink to="/team-v2" className="btn-five icon-link">
                  <span className="text">See all Experts</span>
                  <div className="icon tran3s rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/shape/shape_05.svg"
            alt="shape"
            className="lazy-img shapes shape_01"
          />
          <img
            src="/assets/images/shape/shape_05.svg"
            alt="shape"
            className="lazy-img shapes shape_02"
          />
        </div>
      )}

      {style_2 && (
        <div className="team-section-three light-bg position-relative pt-120 lg-pt-60 pb-130 lg-pb-60 mt-150 lg-mt-80">
          <div className="container">
            <div className="position-relative">
              <div className="title-one mb-40 lg-mb-10 wow fadeInUp">
                <h2>Our Advisor</h2>
              </div>
              <div className="row">
                {teams.map((item, i) => (
                  <div
                    key={i}
                    className="col-lg-3 col-sm-6 wow fadeInUp"
                    data-wow-delay={`0.${i}s`}
                  >
                    <TeamSingleTwo team={item} spacing="mt-35" />
                  </div>
                ))}
              </div>

              <div className="section-btn sm-mt-40">
                <NavLink to="/team-v2" className="btn-eighteen tran3s">
                  See All
                </NavLink>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/shape/shape_47.svg"
            alt="shape"
            className="lazy-img shapes shape_03"
          />
        </div>
      )}
    </>
  );
};

export default TeamSectionThree;
