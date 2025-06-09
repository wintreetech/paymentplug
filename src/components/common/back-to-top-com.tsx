import { useEffect } from "react";
import BackToTop from "../../lib/back-to-top";

function BackToTopCom() {
  useEffect(() => {
    BackToTop(".scroll-top");
  }, []);
  return (
    <button className="scroll-top d-none">
      <i className="bi bi-arrow-up-short"></i>
    </button>
  );
}

export default BackToTopCom;
