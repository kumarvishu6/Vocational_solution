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
  introShort:
    "Forensic vocational testimony for marital dissolution, personal injury, Social Security, and other litigation — throughout Florida and the U.S.",
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
    title: "Court-admissible expert reports",
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
      "Employment law, long-term disability, product liability, medical records review, Social Security, and labor market analysis.",
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
      "Career testing, local career options, and counseling for students, graduates, and adults making a midlife career change.",
  },
];

export const specialPrograms = {
  eyebrow: "Specialized programs",
  title: "Athletes & Veterans",
  body:
    "Vocational evaluation, career transition counseling, and return-to-work planning for athletes and veterans starting their next chapter.",
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
  { abbr: "IPEC", title: "International Psychometric Evaluation Certification" },
  { abbr: "MA", title: "Rehabilitation & Mental Health Counseling, USF" },
];

export type TeamMember = {
  slug: string;
  summary: string;
  name: string;
  credentials: string;
  role: string;
  photo?: string;
  bio: string[];
};

export const team: TeamMember[] = [
  {
    slug: "cindy-fisher",
    summary: "Ms. Fisher holds the highest certification of the American Board of Vocational Experts and has qualified as an expert in most Florida counties and in federal court.",
    name: "Cindy L. Fisher",
    credentials: "MA, CRC, PVE, IPEC, ABVE/D",
    role: "Director & Owner",
    photo: "/brand/cindy-fisher.jpg",
    bio: [
      "Ms. Cindy Fisher is the Director and Owner of Vocational Concepts. She has passionately provided vocational rehabilitation services for two decades, helping countless individuals develop rewarding careers.",
      "Ms. Fisher is a vocational expert holding the highest certification with the American Board of Vocational Experts as a Diplomate. She has qualified as an expert in most Florida counties and in federal court. She provides services and testimony in Marital Dissolution, Personal Injury, Product Liability, and Social Security cases, and has specialized training in testimony and litigation support.",
      "Ms. Fisher is a Certified Rehabilitation Counselor, Professional Vocational Evaluator, and Psychometrician. She is an active member of the International Association of Rehabilitation Professionals, with membership in Forensics and Social Security, and provides testimony on a monthly basis for the Social Security Administration and forensic cases.",
      "She has also received training in collaborative divorce and functional capacity evaluations. She is a graduate of the University of South Florida's Master of Arts program in Rehabilitation Counseling and Mental Health Counseling, and holds a bachelor's degree in Business Management.",
    ],
  },
  {
    slug: "sarah-bauer",
    summary: "Certified Rehabilitation Counselor experienced in medical record review, vocational profiles, and labor market research.",
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
    summary: "Certified Rehabilitation Counselor with five years at the Florida Division of Vocational Rehabilitation.",
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
    summary: "Certified Rehabilitation Counselor serving veterans at Tampa's James A. Haley VA Medical Center.",
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
    summary: "Licensed Clinical Social Worker in rehabilitation since 2008, now with the VA's Spinal Cord Injury Program in Tampa.",
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
    summary: "Rehabilitation counselor skilled in earning capacity, transferable skills, and labor market research.",
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

export type ServiceSection = { title: string; summary: string; body?: string[]; list?: string[] };

/** Full service-page content, verbatim or lightly tidied from her current site. */
export const serviceDetails: Record<string, { lead: string; sections: ServiceSection[]; reasonsId?: string }> = {
  "personal-injury": {
    lead:
      "Individuals who sustain significant injuries often experience financial losses in several areas, including employment. Loss of earning capacity is a major component in personal injury litigation.",
    reasonsId: "injury",
    sections: [
      {
        title: "How we help",
        summary: "Accurate estimates of lost wages, built on evidence-based, peer-reviewed methodology.",
        body: [
          "With extensive experience in vocational evaluation and rehabilitation, our vocational experts can help establish accurate estimates of lost wages after an individual sustains an injury that prevents them from working.",
          "Utilizing an evidence-based, peer-reviewed methodology, we provide a comprehensive and defensible product to strengthen your case. Our evaluations include a comprehensive battery of vocational testing as well as an in-depth analysis of medical, educational, and employment information, ultimately serving as the basis for expert witness testimony.",
        ],
      },
      {
        title: "Wage loss",
        summary: "Recovery-period wages, lost benefits, and missed promotions — temporary or permanent.",
        list: [
          "Wages you were unable to earn while recovering from injury",
          "Loss of benefits, or increase in benefits that employers provide",
          "Wage loss can be permanent or temporary",
          "Missed opportunities for promotion",
          "Unemployment may lead to poor credit",
        ],
      },
      {
        title: "Earning capacity & employability",
        summary: "What the person could earn, and the access to the labor market they have lost.",
        body: [
          "Earning capacity refers to an individual's earning potential if they were to optimize their employment efforts. It is often a central focus of civil injury litigation and is quantified in lost wages resulting from an injury or accident. When an individual's ability to work and earn is affected by an injury, a vocational expert can assess his or her loss of access to the labor market, and ultimately their loss of earning capacity.",
        ],
      },
      {
        title: "Transferable skills analysis",
        summary: "Which alternative jobs fit their past experience, skills, and abilities.",
        body: [
          "Transferable skills are developed exclusively through past semiskilled or skilled work experiences. When an individual is injured, he or she may not be able to return to a previous occupation. A transferable skills analysis can help identify what alternative jobs would be appropriate by analyzing the individual's past work experiences, skills, and abilities.",
        ],
      },
      {
        title: "Labor market research",
        summary: "Current job availability and wages — national, state, and local.",
        body: [
          "Once an individual's employability has been determined, we utilize current labor market data to determine the availability of jobs in the national, state, and local labor market as well as the wages associated with those jobs. Using reliable employment and wage data, direct employer contacts, and other sources, we can provide accurate estimates about what your client can expect to earn.",
        ],
      },
    ],
  },
  "marital-dissolution": {
    lead:
      "With divorce comes financial loss. Before alimony is court ordered, an earning capacity evaluation is essential for determining overall alimony.",
    reasonsId: "marital",
    sections: [
      {
        title: "Employability",
        summary: "Whether a spouse is ready to return to work, and which career goals are realistic.",
        body: [
          "Determining if a person is ready to return to work is the basis for employability. In the ever-changing world of work, it is not always easy to determine the best career goals. We help identify feasible vocational goals building on skills, interests, personality, aptitudes, and functional capacity to work. If a disability is involved, we identify which jobs would be appropriate and what accommodations would help the person compete and perform effectively in employment.",
        ],
      },
      {
        title: "Wage earning capacity",
        summary: "An unbiased report of what a spouse can earn — the key to fair alimony.",
        body: [
          "This is the most important piece of information used to settle your case. Without an earning capacity report you may be paying too much in alimony or receiving too little. It is not uncommon for a spouse to be underemployed, change employment, or say they can't earn what they did in the past.",
          "We determine which occupations a person is best qualified to pursue through past work history, education, transferable skills analysis, aptitudes, and current physical functional capacity, then provide an accurate assessment of wages in those occupations. Using wage and benefit information from W-2s, the SSA lifetime earnings statement, the U.S. Department of Labor and Bureau of Labor Statistics, other national, state, and local sources, and direct contact with local employers and staffing agencies, the earning capacity report provides an unbiased assessment of earning potential and available job openings for your attorney and the judge.",
        ],
      },
      {
        title: "Vocational planning",
        summary: "A rehabilitative plan with training, cost, and timeline for bridge-the-gap alimony.",
        body: [
          "Returning to the workforce is a challenging task, especially for someone who has been out of work for an extended period. If retraining is necessary, we provide a comprehensive rehabilitative plan detailing the steps to take when returning to work, including appropriate training programs and the cost and length of time needed to complete them. This is used in the bridge-the-gap alimony process.",
        ],
      },
    ],
  },
  "collaborative-divorce": {
    lead:
      "Collaborative divorce is a process by which you and your spouse can settle your differences without going through litigation.",
    sections: [
      {
        title: "A calmer way through separation",
        summary: "Settle differences without litigation, with professionals trained in the process.",
        body: [
          "This process allows you and your family to resolve issues amicably and often without the myriad of hardships typically faced in the legal setting. Both Ms. Fisher and Mr. Hallissey are trained in the collaborative divorce process, and Vocational Concepts can facilitate your separation.",
        ],
      },
      {
        title: "What the evaluation gives you",
        summary: "Know your skills and the labor market, so you negotiate from an interest-based position.",
        body: [
          "During the vocational evaluation, you will learn about the demands of the labor market and how your skills can be used to re-enter the workforce in a meaningful and rewarding capacity. A better understanding of your skills and abilities allows you to negotiate with your spouse from an interest-based position.",
        ],
      },
    ],
  },
  "other-litigation-support": {
    lead:
      "Vocational Concepts assists with employment law, long-term disability, product liability, medical review of records, Social Security matters, and labor market analysis. We work with either plaintiff or defense.",
    sections: [
      {
        title: "Employment law",
        summary: "Retention and a comprehensive report to settle or proceed with litigation.",
        body: [
          "Vocational Concepts provides retention and services for employment law cases in litigation. A comprehensive report is completed so that you can settle or proceed with litigation. A scope of services letter is needed for the retainer agreement.",
        ],
      },
      {
        title: "Long-term disability",
        summary: "A comprehensive vocational assessment for obtaining LTD benefits.",
        body: [
          "We provide a comprehensive vocational assessment of the disabled or injured individual for obtaining long-term disability benefits. Please provide a scope of services letter along with the insurance policy and medical records.",
        ],
      },
      {
        title: "Product liability",
        summary: "Lost wages, future medical needs, and expert testimony — for plaintiff or defense.",
        body: [
          "Product liability cases are generally class action suits or individual lawsuits where many people have been affected by injury or disease due to faulty products or negligent corporate decisions. Vocational Concepts can assist with settling the case for lost wages, future medical needs, medical record review, and expert testimony.",
        ],
      },
      {
        title: "Medical review of records",
        summary: "Chronological summaries by date and physician that shape case strategy.",
        body: [
          "Medical records are essential in providing a comprehensive vocational evaluation. The records review may show that an independent medical examination (IME) or functional capacity evaluation (FCE) is needed, and it helps attorneys strategize case direction.",
          "Our medical records review consultants summarize detailed medical records in chronological order, providing easy access to pertinent information by date and physician. Our rehabilitation counselors analyze documentation for case investigations, create reports, and collaborate with other experts to ensure comprehensive, timely, and cost-efficient analysis.",
        ],
      },
      {
        title: "Social Security",
        summary: "Occupational history, testing, and skills analysis to answer the SSA vocational expert.",
        body: [
          "Attorneys and representatives need information that allows them to cross-examine the Social Security Administration's vocational expert at hearings. Vocational Concepts can classify your client's occupational history and provide psychometric testing and transferable skills analysis to determine whether your client has other occupations they can perform. Ms. Fisher is our leading qualified Social Security expert.",
        ],
      },
      {
        title: "Labor market analysis",
        summary: "Employer surveys on available jobs, pay, and qualifications in your market.",
        body: [
          "Labor market analysis identifies the types of occupations in the national, state, regional, and local economy. We survey employers to determine salaries, ancillary pay, and the qualifications needed for occupations — critical in knowing whether sufficient numbers of jobs are readily available.",
        ],
        list: [
          "Size and characteristics of the labor market, along with demand for and supply of labor",
          "Characteristics and requirements of jobs based on industry and occupation",
          "Information on the workforce by industry, occupation, or educational attainment",
        ],
      },
    ],
  },
  "vocational-rehabilitation": {
    lead:
      "Vocational rehabilitation counseling is for individuals with disabilities who require specialized services for employment. Our counselors are all master's-level Certified Rehabilitation Counselors, and we are partners with the Florida Division of Vocational Rehabilitation.",
    sections: [
      {
        title: "What is a vocational evaluation?",
        summary: "A five-hour, collaborative look at your abilities, interests, and skills.",
        body: [
          "The vocational evaluation is a collaborative process through which you and your evaluator identify your abilities, interests, and skills. It usually lasts five hours. We first discuss your past work experience, educational background, and medical history, then administer a series of vocational assessments, some on paper and some on a computer.",
          "Once we identify realistic job goals, we explore labor market trends, job openings, and wages. The goal is to help you understand your skills and abilities and how to apply them to develop a meaningful and rewarding career.",
        ],
      },
      {
        title: "Comprehensive vocational evaluation",
        summary: "One day of interviews and testing that sets realistic career goals.",
        body: [
          "Typically completed in one day, this includes an interview, interest testing, academic testing, intelligence testing, aptitude testing, personality testing, and identification of your work values — with career exploration, labor market trends, and wage data to set appropriate vocational goals.",
        ],
      },
      {
        title: "Work site evaluation",
        summary: "One or two days exploring real work tasks and the accommodations you may need.",
        body: [
          "A one- or two-day process where you explore the world of work. It looks at work tolerance, self-direction, the ability to follow oral instructions, and accommodations that may be needed in the workplace — for those with medical, mental health, or learning disabilities.",
        ],
      },
      {
        title: "Simulated skills evaluation",
        summary: "Hands-on task testing to find the right industry and job.",
        body: [
          "A one-day evaluation that tests work skills by simulating the work task: computer skills, clerical tasks, hand tool and fine dexterity testing, or other tasks, along with interest and academic testing. It helps you and your counselor understand the services you need from VR and the industry and job you may be best suited for.",
        ],
      },
    ],
  },
  "career-counseling": {
    lead:
      "Vocational Concepts provides career counseling for all individuals interested in working. Whether you are interested in direct placement, vocational school, or college, having a vocational plan is paramount.",
    sections: [
      {
        title: "Plan for a changing job market",
        summary: "A clear career plan for students, graduates, and midlife career changers.",
        body: [
          "Today's job market is changing at a rapid pace due to automation, computer technology, and industry changes. Careers that exist today may not exist in the next 10 years. For high school students moving to higher education or adults making a midlife career change, our counselors help identify the right path. Career Transition services are available nationally, in person, by phone, or by video.",
        ],
      },
      {
        title: "Premium Career Counseling — $2,000",
        summary: "Testing, local career options with pay and job growth, and two hours of counseling.",
        body: [
          "Premium career counseling includes interest, work value, and ability testing and a brief personality assessment, with possible career options in your local or other area. We provide job growth numbers and median pay, and where and what training programs are available. Includes two hours of face-to-face or remote career counseling.",
          "Please complete an intake form and provide any transcripts of education or additional testing.",
        ],
      },
    ],
  },
};

export type Product = { id: string; name: string; detail?: string; description?: string; price: number | null };

/**
 * Her fees as of November 2026 (from her PayPal setup). Priced items are paid online through PayPal;
 * items without a price show "Request a quote". The live list is edited in the admin.
 */
export const shopCategories: { id: string; title: string; blurb: string; products: Product[] }[] = [
  {
    id: "court",
    title: "Consultations & Retainers",
    blurb: "Case consultations and litigation retainers for attorneys.",
    products: [
      {
        id: "case-consultation",
        name: "Case Consultation",
        detail: "1 hour",
        description: "One hour of case consultation for any type of vocational case.",
        price: 350,
      },
      {
        id: "retainer-personal-injury",
        name: "Personal Injury Retainer",
        description:
          "Comprehensive vocational evaluation with in-depth interview, testing, transferable skills, wage loss, and a rehabilitation plan, with vocational opinions and recommendations.",
        price: 5000,
      },
      {
        id: "retainer-employment-law",
        name: "Employment Law Retainer",
        description: "Retention and services for employment law cases in litigation, with a comprehensive report to settle or proceed.",
        price: 4500,
      },
      {
        id: "retainer-long-term-disability",
        name: "Long Term Disability Retainer",
        description: "A comprehensive vocational assessment of the disabled or injured individual for obtaining LTD benefits.",
        price: 4500,
      },
    ],
  },
  {
    id: "career",
    title: "Career Counseling",
    blurb: "Career planning for students, graduates, and career changers.",
    products: [
      {
        id: "career-premium",
        name: "Premium Career Counseling",
        detail: "Includes 2 hours of counseling",
        description:
          "Interest, work value, and ability testing, a brief personality assessment, local career options with job growth and pay, training programs, and two hours of face-to-face or remote counseling.",
        price: 2000,
      },
    ],
  },
  {
    id: "other",
    title: "Call for Pricing",
    blurb: "Priced to the scope of the case.",
    products: [
      { id: "labor-market-report", name: "Labor Market Report", price: null },
      { id: "medical-case-management", name: "Medical Case Management", price: null },
      { id: "medical-records-review", name: "Medical Records Review", price: null },
      { id: "ada-accommodations", name: "ADA Reasonable Accommodations", price: null },
      { id: "testing-assessments", name: "Testing Assessments for Individuals", price: null },
      { id: "post-offer-screenings", name: "Small Business Post-Offer Screenings", price: null },
    ],
  },
];

export const allProducts = shopCategories.flatMap((c) => c.products);

/** Which fees appear on each service page. */
export const serviceFees: Record<string, string[]> = {
  "personal-injury": ["case-consultation", "retainer-personal-injury", "labor-market-report", "medical-records-review"],
  "marital-dissolution": ["case-consultation", "labor-market-report"],
  "collaborative-divorce": ["case-consultation", "labor-market-report"],
  "other-litigation-support": [
    "case-consultation",
    "retainer-employment-law",
    "retainer-long-term-disability",
    "medical-records-review",
    "medical-case-management",
    "labor-market-report",
  ],
  "vocational-rehabilitation": ["testing-assessments", "ada-accommodations", "post-offer-screenings", "medical-case-management"],
  "career-counseling": ["career-premium", "testing-assessments"],
};

export const productLabel = (p: Product) => (p.detail ? `${p.name} (${p.detail})` : p.name);

/** Hourly items are bought by the hour, so the cart says "hours" instead of "qty". */
export const isHourly = (p: Product) => p.detail?.toLowerCase() === "per hour";

export const consultationTypes = [
  {
    id: "case-consultation",
    title: "Case Consultation",
    length: "1 hour",
    price: 350,
    productId: "case-consultation",
    description: "One hour of case consultation for any type of vocational case.",
  },
  {
    id: "free",
    title: "Free Consultation",
    length: "Phone or video",
    price: 0,
    description: "A short call to see whether a vocational expert is the right fit for your matter.",
  },
  {
    id: "career",
    title: "Career Counseling Intake",
    length: "Phone or video",
    price: 0,
    description: "For individuals exploring Premium Career Counseling.",
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
      "Marital dissolution, personal injury, Social Security, product liability, and other litigation that needs vocational or earning-capacity analysis. We work with either plaintiff or defense.",
  },
  {
    question: "Do you provide deposition and trial testimony?",
    answer:
      "Yes. Ms. Fisher has qualified as an expert in most Florida counties and in federal court, and provides testimony monthly for the Social Security Administration and forensic cases.",
  },
  {
    question: "Can the evaluation be done virtually?",
    answer:
      "Yes. Virtual vocational evaluations are available, and we also meet clients in a Regus office suite or at home. An in-person evaluation may be needed in certain disability-related cases.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a consultation online, call (813) 362-4078, or send a message through the contact page. We'll discuss the case and the type of vocational evaluation needed.",
  },
];

export const memberships = [
  { name: "American Board of Vocational Experts", role: "Diplomate" },
  { name: "International Association of Rehabilitation Professionals", role: "Forensics & Social Security sections" },
  { name: "Florida Division of Vocational Rehabilitation", role: "Partner provider" },
];

export const formatPrice = (price: number | null) =>
  price === null ? "Contact for pricing" : price === 0 ? "Free" : `$${price.toLocaleString("en-US")}`;
