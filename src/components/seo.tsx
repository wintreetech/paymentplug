import { Helmet } from "react-helmet-async";

// prop type 
type IProps = {
  title: string;
}
const SEOCom = ({ title }: IProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title ? `${title} - Babun` : 'Babun - Business & Finance React Template'}</title>
      <meta name="description" content="Babun - Business & Finance React Template" />
      <meta name="keywords" content="Babun - Business & Finance React Template" />
      <meta name="robots" content="INDEX,FOLLOW" />
    </Helmet>
  );
};

export default SEOCom;