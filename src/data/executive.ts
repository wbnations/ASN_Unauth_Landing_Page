export const TODO_DESTINATION = "TODO" as const;

export type Destination = string | typeof TODO_DESTINATION;

export type LearningItem = {
  title: string;
  thumbnail: string;
  destination: string;
};

export type LearningLane = {
  id: string;
  heading: string;
  introduction: string;
  items: LearningItem[];
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
    heading: "Curated AI learning",
    introduction: "Explore two hand-picked playlists from AI Skills Navigator.",
  },
  learningLanes: [
    {
      id: "ai-essentials",
      heading: "AI Essentials for Business Impact",
      introduction: "Build baseline knowledge on leading organizational AI advancement.",
      items: [
        {
          title: "Leading Responsible AI in Organizations",
          thumbnail: "https://media.licdn.com/dms/image/v2/D4D0DAQGAzr3RwcnrGg/learning-public-crop_288_512/learning-public-crop_288_512/0/1707874444981?e=2147483647&v=beta&t=0dHb-cHyuuzfHITeWBBDpxFFbApU2Mi-vQaubZtwS4o",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/course-ac51184fe7a0580226b225237b38e37f3b2b5184f6e8cda7f3b1942d2759a123",
        },
        {
          title: "Embrace responsible AI principles and practices",
          thumbnail: "https://learn.microsoft.com/training/achievements/embrace-responsible-ai-principles-practices.svg",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/module-e2915f242de9e7469267c79e6854ec043fce42defe80e6cf22e57205fe87a8d6",
        },
        {
          title: "Generative AI for Business Leaders",
          thumbnail: "https://media.licdn.com/dms/image/v2/C4D0DAQHsCAbXLw-NOw/learning-public-crop_288_512/learning-public-crop_288_512/0/1678753390059?e=2147483647&v=beta&t=ttFyJOm1yoIp0N3bkjYXdgpbu7Xt_q-iMv-bdfuOJVk",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/course-004fb2b6b81818d0c733f3cf2431d667f16fe3dec16b9655802b354e1a8ea0e6",
        },
        {
          title: "AI Challenges and Opportunities for Leadership",
          thumbnail: "https://media.licdn.com/dms/image/v2/D560DAQGYvQ-OAeyO7Q/learning-public-crop_288_512/learning-public-crop_288_512/0/1697135680957?e=2147483647&v=beta&t=Uy-QahZpAKdD8K4knafIoEbTtCNfI1Euij-7h-3qef8",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/course-ec9a34e0ebaf1cb94276eaf60d747423e19bba10c8688c062a5e57eae1f1ecb7",
        },
      ],
    },
    {
      id: "ai-strategy",
      heading: "AI Transformation, Strategy & Governance",
      introduction: "Identify priority opportunities for AI initiatives and build plans to operationalize them.",
      items: [
        {
          title: "Transform your business with AI",
          thumbnail: "https://learn.microsoft.com/training/achievements/transform-your-business-with-microsoft-ai.svg",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/learningpath-6f4efa500fbe59ba5622f2caf47530375ac5c21fa7abc0ac6a3ec1716c62b401",
        },
        {
          title: "Drive business value with AI solutions",
          thumbnail: "https://learn.microsoft.com/training/achievements/generic-trophy.svg",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/learningpath-51edbd91355277c33de1ecd59d0d526ace6d39f498798c752aa0366867846d62",
        },
        {
          title: "Define a Microsoft AI strategy to create business value in finance",
          thumbnail: "https://learn.microsoft.com/training/achievements/define-microsoft-ai-strategy-finance.svg",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/module-7af8423c2429f2f3ce26f7513d2345eb2516193328de2661b77d97814907dd97",
        },
        {
          title: "Define a Microsoft AI strategy to create business value in retail",
          thumbnail: "https://learn.microsoft.com/training/achievements/generic-badge.svg",
          destination: "https://aiskillsnavigator.microsoft.com/explore/search/module-f044740fcdb84202da1a1273148bf97caa012458c2db719e1b597b3b3ffe48d2",
        },
      ],
    },
  ] satisfies LearningLane[],
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