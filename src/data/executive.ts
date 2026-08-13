export const TODO_DESTINATION = "TODO" as const;

export type Destination = string | typeof TODO_DESTINATION;

export type ContentReference = {
  title: string;
  duration?: string;
  destination: Destination;
};

export type JtbdGroup = {
  heading: string;
  description: string;
  recommendationType: "Recommended playlist" | "Recommended learning path";
  playlist: {
    title: string;
    description: string;
    destination: Destination;
  };
  relevantContent: ContentReference[];
  cta: {
    label: string;
    destination: Destination;
  };
};

export const executivePage = {
  slug: "executive",
  audience: "Executive",
  labels: {
    relevantContent: "Relevant content",
    featuredContent: "Featured content",
  },
  title: "Lead your organization into the AI era",
  description:
    "Turn AI ambition into measurable business value. Explore curated learning designed to help leaders prioritize opportunities, guide responsible adoption, and prepare their organizations for change.",
  primaryCTA: {
    label: "Explore executive learning",
    destination: TODO_DESTINATION,
  },
  secondaryCTA: {
    label: "Assess your team’s readiness",
    destination: "#readiness",
  },
  supportingCopy: "No technical background required. Sign in when you’re ready to start learning.",
  jtbdSection: {
    heading: "What do you want to accomplish?",
    introduction:
      "Choose the leadership challenge most relevant to you. Each path combines concise learning formats selected for business decision-makers.",
  },
  jtbdGroups: [
    {
      heading: "I want to understand AI’s business potential",
      description:
        "Build the foundational knowledge to discuss AI confidently, recognize practical opportunities, and ask the right questions.",
      recommendationType: "Recommended playlist",
      playlist: {
        title: "AI Essentials for Business Impact",
        description: "Build baseline knowledge for leading organizational AI advancement.",
        destination: TODO_DESTINATION,
      },
      relevantContent: [
        "Generative AI for Business Leaders",
        "Understand the foundations of generative AI for business leaders",
        "Leading Responsible AI in Organizations",
        "Embrace responsible AI principles and practices",
        "Strengthen Your Decision-Making with Generative AI",
        "Building a Collaborative Team Culture with AI",
      ].map((title) => ({ title, destination: TODO_DESTINATION })),
      cta: { label: "Build my AI foundation", destination: TODO_DESTINATION },
    },
    {
      heading: "I want to create an AI strategy that delivers value",
      description:
        "Move from disconnected experiments to an organizational strategy with defined outcomes, governance, ownership, and a path to scale.",
      recommendationType: "Recommended playlist",
      playlist: {
        title: "AI Transformation, Strategy & Governance",
        description: "Identify priority AI opportunities and build plans to operationalize them.",
        destination: TODO_DESTINATION,
      },
      relevantContent: [
        { title: "Transform your business with AI", duration: "2 hr 34 min", destination: TODO_DESTINATION },
        { title: "Drive business value with AI solutions", duration: "1 hr 8 min", destination: TODO_DESTINATION },
        { title: "Create business value with AI", duration: "31 min", destination: TODO_DESTINATION },
        { title: "Scale AI in your organization", duration: "23 min", destination: TODO_DESTINATION },
        { title: "Industry-specific AI strategy modules", destination: TODO_DESTINATION },
      ],
      cta: { label: "Develop my AI strategy", destination: TODO_DESTINATION },
    },
    {
      heading: "I want to lead responsible, organization-wide adoption",
      description:
        "Create the culture, governance, skills, and operating model needed to scale AI confidently and responsibly.",
      recommendationType: "Recommended playlist",
      playlist: {
        title: "Future-Focused Leadership & Trends",
        description:
          "Make high-stakes decisions that scale AI responsibly and unlock transformative growth.",
        destination: TODO_DESTINATION,
      },
      relevantContent: [
        "Scale AI in your organization",
        "Integrating Generative AI into Business Strategy",
        "Investing in Human Skills in the Age of AI",
        "AI Challenges and Opportunities for Leadership",
        "How to Keep Your Team on the Bleeding Edge of AI Innovation",
      ].map((title) => ({ title, destination: TODO_DESTINATION })),
      cta: { label: "Prepare my organization", destination: TODO_DESTINATION },
    },
    {
      heading: "I want to turn AI capabilities into practical solutions",
      description:
        "Understand how Copilot and Microsoft Foundry can improve productivity, automate work, and address high-value business scenarios.",
      recommendationType: "Recommended learning path",
      playlist: {
        title: "Drive business value with AI solutions",
        description:
          "Align AI capabilities with organizational goals and select secure, responsible approaches.",
        destination: TODO_DESTINATION,
      },
      relevantContent: [
        "Drive business value with Microsoft Copilot solutions",
        "Drive business value with AI using Microsoft Foundry Tools",
      ].map((title) => ({ title, destination: TODO_DESTINATION })),
      cta: { label: "Explore practical AI solutions", destination: TODO_DESTINATION },
    },
  ] satisfies JtbdGroup[],
  editorialFeature: {
    eyebrow: "Featured now",
    heading: "From AI experimentation to measurable impact",
    body: [
      "Many organizations have started experimenting with AI. The leadership challenge is turning those experiments into repeatable business outcomes.",
      "Explore practical guidance for selecting valuable scenarios, building organizational readiness, establishing responsible governance, and measuring whether AI investments are working.",
    ],
    featuredContent: "Create business value with AI",
    duration: "31 minutes",
    cta: {
      label: "Learn how to move from experimentation to impact",
      destination: TODO_DESTINATION,
    },
  },
  readinessChecklist: {
    heading: "Is your organization ready to scale AI?",
    introduction: "Use these questions to identify your next leadership priority:",
    items: [
      "Have we identified the business outcomes AI should improve?",
      "Do we have executive ownership and accountable decision-makers?",
      "Is the data required for priority scenarios accessible and governed?",
      "Have we defined responsible-AI, security and compliance guardrails?",
      "Are employees prepared to change how work gets done?",
      "Can we measure adoption, business impact and risk?",
      "Do we know which experiments should be stopped, continued or scaled?",
    ],
    cta: { label: "Get the executive readiness checklist", destination: TODO_DESTINATION },
  },
  featuredOffer: {
    eyebrow: "Featured credential",
    heading: "Validate your ability to lead AI transformation",
    offer: "Microsoft Certified: AI Transformation Leader",
    description:
      "Designed for business decision-makers guiding AI transformation with Microsoft 365 Copilot, Azure AI and Microsoft Foundry. No coding skills required.",
    cta: {
      label: "Explore the credential",
      destination:
        "https://aiskillsnavigator.microsoft.com/explore/search/cert-cdf39a1841cdef420d1ded46dc192d3f09a1b3ec5811521c29f7c6140cf5c791",
    },
  },
  nextSteps: {
    heading: "Continue your AI transformation journey",
    cards: [
      {
        title: "Build your leadership capability",
        description: "Start with curated executive learning in AI Skills Navigator.",
        cta: { label: "Explore executive learning", destination: TODO_DESTINATION },
      },
      {
        title: "Align your leadership team",
        description:
          "Bring decision-makers together to identify priority scenarios, readiness gaps and next actions.",
        cta: { label: "Register for an AI transformation workshop", destination: TODO_DESTINATION },
      },
      {
        title: "Prepare your workforce",
        description: "Connect your AI strategy to a role-based organizational skilling plan.",
        cta: { label: "Explore organizational skilling", destination: TODO_DESTINATION },
      },
    ],
  },
} as const;