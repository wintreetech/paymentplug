import { IProject } from "../types/project-d-t";

const project_data: IProject[] = [
  {
    id: 1,
    title: "1.  Global Retail Payment Simplification",
    body_title: "Approach",
    body_desc:
      "We partnered with a large international eCommerce brand to unify its fragmented payment infrastructure across multiple markets and currencies using our orchestration tools.",
    body_subtitle: "FINAL results",
    body_lists: [
      "Seamless integration with multiple gateways.",
      "Improved transaction success rate by 27%.",
      "Reduced operational overhead with centralized control.",
    ],
    bg_img: "/assets/images/media/img_01.jpg",
    video_id: "aXFSJTjVjw0",
    parent: "accordionOne",
    page: "home",
  },
  {
    id: 2,
    title: "2.  Instant Payouts for Gig Economy Platform.",
    body_title: "Approach",
    body_desc:
      "The client, a freelance marketplace, faced user dissatisfaction due to delayed payments. We deployed real-time payout automation with customizable schedules.",
    body_subtitle: "FINAL results",
    body_lists: [
      "90% reduction in payout time.",
      "Improved freelancer retention and satisfaction.",
      "Streamlined cash flow and settlement tracking.",
    ],
    bg_img: "/assets/images/media/img_02.jpg",
    video_id: "DPjYyCcw4Po",
    parent: "accordionOne",
    page: "home",
  },
  {
    id: 3,
    title: "3. Automated Reconciliation for SaaS Provider",
    body_title: "Approach",
    body_desc:
      "A SaaS firm struggled with manual reconciliation across providers. We implemented intelligent transaction mapping and auto-reconciliation features.",
    body_subtitle: "FINAL results",
    body_lists: [
      "Saved over 40 hours/month in finance operations.",
      "Enhanced financial reporting accuracy.",
      "Lowered error rate and boosted internal productivity.",
    ],
    bg_img: "/assets/images/media/img_16.jpg",
    video_id: "aXFSJTjVjw0",
    isShow: true,
    parent: "accordionOne",
    page: "home",
  },
];

export default project_data;
