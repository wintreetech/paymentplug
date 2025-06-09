import { IMenu } from "../types/menu-d-t";

const menu_data: IMenu[] = [
	{
		id: 1,
		link: "/products",
		title: "Products",
		dropdown: true,
		dropdown_menus: [
			{ link: "/products/risk-tracker", title: "Risk Tracker" },
			{ link: "/products/wallet", title: "Wallet" },
			{ link: "/products/boarding-manager", title: "Boarding Manager" },
			{ link: "/products/invoizr", title: "Invoizr" },
		],
	},

	{
		id: 2,
		link: "/solutions",
		title: "Solutions",
		dropdown: true,
		dropdown_menus: [{ link: "/solutions/white-label", title: "White Label" }],
	},

	{
		id: 3,
		link: "/about-us",
		title: "About",
	},

	{
		id: 4,
		link: "/contact",
		title: "Contact",
	},
	{
		id: 5,
		link: "/docs",
		title: "Docs",
	},
];

export default menu_data;
