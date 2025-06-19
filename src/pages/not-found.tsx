import { NavLink } from "react-router-dom";
import Wrapper from "../layout/wrapper";
import SEOCom from "../components/seo";

export default function NotFoundPage() {
	return (
		<Wrapper>
			{/* seo title */}
			<SEOCom title="Not Found" />
			{/* seo title */}

			<div className="main-page-wrapper">
				<main>
					<div className="error-page text-center d-flex align-items-center justify-content-center flex-column light-bg position-relative">
						<h1 className="font-magnita">404</h1>
						<h2 className="fw-bold">Page Not Found</h2>
						<p className="text-lg mb-45">
							Publishing industries for previewing layouts & visual mockups
							used.
						</p>
						<div>
							<NavLink to="/" className="btn-four">
								Go Back
							</NavLink>
						</div>
						<img
							src="/assets/images/assets/ils_05.svg"
							alt="shape"
							className="lazy-img shapes shape_01"
						/>
						<img
							src="/assets/images/assets/ils_06.svg"
							alt="shape"
							className="lazy-img shapes shape_02"
						/>
					</div>
				</main>
			</div>
		</Wrapper>
	);
}
