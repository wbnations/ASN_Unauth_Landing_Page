export const TODO_DESTINATION = "TODO" as const;

export type Destination = string | typeof TODO_DESTINATION;

export type LearningItem = {
  title: string;
  thumbnail: string;
  destination: Destination;
};

export const executivePage = {
  slug: "learning",
  labels: {
    relevantContent: "Relevant content",
    featuredContent: "Featured content",
  },
  title: "Lead your organization into the AI era",
  description:
    "Turn AI ambition into measurable business value. Explore curated learning designed to help leaders prioritize opportunities, guide responsible adoption, and prepare their organizations for change.",
  primaryCTA: {
    label: "Explore featured learning",
    destination: TODO_DESTINATION,
  },
  secondaryCTA: {
    label: "Assess your team’s readiness",
    destination: "#readiness",
  },
  supportingCopy: "No technical background required. Sign in when you’re ready to start learning.",
  learningSection: {
    heading: "Featured playlists",
    introduction:
      "Explore curated playlists selected to build practical AI knowledge and help turn ideas into action.",
  },
  learningItems: [
    {
      title: "Generative AI for Business Leaders",
      thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGYvQ-OAeyO7Q/learning-public-crop_288_512/learning-public-crop_288_512/0/1697135680957?e=2147483647&v=beta&t=Uy-QahZpAKdD8K4knafIoEbTtCNfI1Euij-7h-3qef8",
      destination: TODO_DESTINATION,
    },
    {
      title: "Leading Responsible AI in Organizations",
      thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGAzr3RwcnrGg/learning-public-crop_288_512/learning-public-crop_288_512/0/1707874444981?e=2147483647&v=beta&t=0dHb-cHyuuzfHITeWBBDpxFFbApU2Mi-vQaubZtwS4o",
      destination: TODO_DESTINATION,
    },
    {
      title: "Strengthen Your Decision-Making with Generative AI",
      thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQH6o0dBpeKeSQ/learning-public-crop_288_512/learning-public-crop_288_512/0/1723241795976?e=2147483647&v=beta&t=dIf0I6LUiETJ8POr5F19PAx1lbOuMATk9MWSxU4_QCc",
      destination: TODO_DESTINATION,
    },
    {
      title: "Building a Collaborative Team Culture with AI",
      thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGacUhVUryqwg/learning-public-crop_288_512/learning-public-crop_288_512/0/1701470880361?e=2147483647&v=beta&t=f9KQVsnHR0hmAjVo3vrTepraCZZd4bOkqA4UEryz5-w",
      destination: TODO_DESTINATION,
    },
  ] satisfies LearningItem[],
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
      "Do we have clear ownership and accountable decision-makers?",
      "Is the data required for priority scenarios accessible and governed?",
      "Have we defined responsible-AI, security and compliance guardrails?",
      "Are employees prepared to change how work gets done?",
      "Can we measure adoption, business impact and risk?",
      "Do we know which experiments should be stopped, continued or scaled?",
    ],
    cta: { label: "Get the AI readiness checklist", destination: TODO_DESTINATION },
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
        description: "Start with curated learning in AI Skills Navigator.",
        cta: { label: "Explore featured learning", destination: TODO_DESTINATION },
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