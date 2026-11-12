/**
 * Content for the final Vocational Concepts website.
 * Source: the client's current WordPress site (exported to docs/current-site-content.txt),
 * plus items the client asked for in round 3 (athletes & veterans, podcast, why retain us).
 * Blog posts, products, and podcast episodes move to the admin once it exists.
 */

export const company = {
  name: "Vocational Concepts",
  legalName: "Vocational Concepts LLC",
  descriptor: "Vocational & Rehabilitation Expert Services",
  tagline: "Vocational Expert Witness for Litigation Support",
  intro:
    "Vocational Concepts LLC offers a wide range of vocational and rehabilitation services throughout Florida and the U.S. — forensic vocational testimony for marital dissolution, personal injury, Social Security, and other forensic rehabilitation cases.",
  email: "info@vocationalconcepts.com",
  phone: "(813) 362-4078",
  phoneHref: "+18133624078",
  phoneAlt: "(941) 666-3888",
  phoneAltHref: "+19416663888",
  fax: "(888) 453-0909",
  mailing: ["PO Box 706", "Ellenton, FL 34222"],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "Podcast", href: "/podcast" },
  { label: "Contact", href: "/contact" },
];

/** Crimson moving bar, from the client's flyer. */
export const movingBarItems = [
  "Never excluded under Daubert",
  "One of only 70 ABVE Diplomates nationwide",
  "Testified in all but two Florida counties",
  "20+ years of experience",
  "State & federal court testimony",
  "In-office · Virtual · At home",
];

export type IconName =
  | "scale"
  | "handshake"
  | "video"
  | "car"
  | "map"
  | "file"
  | "activity"
  | "heart"
  | "compass"
  | "accessibility"
  | "gavel"
  | "clipboard";

export const whyRetain: { icon: IconName; title: string; description: string }[] = [
  {
    icon: "scale",
    title: "Unbiased evaluators",
    description:
      "An unbiased assessment built on testing, labor market research, and reliable wage data — the same method whichever side retains us.",
  },
  {
    icon: "handshake",
    title: "We work with counsel",
    description:
      "Clear communication with attorneys from the first consultation through deposition and trial testimony.",
  },
  {
    icon: "video",
    title: "Virtual evaluations",
    description:
      "Virtual vocational evaluations through video meetings, reducing cost for your client where in-person is not required.",
  },
  {
    icon: "car",
    title: "Mobile evaluators",
    description:
      "We meet clients in a Regus office suite, virtually, or at home, and travel throughout the state — nationally if needed.",
  },
  {
    icon: "map",
    title: "Florida & nationwide",
    description:
      "Vocational and rehabilitation services throughout Florida and the U.S., with Career Transition services available nationally.",
  },
  {
    icon: "file",
    title: "Expert admissible reports",
    description:
      "Court-tested, defensible reports using evidence-based, peer-reviewed methodology. Ms. Fisher has never been excluded under Daubert.",
  },
];

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  group: "Litigation Support" | "Rehabilitation & Careers";
  summary: string;
};

export const services: Service[] = [
  {
    slug: "personal-injury",
    title: "Personal Injury",
    icon: "activity",
    group: "Litigation Support",
    summary:
      "Loss of earning capacity, wage loss, transferable skills, and labor market research after an injury that changes a person's ability to work.",
  },
  {
    slug: "marital-dissolution",
    title: "Marital Dissolution",
    icon: "scale",
    group: "Litigation Support",
    summary:
      "Employability and wage-earning capacity evaluations so alimony and child support rest on what a spouse can realistically earn.",
  },
  {
    slug: "collaborative-divorce",
    title: "Collaborative Divorce",
    icon: "handshake",
    group: "Litigation Support",
    summary:
      "Settle differences without litigation. Ms. Fisher and Mr. Hallissey are trained in the collaborative divorce process.",
  },
  {
    slug: "other-litigation-support",
    title: "Other Litigation Support",
    icon: "gavel",
    group: "Litigation Support",
    summary:
      "Product liability, medical review of records, Social Security hearings, and labor market analysis — for plaintiff or defense.",
  },
  {
    slug: "vocational-rehabilitation",
    title: "Vocational Rehabilitation",
    icon: "accessibility",
    group: "Rehabilitation & Careers",
    summary:
      "Comprehensive, work site, and simulated skills evaluations. We are partners with the Florida Division of Vocational Rehabilitation.",
  },
  {
    slug: "career-counseling",
    title: "Career Counseling",
    icon: "compass",
    group: "Rehabilitation & Careers",
    summary:
      "Basic, Premium, and Platinum career counseling for students, graduates, and adults making a midlife career change.",
  },
];

export const specialPrograms = {
  eyebrow: "Specialized programs",
  title: "Athletes & Veterans",
  body:
    "Career transitions demand a plan. We provide vocational evaluation, career transition counseling, rehabilitation planning, and return-to-work support for athletes and military veterans moving into the next chapter of their working lives.",
  proof:
    "Two of our evaluators serve veterans and active duty service members at Tampa's James A. Haley VA Medical Center.",
  groups: ["Professional athletes", "Football & basketball players", "College athletes", "Military veterans"],
};

export const podcast = {
  title: "The Vocational Concepts Podcast",
  blurb:
    "Conversations on vocational evidence, earning capacity, and what attorneys should know before they retain an expert.",
  status: "First episodes coming soon",
};

export const stats = [
  { value: 20, suffix: "+", label: "Years of experience" },
  { value: 70, prefix: "1 of ", label: "ABVE Diplomates nationwide" },
  { value: 4, label: "Florida Regus office locations" },
  { value: 6, label: "Certified evaluators on the team" },
];

export const credentials = [
  { abbr: "ABVE/D", title: "Diplomate, American Board of Vocational Experts" },
  { abbr: "CRC", title: "Certified Rehabilitation Counselor" },
  { abbr: "PVE", title: "Professional Vocational Evaluator" },
  { abbr: "IPEC", title: "IPEC Certified" },
  { abbr: "MA", title: "Rehabilitation & Mental Health Counseling, USF" },
];

export type TeamMember = {
  slug: string;
  name: string;
  credentials: string;
  role: string;
  photo?: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "cindy-fisher",
    name: "Cindy L. Fisher",
    credentials: "MA, CRC, PVE, IPEC, ABVE/D",
    role: "Director & Owner",
    photo: "/brand/cindy-fisher.jpg",
    bio: [
      "Ms. Cindy Fisher is the Director and Owner of Vocational Concepts. She has passionately provided vocational rehabilitation services for two decades, helping countless individuals develop rewarding careers.",
      "Ms. Fisher is a vocational expert holding the highest certification with the American Board of Vocational Experts as a Diplomate. She has qualified in most Florida counties, and federal courts as an expert. She provides services and testimony in Marital Dissolution, Personal Injury, Product Liability, and Social Security cases, and has specialized training in testimony and litigation support.",
      "Ms. Fisher is a Certified Rehabilitation Counselor, Professional Vocational Evaluator, and Psychometrician. She is an active member of the International Association of Rehabilitation Professionals, with membership in Forensics and Social Security, and provides testimony on a monthly basis for the Social Security Administration and forensic cases.",
      "She has also received training in collaborative divorce and functional capacity evaluations. She is a graduate of the University of South Florida's Master of Arts program in Rehabilitation Counseling and Mental Health Counseling, and holds a bachelor's degree in Business Management.",
    ],
  },
  {
    slug: "sarah-bauer",
    name: "Sarah Bauer",
    credentials: "MA, CRC",
    role: "Rehabilitation Specialist",
    photo: "/images/team/sarah.jpg",
    bio: [
      "Sarah Bauer is a Certified Rehabilitation Counselor and member of the International Association of Rehabilitation Professionals. She completed her graduate training at the University of South Florida, including a Master of Arts in Rehabilitation and Mental Health Counseling and a Graduate Certificate in Clinical Aging Sciences.",
      "She is experienced in medical record review, compilation of vocational profiles, labor market research and sampling, and the application of peer-reviewed research to vocational questions within the litigation context.",
    ],
  },
  {
    slug: "carson-holton",
    name: "Carson Holton",
    credentials: "MA, CRC",
    role: "Rehabilitation Specialist",
    photo: "/images/team/carson.jpg",
    bio: [
      "Carson Holton is a Certified Rehabilitation Counselor, registered Mental Health Counseling Intern, and member of the International Association of Rehabilitation Professionals, with certifications in Best Practices for Supported Employment and Social Security Administration Work Incentives.",
      "He worked for the Division of Vocational Rehabilitation for 5 years as a technician and counselor and has served as a supported employment specialist in the Tampa community.",
    ],
  },
  {
    slug: "craig-pagano",
    name: "Craig Pagano",
    credentials: "MA, CRC",
    role: "Vocational Evaluator",
    photo: "/images/team/craig.jpg",
    bio: [
      "Craig Pagano is a Certified Rehabilitation Counselor and member of the National Rehabilitation Association, with a Master of Arts in Rehabilitation and Mental Health Counseling from the University of South Florida.",
      "He serves as the onsite vocational rehabilitation specialist for the inpatient Polytrauma Transitional Rehabilitation Program at Tampa's James A. Haley VA Medical Center. His specializations include brain injury, mental health, and career transition after injury.",
    ],
  },
  {
    slug: "dawn-bradley",
    name: "Dawn Bradley",
    credentials: "LCSW",
    role: "Vocational Evaluator",
    photo: "/images/team/dawn.jpg",
    bio: [
      "Dawn Bradley is a Certified Vocational Rehabilitation Specialist and Licensed Clinical Social Worker who has worked in the rehabilitation field since 2008, earning the Outstanding Employee of the Year award from the Florida Association of Rehabilitation Facilities in 2014.",
      "She serves as the onsite vocational rehabilitation specialist for the Spinal Cord Injury Program at Tampa's James A. Haley VA Medical Center.",
    ],
  },
  {
    slug: "chris-hallissey",
    name: "Chris Hallissey",
    credentials: "MA, CRC, NCC, LMHC, IPEC",
    role: "Vocational Rehabilitation Counselor",
    bio: [
      "Chris Hallissey is an experienced Vocational Rehabilitation Counselor skilled in psychometric assessment, employability and earning capacity assessment, vocational evaluation, transferable skills analysis, labor market research, and mental health counseling.",
      "He holds a Master of Arts in Rehabilitation and Mental Health Counseling from the University of South Florida and is trained in the collaborative divorce process.",
    ],
  },
];

/** "Reasons for a vocational evaluation", verbatim from her service pages. */
export const reasons = [
  {
    id: "marital",
    label: "Marital Dissolution",
    items: [
      "A spouse is not working",
      "A spouse states that he or she cannot work, but both parties do not agree upon the reason",
      "A spouse has a disability that may affect vocational choice or success",
      "A spouse has no recent work experience",
      "A spouse is working part-time, but probably has the capacity for full-time work",
      "A spouse's income is significantly less than in a prior earning period",
      "The supporting spouse has a sudden drop in reported earnings",
      "A spouse identifies a vocational goal that seems unrealistic or needs a prolonged training period",
    ],
  },
  {
    id: "injury",
    label: "Personal Injury",
    items: [
      "A reduction in or complete loss of earnings after an accident or injury",
      "Unable to return to his or her previous job due to an injury",
      "Unable to find or hold a job after experiencing an injury",
      "Needs extensive training, retraining, or education to re-enter the workforce",
      "Needs accommodations in the workplace to hold employment",
      "An opposing party alleges your client can perform work beyond his or her physical, intellectual, or psychological capabilities",
    ],
  },
];

export const offices = [
  { city: "Tampa", lines: ["2202 N. Westshore Blvd, Suite 200", "Tampa, FL 33607"] },
  { city: "Saint Petersburg", lines: ["970 Lake Carillion Drive, Suite 300", "Saint Petersburg, FL 33716"] },
  { city: "Sarasota", lines: ["1990 Main Street, Suite 750", "Sarasota, FL 34236"] },
  { city: "Fort Myers & Naples", lines: ["9160 Forum Corporate Pkwy, Suite 350", "Fort Myers, FL 33905"] },
];
