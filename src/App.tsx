import { useEffect, useState } from "react";

type ContentItem = {
  type: "Playlist" | "Session";
  title: string;
  description: string;
  duration: string;
  artwork: string;
};

type Lane = {
  id: string;
  label: string;
  title: string;
  items: ContentItem[];
};

const lanes: Lane[] = [
  {
    id: "leadership",
    label: "Conversation A",
    title: "Lead your organization into the AI era",
    items: [
      { type: "Playlist", title: "AI transformation for leaders", description: "Build an actionable strategy for responsible, organization-wide AI adoption.", duration: "2h 15m", artwork: "strategy" },
      { type: "Playlist", title: "Accelerate business value with AI", description: "Turn priority scenarios into measurable outcomes with a practical leadership plan.", duration: "1h 30m", artwork: "value" },
      { type: "Session", title: "The AI-ready organization", description: "Learn the operating model, culture, and skills that support durable AI change.", duration: "45m", artwork: "organization" },
      { type: "Session", title: "Responsible AI in practice", description: "Move from principles to governance patterns your teams can use today.", duration: "30m", artwork: "responsible" },
    ],
  },
  {
    id: "building",
    label: "Conversation B",
    title: "Build and ship secure AI experiences",
    items: [
      { type: "Playlist", title: "Create intelligent apps", description: "Explore the core tools and patterns behind production-ready AI applications.", duration: "1h 45m", artwork: "apps" },
      { type: "Playlist", title: "Develop copilots with confidence", description: "Design, ground, evaluate, and improve copilots for real business scenarios.", duration: "2h 10m", artwork: "copilots" },
      { type: "Session", title: "Secure AI from the start", description: "Apply identity, data, and threat protection throughout the AI lifecycle.", duration: "50m", artwork: "security" },
      { type: "Session", title: "From prototype to production", description: "Use evaluation and observability to ship reliable AI experiences at scale.", duration: "35m", artwork: "production" },
    ],
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function ContentCard({ item }: { item: ContentItem }) {
  return (
    <a className="content-card" href={`#${item.artwork}`} aria-label={`View ${item.type.toLowerCase()}: ${item.title}`}>
      <div className={`card-art card-art-${item.artwork}`} aria-hidden="true"><span /><span /><span /></div>
      <div className="card-body">
        <p className="content-type">{item.type}</p>
        <h3>{item.title}</h3>
        <p className="card-description">{item.description}</p>
        <div className="card-meta">
          <span className="duration"><span aria-hidden="true">◷</span> {item.duration}</span>
          <span className="card-link">View {item.type.toLowerCase()} <ArrowIcon /></span>
        </div>
      </div>
    </a>
  );
}

function ConversationLane({ lane, open }: { lane: Lane; open: boolean }) {
  return (
    <details className="lane" id={lane.id} open={open}>
      <summary className="lane-heading">
        <span className="anchor-icon" aria-hidden="true">⌁</span>
        <span className="lane-label">{lane.label}</span>
        <h2>{lane.title}</h2>
        <span className="lane-chevron" aria-hidden="true">⌄</span>
      </summary>
      <div className="lane-content">
        <div className="content-grid">
          {lane.items.map((item) => <ContentCard item={item} key={item.title} />)}
        </div>
        <a className="lane-cta" href={`#next-${lane.id}`}>Explore next steps for this conversation <ArrowIcon /></a>
      </div>
    </details>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 700px)").matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    const updateLayout = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", updateLayout);
    return () => mediaQuery.removeEventListener("change", updateLayout);
  }, []);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="site-brand" href="https://aiskillsnavigator.microsoft.com/" aria-label="AI Skills Navigator home">
          <img src="https://aiskillsnavigator.microsoft.com/assets/Microsoft-logo-DrxmtfFd.svg" alt="Microsoft logo" />
          <span className="brand-divider" aria-hidden="true" />
          <span>AI Skills Navigator</span>
        </a>
        <a className="sign-in" href="https://aiskillsnavigator.microsoft.com/">Sign in</a>
      </header>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-copy">
            <p className="eyebrow">AI Skills Navigator</p>
            <h1 id="page-title">Start your AI skilling journey</h1>
            <p className="hero-subtitle">Choose a conversation, explore hand-picked learning, and build the skills to put AI to work.</p>
            <a className="button-primary" href="#leadership">Start learning <ArrowIcon /></a>
          </div>
          <div className="hero-art" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <div className="lanes" aria-label="Learning conversations">
          {lanes.map((lane, index) => (
            <ConversationLane lane={lane} open={!isMobile || index === 0} key={`${lane.id}-${isMobile}`} />
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <nav aria-label="Microsoft legal links">
          <a href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy &amp; Cookies</a>
          <a href="https://go.microsoft.com/fwlink/?linkid=2259814">Consumer Health Privacy</a>
          <a href="https://aka.ms/YourCaliforniaPrivacyChoices">Your Privacy Choices</a>
          <a href="https://aiskillsnavigator.microsoft.com/termsofuse">Terms of Use</a>
          <a href="https://www.microsoft.com/legal/intellectualproperty/Trademarks/">Trademark</a>
          <a href="https://aka.ms/VoiceOfTheCustomer_AISkillsNavigator">Provide feedback</a>
        </nav>
        <span>© Microsoft 2026</span>
      </footer>
    </div>
  );
}

export default App;