export type TestimonialSource = "Google" | "Clutch" | "Trustpilot";

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  source: TestimonialSource;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "We'd tried two other agencies in Lahore before and nothing stuck: half-finished features, no communication. This time was different. We described a messy manual process for tracking leads and walked away with a CRM our sales team actually opens every morning. Next Software Development Company pushed back when we asked for something that didn't make sense, which honestly built more trust than if they'd just said yes to everything.",
    author: "Saqib Shah",
    role: "CEO, Retail Group · Lahore, Pakistan",
    source: "Google",
  },
  {
    quote:
      "I run a small manufacturing unit in Faisalabad and our inventory was still on Excel sheets that three different people kept overwriting. The team built us a proper ERP that talks to our billing, and stock discrepancies practically disappeared. What stood out was that they visited our warehouse before writing a single line of code instead of just working off a call.",
    author: "Imran Baig",
    role: "Operations Director, Textile Manufacturing · Faisalabad, Pakistan",
    source: "Clutch",
  },
  {
    quote:
      "Our old online store in Karachi was held together with plugins nobody understood anymore. The rebuild took about six weeks. Checkout is fast now, JazzCash and Easypaisa both work without the payment failures we used to get, and our conversion rate has roughly doubled since launch. I've already sent two other shop owners their way.",
    author: "Zara Khan",
    role: "Founder, Fashion Brand · Karachi, Pakistan",
    source: "Trustpilot",
  },
  {
    quote:
      "We needed a booking app for our clinic in Islamabad and had zero idea where to start technically. They explained everything in plain language, gave us a realistic timeline instead of over-promising, and the Android app has genuinely cut our front-desk phone calls in half. Patients book their own slots now.",
    author: "Dr. Hina Anwar",
    role: "Founder, Healthcare Clinic · Islamabad, Pakistan",
    source: "Google",
  },
  {
    quote:
      "As a real estate agency in Rawalpindi, our biggest problem was leads slipping through the cracks between WhatsApp, email, and phone calls. The CRM they built pulls everything into one dashboard, and our agents actually use it because it's simple, not because they're forced to. Support after launch has been quick too.",
    author: "Ahmed Raza",
    role: "Managing Partner, Real Estate Agency · Rawalpindi, Pakistan",
    source: "Clutch",
  },
  {
    quote:
      "We run four grocery outlets in Multan and were still billing customers by hand at two of them. They set up a POS linked across all branches, so now I can check daily sales from my phone without calling each manager. The switch took under a month with barely any downtime.",
    author: "Waqas Malik",
    role: "Owner, Grocery Chain · Multan, Pakistan",
    source: "Trustpilot",
  },
  {
    quote:
      "Finding a partner in Peshawar that actually understood what a logistics business needs was harder than I expected. Most agencies just wanted to build a generic website. This team asked about our fleet tracking problems first and built the product around solving that, not the other way round.",
    author: "Fahad Yousafzai",
    role: "Director, Logistics Company · Peshawar, Pakistan",
    source: "Google",
  },
  {
    quote:
      "Our school in Sialkot needed a student management system that parents could actually use without a manual. Fee tracking, attendance, report cards: all in one portal now. The onboarding session they ran for our teachers was more useful than the entire documentation from our old vendor.",
    author: "Nadia Farooq",
    role: "Principal, Private School Network · Sialkot, Pakistan",
    source: "Clutch",
  },
  {
    quote:
      "I was skeptical about outsourcing our mobile app development locally instead of going abroad, mostly on price assumptions. Next Software Development Company ended up cheaper and faster than a quote I got from an agency in Europe, and the iOS app passed App Store review on the first submission.",
    author: "Bilal Chaudhry",
    role: "Founder, Food Delivery Startup · Lahore, Pakistan",
    source: "Trustpilot",
  },
  {
    quote:
      "Our accounting firm in Karachi handles a lot of sensitive client data, so security was non-negotiable. They walked us through their approach to data protection before we signed anything, not after we complained. The client portal has held up fine through two audit seasons now.",
    author: "Samina Qureshi",
    role: "Partner, Accounting Firm · Karachi, Pakistan",
    source: "Google",
  },
  {
    quote:
      "We manufacture auto parts in Gujranwala and needed a system that could handle both export orders and local distribution separately. Most vendors wanted us to fit into their template. This team built around our actual workflow, and our export paperwork errors dropped noticeably.",
    author: "Tariq Mehmood",
    role: "General Manager, Auto Parts Manufacturing · Gujranwala, Pakistan",
    source: "Clutch",
  },
  {
    quote:
      "I've worked with freelancers and small agencies in Islamabad for years and always ended up maintaining the code myself afterward. This was the first project where the handover documentation was actually usable: clear comments, a proper README, nothing I had to reverse-engineer six months later.",
    author: "Omar Siddiqui",
    role: "CTO, Fintech Startup · Islamabad, Pakistan",
    source: "Trustpilot",
  },
  {
    quote:
      "Our restaurant chain in Lahore needed online ordering that worked during peak dinner rush without crashing, which had happened twice with our previous setup. They stress-tested it before launch, something nobody had bothered to mention before. Zero downtime since we went live in December.",
    author: "Rabia Sheikh",
    role: "Co-Founder, Restaurant Chain · Lahore, Pakistan",
    source: "Google",
  },
  {
    quote:
      "As a small NGO in Quetta, our budget was tight and I said so upfront. They didn't disappear or lose interest. They scoped a version that covered what we actually needed for donor reporting and left room to add features later once we had more funding. That kind of honesty is rare.",
    author: "Farrukh Baloch",
    role: "Program Director, Non-Profit Organization · Quetta, Pakistan",
    source: "Clutch",
  },
  {
    quote:
      "We're a mid-sized textile exporter in Sialkot and our biggest headache was reconciling orders across email, WhatsApp, and a shared spreadsheet. The order management system they built consolidated all of it, and our export team says they've cut two full days of manual reconciliation every month.",
    author: "Yasir Iqbal",
    role: "Export Manager, Textile Exports · Sialkot, Pakistan",
    source: "Trustpilot",
  },
];
