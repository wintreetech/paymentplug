export type IFaq = {
	id: string;
	title: string;
	desc: string;
	isShow?: boolean;
};

const faq_data: IFaq[] = [
	{
		id: "One",
		title: "What is a payment orchestration platform?",
		desc: "A payment orchestration platform streamlines all your payment processes by connecting multiple payment providers, tools, and systems into one unified interface.",
		isShow: true,
	},
	{
		id: "Two",
		title: "How long does it take to integrate PAYMENT PLUG?",
		desc: "Integration is fast—typically within a few days—using our flexible APIs, SDKs, and white-label options.",
	},
	{
		id: "Three",
		title: "Is your platform PCI DSS compliant?",
		desc: "Yes, PAYMENT PLUG is fully PCI DSS Level 1 compliant to ensure secure handling of all payment data.",
	},
	{
		id: "Four",
		title: "Can I customize the checkout experience?",
		desc: "Absolutely. You can fully brand and customize checkout pages, payment flows, and dashboards to match your business.",
	},
	{
		id: "Five",
		title: "Do you support international payments?",
		desc: "Yes, we support 100+ currencies and offer tools for dynamic currency conversion and localized checkout.",
	},
	{
		id: "Six",
		title: "What kind of businesses can use this platform?",
		desc: "From eCommerce and SaaS to gaming and marketplaces—our platform scales with startups and enterprises alike.",
	},
	{
		id: "Seven",
		title: "Is there ongoing support after integration?",
		desc: "Yes, our dedicated support team offers 24/7 assistance along with onboarding guidance and technical documentation.",
	},
];

export default faq_data;
