import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scroll-to-top";

import HomePageFour from "../pages/home-4";

import ServiceV1Page from "../pages/service-v1";
import ServiceDetailsPage from "../pages/service-details";

import AboutUsPage from "../pages/about-us";
import ContactPage from "../pages/contact";

import NotFoundPage from "../pages/not-found";

import ProjectV3Page from "../pages/project-v3";
import ProjectDetailsV1Page from "../pages/project-details-v1";
import RiskTracker from "../pages/risk-tracker";
import Wallet from "../pages/wallet";
import BoardingManger from "../pages/boarding-manager";

export default function AppNavigation() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePageFour />} />

        {/* Products */}
        <Route path="/products" element={<ServiceV1Page />} />
        <Route path="/products/risk-tracker" element={<RiskTracker />} />
        <Route path="/products/wallet" element={<Wallet />} />
        <Route path="/products/boarding-manager" element={<BoardingManger />} />
        <Route path="/products/invoizr" element={<ServiceDetailsPage />} />

        {/* Solutions */}
        <Route path="/solutions" element={<ProjectV3Page />} />
        <Route
          path="/solutions/white-label"
          element={<ProjectDetailsV1Page />}
        />

        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
