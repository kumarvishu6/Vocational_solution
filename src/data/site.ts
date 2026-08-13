export const siteConfig = {
  name: "Vocational Concepts",
  legalName: "Vocational Concepts LLC",
  shortName: "Vocational Concepts",
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
  credentials: "MA, CRC, PVE, IPEC, ABVE/D",
  title: "Director & Owner, Vocational Concepts",
  bio: "Cindy Fisher is the Director and Owner of Vocational Concepts. She has passionately provided vocational rehabilitation services for two decades, helping countless individuals develop rewarding careers. Ms. Fisher holds the highest certification with the American Board of Vocational Experts as a Diplomate, and has qualified as an expert in most Florida counties and federal courts. She provides services and testimony in marital dissolution, personal injury, product liability, and Social Security cases, testifying monthly for the Social Security Administration and forensic cases.",
  education:
    "MA in Rehabilitation Counseling & Mental Health Counseling, University of South Florida; BA in Business Management.",
};

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
      "Yes. Testimony is provided in depositions, administrative hearings, and trials in most Florida counties and in federal court.",
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
  { value: "20", label: "Years of Experience" },
  { value: "ABVE-D", label: "Diplomate Certification" },
  { value: "Monthly", label: "SSA & Forensic Testimony" },
  { value: "Statewide", label: "FL & Federal Courts" },
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
    title: "Two decades of experience",
    description:
      "Cindy Fisher has provided vocational rehabilitation and forensic vocational services for nearly twenty years across Florida and federal courts.",
  },
  {
    title: "Highest certification available",
    description:
      "A Diplomate of the American Board of Vocational Experts (ABVE/D) — the highest certification in forensic vocational evaluation.",
  },
  {
    title: "Regular courtroom experience",
    description:
      "Monthly testimony for the Social Security Administration and forensic cases, qualified as an expert in most Florida counties and federal courts.",
  },
  {
    title: "Full-spectrum vocational support",
    description:
      "From litigation support to career counseling and return-to-work planning — one team for every stage of a vocational case.",
  },
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
