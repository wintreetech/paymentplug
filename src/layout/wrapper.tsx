import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { animationCreate } from "../utils/utils";
import BackToTopCom from "../components/common/back-to-top-com";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
 
  useEffect(() => {
    animationCreate();
  }, []);

  return (
    <>
      {children} 
      <BackToTopCom/>
      <ToastContainer/>
    </>
  );
};

export default Wrapper;