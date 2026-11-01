export const siteConfig = {
  name: "Vocational Concepts",
  legalName: "Vocational Concepts LLC",
  shortName: "Vocational Concepts",
  descriptor: "Vocational & Rehabilitation Expert Services",
  motto: "Empowering Skills. Building Futures.",
  tagline: "Vocational Expert Witness for Litigation Support",
  description:
    "Vocational Concepts LLC offers vocational and rehabilitation services throughout Florida and the U.S. Forensic vocational testimony for marital dissolution, personal injury, Social Security, and other litigation support, led by Cindy Fisher, MA, CRC, PVE, IPEC, ABVE/D.",
  email: "info@vocationalconcepts.com",
  phone: "(813) 362-4078",
  phoneHref: "+18133624078",
  address: "PO Box 706, Ellenton, FL 34222",
};

export const expert = {
  name: "Cindy Fisher",
  firstName: "Cindy",
  credentials: "MA, CRC, PVE, IPEC, ABVE/D",
  title: "Founder & Director of Vocational and Rehabilitation Services",
  /** Drop a headshot at this path and it renders automatically. */
  photo: "/brand/cindy-fisher.jpg",
  greeting: "Meet Ms. Fisher.",
  shortBio:
    "Ms. Fisher helps attorneys and courts answer one question with confidence: what can this person realistically earn? For over twenty years she has built vocational opinions that hold up under cross-examination.",
  bio: "Cindy Fisher is the Founder and Director of Vocational Concepts LLC. With over twenty years of vocational and rehabilitation experience, she has testified in all but two Florida counties — locally, statewide, and in federal courts. She has never been excluded under Daubert, nor has she ever been deemed unqualified as an expert. Ms. Fisher is a Diplomate of the American Board of Vocational Experts, one of only 70 in the country.",
  methodology:
    "Vocational Concepts LLC provides court-tested, defensible reports with sound systematic methodology, using current technology and well-documented, peer-reviewed research to support every vocational opinion.",
  education:
    "MA in Rehabilitation Counseling & Mental Health Counseling, University of South Florida; BA in Business Management.",
};

/** Headline proof points taken verbatim from the client's flyer. */
export const credibility = [
  {
    title: "Never excluded under Daubert",
    description:
      "Ms. Fisher has never been excluded under Daubert, nor has she ever been deemed unqualified as an expert.",
  },
  {
    title: "One of only 70 in the country",
    description:
      "A Diplomate of the esteemed American Board of Vocational Experts (ABVE) — a distinction held by only 70 experts nationally.",
  },
  {
    title: "Testified in all but two Florida counties",
    description:
      "Over twenty years of testimony experience — locally, statewide, and in federal courts.",
  },
  {
    title: "Court-tested, defensible reports",
    description:
      "Sound systematic methodology supported by current technology and well-documented, peer-reviewed research.",
  },
];

/** "When Might Your Client Need a Vocational Expert?" — from the flyer. */
export const whenNeeded = [
  {
    title: "Long-Term Homemaker Cases",
    description: "Re-entry timeline and wage potential.",
  },
  {
    title: "Underemployed Spouse Cases",
    description:
      "Whether a party is voluntarily working below their education, training, or historical skill set.",
  },
  {
    title: "Unemployed or Intentionally Idle Spouse Cases",
    description: "Employability and ability to return to the workforce.",
  },
  {
    title: "Disability or Health Restriction Cases",
    description:
      "Functional limitations, transferable skills and realistic earning capacity.",
  },
];

/** "Other Reasons You May Need to Hire an Expert" — from the flyer. */
export const otherReasons = [
  "Child custody evaluations",
  "Relocation of a child and custodial parent",
  "A spouse needing to care for an elderly parent or disabled child",
  "Domestic violence cases where a vocational evaluation is needed",
  "A realistic rehabilitative plan for a spouse's return to work",
  "Review of a court-ordered rehabilitative plan — is it feasible, and are the costs in line with today's economy?",
];

/** How services are delivered — from the flyer's lower band. */
export const delivery = [
  {
    title: "Mobile · Virtual · Statewide",
    description:
      "Vocational Concepts LLC provides mobile vocational evaluation services throughout Florida.",
  },
  {
    title: "Virtual vocational evaluations",
    description:
      "Offered to reduce costs for your client. An in-person evaluation may be needed in certain disability-related or domestic violence cases.",
  },
];

export const offices = [
  { city: "Tampa", address: "2202 N. Westshore Blvd, Suite 200, Tampa, FL 33607" },
  { city: "St. Petersburg", address: "970 Lake Carillion Drive, Suite 300, St. Petersburg, FL 33716" },
  { city: "Sarasota", address: "1990 Main Street, Suite 750, Sarasota, FL 34236" },
  { city: "Fort Myers & Naples", address: "9160 Forum Corporate Pkwy, Suite 350, Fort Myers, FL 33905" },
];

export const navLinks = [
  { label: "About", href: "#expert" },
  {
    label: "Services",
    href: "#services",
    dropdown: [
      { label: "Personal Injury", href: "#services" },
      { label: "Marital Dissolution", href: "#services" },
      { label: "Career Counseling", href: "#services" },
      { label: "Vocational Rehabilitation", href: "#services" },
      { label: "Other Litigation Support", href: "#services" },
    ],
  },
  { label: "Case Experience", href: "#case-experience" },
  { label: "Contact", href: "/contact" },
];

export const process = [
  {
    step: "01",
    title: "Understand the Case",
    description:
      "Review case background, medical records, and the specific vocational questions the attorney or court needs answered.",
  },
  {
    step: "02",
    title: "Analyze the Evidence",
    description:
      "Apply standardized testing, labor market research, and current wage data to the facts of the case.",
  },
  {
    step: "03",
    title: "Develop the Expert Opinion",
    description:
      "Form an objective, defensible opinion on earning capacity, employability, or vocational loss.",
  },
  {
    step: "04",
    title: "Deliver Clear Findings",
    description:
      "Present findings in a clear written report and, where needed, in deposition or courtroom testimony.",
  },
];

export const caseExperience = [
  {
    id: "personal-injury-case",
    category: "Personal Injury",
    title: "Earning capacity after a workplace injury",
    description:
      "Vocational and labor-market analysis to quantify pre- and post-injury earning potential following a serious workplace injury.",
  },
  {
    id: "marital-dissolution-case",
    category: "Marital Dissolution",
    title: "Imputed income in a contested divorce",
    description:
      "Employability and earning-capacity evaluation to inform alimony and child support determinations.",
  },
  {
    id: "social-security-case",
    category: "Social Security",
    title: "Transferable skills at an SSA hearing",
    description:
      "Testimony on transferable skills and job availability to support a Social Security Disability determination.",
  },
  {
    id: "return-to-work-case",
    category: "Return to Work",
    title: "Return-to-work plan after injury",
    description:
      "A realistic, step-by-step return-to-work plan accounting for medical restrictions and job accommodations.",
  },
];

export const faqs = [
  {
    question: "What does a vocational expert witness do?",
    answer:
      "A vocational expert evaluates how a disability, injury, or life change affects a person's ability to work, and provides objective testimony on employability, earning capacity, and vocational loss for attorneys and courts.",
  },
  {
    question: "What types of cases do you support?",
    answer:
      "Personal injury, marital dissolution, Social Security Disability, product liability, medical malpractice, and other litigation requiring vocational or earning-capacity analysis.",
  },
  {
    question: "Do you provide courtroom and deposition testimony?",
    answer:
      "Yes. Testimony is provided in depositions, administrative hearings, and trials in all but two Florida counties and in federal court.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a consultation using the form on this site or call our office directly. We'll discuss the case and the type of vocational evaluation needed.",
  },
];

export const serviceCategories = [
  {
    id: "litigation-support",
    title: "Litigation Support",
    description:
      "Forensic vocational testimony and earning-capacity analysis for attorneys and courts.",
    serviceIds: [
      "personal-injury",
      "marital-dissolution",
      "social-security",
      "product-liability",
      "medical-malpractice",
    ],
  },
  {
    id: "vocational-rehabilitation-group",
    title: "Vocational Rehabilitation",
    description:
      "Evaluation and return-to-work planning for individuals with disabilities or injuries.",
    serviceIds: ["vocational-rehabilitation", "return-to-work"],
  },
  {
    id: "career-services",
    title: "Career & Assessment Services",
    description:
      "Career counseling and psychometric assessment to guide vocational decisions.",
    serviceIds: ["career-counseling", "tests-and-assessment"],
  },
];

export const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "1 of 70", label: "ABVE Diplomates Nationwide" },
  { value: "All but 2", label: "Florida Counties Testified In" },
  { value: "Zero", label: "Daubert Exclusions" },
];

export const credentialBadges = ["CRC", "PVE", "IPEC", "ABVE/D"];

export const services = [
  {
    id: "personal-injury",
    title: "Personal Injury",
    description:
      "In personal injury cases, a vocational expert can help determine lost wages and diminution of future earning capacity, using current labor market data to elucidate economic damages arising from an injury.",
  },
  {
    id: "marital-dissolution",
    title: "Marital Dissolution",
    description:
      "A vocational expert is often utilized to assist in determining alimony and child support in cases of divorce, addressing employability and earning capacity questions.",
  },
  {
    id: "career-counseling",
    title: "Career Counseling",
    description:
      "For students transitioning to higher education or adults making a midlife career change, our team can help identify and develop marketable, rewarding career paths.",
  },
  {
    id: "vocational-rehabilitation",
    title: "Vocational Rehabilitation",
    description:
      "Comprehensive vocational evaluations, typically completed in one day, for individuals with disabilities who require specialized services for employment.",
  },
  {
    id: "social-security",
    title: "Social Security Disability",
    description:
      "Regular testimony in administrative law hearings to facilitate the determination process for individuals seeking Social Security Disability benefits.",
  },
  {
    id: "return-to-work",
    title: "Return to Work",
    description:
      "A realistic, clearly defined plan for employment after injury, informed by assistive technologies, job accommodations, and disability legislation.",
  },
  {
    id: "tests-and-assessment",
    title: "Tests & Assessment",
    description:
      "Administration and interpretation of achievement, intellectual, interest, work values, personality, and aptitude assessments to guide career development.",
  },
  {
    id: "product-liability",
    title: "Product Liability",
    description:
      "Vocational and earning-capacity analysis in support of product liability litigation.",
  },
  {
    id: "medical-malpractice",
    title: "Medical Malpractice",
    description:
      "Vocational impact and earning-capacity assessment in support of medical malpractice claims.",
  },
];

export const credentials = [
  {
    abbr: "CRC",
    title: "Certified Rehabilitation Counselor",
    org: "Commission on Rehabilitation Counselor Certification",
  },
  {
    abbr: "ABVE/D",
    title: "Diplomate, American Board of Vocational Experts",
    org: "Highest certification in forensic vocational evaluation",
  },
  {
    abbr: "PVE",
    title: "Professional Vocational Evaluator",
    org: "Certified vocational evaluation credential",
  },
  {
    abbr: "IPEC",
    title: "IPEC Certified",
    org: "Additional professional certification",
  },
  {
    abbr: "MA",
    title: "MA, Rehabilitation & Mental Health Counseling",
    org: "University of South Florida",
  },
];

export const whyChooseUs = [
  {
    title: "Over twenty years of experience",
    description:
      "Cindy Fisher has provided vocational and rehabilitation services for more than two decades, testifying in all but two Florida counties.",
  },
  {
    title: "Highest certification available",
    description:
      "A Diplomate of the American Board of Vocational Experts — a distinction held by only 70 experts in the country.",
  },
  {
    title: "An unblemished record on the stand",
    description:
      "Never excluded under Daubert, and never deemed unqualified as an expert. Testimony given locally, statewide, and in federal courts.",
  },
  {
    title: "Mobile, virtual, and statewide",
    description:
      "Evaluations delivered throughout Florida, with virtual options that reduce cost for your client without compromising the opinion.",
  },
];

/** "Why retain us" — from the client's call notes. */
export const whyRetain = [
  {
    title: "Unbiased evaluators",
    description: "Objective opinions grounded in testing, data, and labor market research.",
  },
  {
    title: "We work with counsel",
    description: "Clear communication with attorneys from the first consultation through testimony.",
  },
  {
    title: "Virtual evaluations",
    description: "Remote evaluations that reduce cost for your client where in-person is not required.",
  },
  {
    title: "Mobile evaluators",
    description: "Evaluators who travel to the client when an in-person evaluation is the right call.",
  },
  {
    title: "Nationwide",
    description: "Vocational and rehabilitation services throughout Florida and the United States.",
  },
  {
    title: "Expert admissible reports",
    description: "Court-tested, defensible reports. Ms. Fisher has never been excluded under Daubert.",
  },
];

/** Homepage feature requested in the client's call notes. Copy is a draft for her review. */
export const specialFocus = [
  {
    id: "athletes",
    eyebrow: "Football · Basketball · College",
    title: "Athletes",
    description:
      "When an injury changes an athletic career, the loss is hard to measure. Vocational analysis looks at realistic earning capacity and the next career path.",
  },
  {
    id: "veterans",
    eyebrow: "Service to civilian life",
    title: "Veterans",
    description:
      "Translating military training and experience into civilian employability, with transferable skills and earning capacity assessed on the evidence.",
  },
];

/** Placeholder until the client supplies the real show and episodes. */
export const podcast = {
  title: "The Vocational Concepts Podcast",
  blurb:
    "Conversations on vocational evidence, earning capacity, and what attorneys should know before they retain an expert.",
  status: "Episodes coming soon",
};

/** Services and prices as listed on the client's current shop page. */
export const shop = [
  {
    category: "Court Services",
    items: [
      { name: "Consultation & Retainer Agreement", detail: "30 minutes", price: "$250" },
      { name: "Retainer Agreement for Vocational Evaluation", detail: "Divorce", price: "$3,500" },
      { name: "Retainer Agreement for Vocational Evaluation", detail: "Personal injury", price: "$3,500" },
      { name: "Labor Market Research", detail: "Per hour", price: "$150" },
      { name: "Deposition Fee", detail: "Two hours", price: "$600" },
      { name: "Trial Fee", detail: "Two hours", price: "$750" },
    ],
  },
  {
    category: "Career Counseling",
    items: [
      { name: "Basic Career Counseling", detail: "Entry level & graduates", price: "$600" },
      { name: "Premium Career Counseling", detail: "Career changers", price: "$1,100" },
      { name: "Platinum Career Counseling", detail: "Most comprehensive", price: "$2,000" },
    ],
  },
  {
    category: "Other Vocational Services",
    items: [{ name: "Medical Review of Records", detail: "Per hour", price: "$300" }],
  },
];

/** Menu shared by the three round-3 demos. `base` is the demo's own route. */
export const demoNavLinks = (base: string) => [
  { label: "About", href: `${base}#about` },
  { label: "Services", href: `${base}#services` },
  { label: "Team", href: `${base}#team` },
  { label: "Resources", href: `${base}#resources` },
  { label: "Podcast", href: `${base}/podcast` },
  { label: "Shop", href: `${base}#shop` },
  { label: "Contact", href: `${base}#contact` },
];

/** Text that scrolls through the crimson moving bar. */
export const movingBarItems = [
  "Never excluded under Daubert",
  "One of only 70 ABVE Diplomates nationwide",
  "Testified in all but two Florida counties",
  "20+ years of experience",
  "Mobile · Virtual · Statewide",
  "Federal court testimony",
];

export const memberships = [
  { name: "American Board of Vocational Experts", role: "Diplomate Member" },
  { name: "International Association of Rehabilitation Professionals", role: "Forensics & Social Security Sections" },
];

export const contactSubjects = [
  "Personal Injury",
  "Marital Dissolution",
  "Career Counseling",
  "Vocational Rehabilitation",
  "Social Security Disability",
  "Product Liability",
  "Medical Malpractice",
  "Other Inquiry",
];

export const footerLinks = {
  Services: services.slice(0, 5).map((s) => ({ label: s.title, href: `#services` })),
  Company: [
    { label: "About Cindy Fisher", href: "#expert" },
    { label: "Case Experience", href: "#case-experience" },
    { label: "Contact", href: "/contact" },
  ],
  Get_in_touch: [
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "#faq" },
  ],
};
