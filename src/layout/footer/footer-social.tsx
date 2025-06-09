import { NavLink } from "react-router-dom";


const FooterSocial = () => {
  return (
    <>
      <li>
        <NavLink to="https://www.facebook.com/" target="_blank">
          <i className="bi bi-facebook"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://dribbble.com/" target="_blank">
          <i className="bi bi-dribbble"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="https://www.instagram.com/" target="_blank">
          <i className="bi bi-instagram"></i>
        </NavLink>
      </li>
    </>
  );
};

export default FooterSocial;
