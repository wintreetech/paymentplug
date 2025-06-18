import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";

import HomePageFour from "../pages/home-4";

import AboutUsPage from "../pages/about-us";
import ContactPage from "../pages/contact";

import NotFoundPage from "../pages/not-found";

import RiskTracker from "../pages/risk-tracker";
import Wallet from "../pages/wallet";
import BoardingManger from "../pages/boarding-manager";
import Invoizr from "../pages/invoizr";
import WhiteLabel from "../pages/white-label";

export default function AppNavigation() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePageFour />} />

				{/* Products */}
				{/* <Route path="/products" element={<ServiceV1Page />} /> */}
				<Route path="/products/risk-tracker" element={<RiskTracker />} />
				<Route path="/products/wallet" element={<Wallet />} />
				<Route path="/products/boarding-manager" element={<BoardingManger />} />
				<Route path="/products/invoizr" element={<Invoizr />} />

				{/* Solutions */}
				{/* <Route path="/solutions" element={<ProjectV3Page />} /> */}
				<Route path="/solutions/white-label" element={<WhiteLabel />} />

				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/contact" element={<ContactPage />} />

				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
