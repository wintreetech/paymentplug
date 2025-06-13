import { Helmet } from "react-helmet-async";

// prop type
type IProps = {
	title: string;
};
const SEOCom = ({ title }: IProps) => {
	return (
		<Helmet>
			<meta charSet="utf-8" />
			<title>
				{title
					? `${title} - PaymentPlug`
					: "PaymentPlug | Seamless Payment Solutions with White Label Wallets, Risk Tracking, Invoicing & More."}
			</title>
			<meta
				name="description"
				content="PaymentPlug | Seamless Payment Solutions with White Label Wallets, Risk Tracking, Invoicing & More."
			/>
			<meta
				name="keywords"
				content="PaymentPlug | Seamless Payment Solutions with White Label Wallets, Risk Tracking, Invoicing & More."
			/>
			<meta name="robots" content="INDEX,FOLLOW" />
		</Helmet>
	);
};

export default SEOCom;
