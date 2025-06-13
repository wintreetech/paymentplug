// testimonial type
type ITestimonial = {
	id: number;
	user?: string;
	name: string;
	location: string;
	desc: string;
	rating: number;
};

export const feed_back_two: ITestimonial[] = [
	{
		id: 1,
		user: "/assets/images/media/img_08.jpg",
		name: "James Bond.",
		location: "Thailad",
		desc: "We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform our outdated website into a stunning, user-friendly masterpiece.",
		rating: 5,
	},
	{
		id: 2,
		user: "/assets/images/media/img_09.jpg",
		name: "James Bond.",
		location: "Thailad",
		desc: "It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.",
		rating: 4,
	},
	{
		id: 3,
		user: "/assets/images/media/img_08.jpg",
		name: "Mark Smith",
		location: "United state",
		desc: "It has been an absolute pleasure working with Babun on our brand identity overhaul. Their ability to capture the essence of our culinary vision and translate it into a visual identity has been commendable.",
		rating: 5,
	},
	{
		id: 4,
		user: "/assets/images/media/img_09.jpg",
		name: "Jon Doe",
		location: "Dubai",
		desc: "Babun thumbs up to the team! Their personalized approach to fitness training has been a breath of fresh air. The trainers are not only knowledgeable but also genuinely invested in their clients well-being",
		rating: 3,
	},
];

// feedback one start
export const feedback_one = [
	{
		id: 1,
		user: "/assets/images/media/img_08.jpg",
		name: "Priya Deshmukh",
		location: "CEO, FinBridge Solutions",
		desc: `"Paymentplug helped us unify our global payment flow. The seamless API and fast onboarding made integration effortless."`,
	},
	{
		id: 2,
		user: "/assets/images/media/img_08.jpg",
		name: "Lucas Reinhardt",
		location: "Product Head, MarketLoop",
		desc: `"Their real-time analytics and fraud prevention tools give us full control and peace of mind. Highly reliable platform!"`,
	},
	{
		id: 3,
		user: "/assets/images/media/img_08.jpg",
		name: "Aisha Khatun",
		location: "CTO, NextPay Digital",
		desc: `"From onboarding to scaling globally, Paymentplug has been a solid partner in optimizing our transactions."`,
	},
];
// feedback one end

// feedback three
export const feedback_three: { id: number; desc: string }[] = [
	{
		id: 1,
		desc: "Quick solutions coupled with extraordinary performance—a recommendation thats unequivocal.",
	},
	{
		id: 2,
		desc: "We are absolutely thrilled with the services provided by Babun! Their team went above and beyond to transform.",
	},
	{
		id: 3,
		desc: "Babun Solutions has truly been a game changer for our business. Their expertise in developing our mobile app",
	},
];

// feedback four
export const feedback_four: ITestimonial[] = [
	{
		id: 1,
		desc: '"PAYMENT PLUG helped us expand into new markets effortlessly. The multi-currency support and custom checkout saved us months of dev time."',
		name: "Aisha K",
		location: "Head of Payments, Global Retail Co.",
		user: "/assets/images/media/img_08.jpg",
		rating: 5,
	},
	{
		id: 2,
		desc: "The onboarding was smooth, the API is incredibly well-documented, and their support team is top-notch. We launched in just days.",
		name: "Diego R",
		location: "CTO, Fintech Nova",
		user: "/assets/images/media/img_14.jpg",
		rating: 4,
	},
	{
		id: 3,
		desc: "We consolidated multiple payment providers into a single dashboard. It’s boosted our operational efficiency and reduced costs significantly.",
		name: "Lina P",
		location: "Operations Lead, SaaSFlow",
		user: "/assets/images/media/img_15.jpg",
		rating: 4.5,
	},
	{
		id: 4,
		desc: "What sets PAYMENT PLUG apart is the flexibility. We’ve fully white-labeled the platform to match our brand, and it feels native.",
		name: "Sarah T",
		location: "CEO, FreelancerHub",
		user: "/assets/images/media/img_15.jpg",
		rating: 4.5,
	},
	{
		id: 5,
		desc: "From fraud protection to settlement tracking, everything just works. It's the backbone of our payment infrastructure now.",
		name: "Haruto M",
		location: "Product Manager, GameWorld",
		user: "/assets/images/media/img_15.jpg",
		rating: 4.5,
	},
];

// feedback five
export const feedback_five: ITestimonial[] = [
	{
		id: 1,
		desc: `"Extraordinary performance!  Quick solutions. Highly recommended."`,
		name: "James Bond.",
		location: "CEO & Head of Sky Tech Inc.",
		rating: 5,
	},
	{
		id: 2,
		desc: `"Babun Solutions has truly been a game changer for our business."`,
		name: "John Smith",
		location: "CEO & Head of Sky Tech Inc.",
		rating: 4,
	},
	{
		id: 3,
		desc: `"Quick solutions coupled with extraordinary performance—a recommendation."`,
		name: "Mark John",
		location: "CEO & Head of Sky Tech Inc.",
		rating: 4.5,
	},
];

// feedback six
export const feedback_six: ITestimonial[] = [
	{
		id: 1,
		desc: "Having a home based business is  wonderful asset to your life. The problem still stands comes time your business. Quis lorem elite.",
		name: "James Bond.",
		location: "Moscow, Russia",
		rating: 5,
	},
	{
		id: 2,
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sed nobis eveniet nisi provident aut excepturi reiciendis tuo.",
		name: "John Smith",
		location: "Cairo, Egypt",
		rating: 4,
	},
	{
		id: 3,
		desc: "Efficient problem-solving, insightful market analysis, and actionable plans made the consulting experience business's success.",
		name: "Jesica Harris",
		location: "Tokyo, Japan",
		rating: 4.5,
	},
];
