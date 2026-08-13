import { useEffect, useState, type ReactNode } from "react";
import { executivePage, type ContentReference, type Destination, type JtbdGroup } from "./data/executive";
import { buildAsnUrl, isAvailableDestination } from "./utils/urls";

const annotations = [
  { target: "#executive", title: "Executive lane", detail: "Stable audience anchor with unauthenticated positioning and ASN handoff." },
  { target: "#jtbd", title: "JTBD groups", detail: "Four leadership challenges organize verified playlists and learning titles." },
  { target: "#editorial", title: "Editorial feature", detail: "A replaceable timely feature driven entirely by the content model." },
  { target: "#readiness", title: "Readiness checklist", detail: "A non-interactive prompt list with no scoring, storage, forms, or data capture." },
  { target: "#credential", title: "Featured offer", detail: "The verified AI Transformation Leader credential destination." },
  { target: "#next-steps", title: "One Microsoft next steps", detail: "Cross-Microsoft actions stay disabled until approved URLs are supplied." },
];

function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

function ActionLink({ destination, label, content, className }: {
  destination: Destination;
  label: string;
  content: string;
  className: string;
}) {
  if (!isAvailableDestination(destination)) {
    return <span className={`${className} is-disabled`} aria-disabled="true">{label}</span>;
  }

  const href = destination.startsWith("#")
    ? destination
    : buildAsnUrl(destination, executivePage.slug, content);
  return <a className={className} href={href}>{label} <ArrowIcon /></a>;
}

function TrackedAsnLink({ destination, content, children, ...props }: {
  destination: string;
  content: string;
  children: ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return <a {...props} href={buildAsnUrl(destination, executivePage.slug, content)}>{children}</a>;
}

function ContentList({ items }: { items: readonly ContentReference[] }) {
  return (
    <ul className="content-list">
      {items.map((item) => (
        <li key={item.title}>
          <span>{item.title}</span>
          {item.duration && <span className="content-duration">{item.duration}</span>}
        </li>
      ))}
    </ul>
  );
}

function JtbdCard({ group, index, open }: { group: JtbdGroup; index: number; open: boolean }) {
  return (
    <details className="jtbd-card" open={open}>
      <summary>
        <span className="jtbd-number" aria-hidden="true">0{index + 1}</span>
        <span className="jtbd-heading"><h3>{group.heading}</h3><span>{group.description}</span></span>
        <span className="disclosure-icon" aria-hidden="true">⌄</span>
      </summary>
      <div className="jtbd-body">
        <div className="recommendation">
          <p className="section-label">{group.recommendationType}</p>
          <h4>{group.playlist.title}</h4>
          <p>{group.playlist.description}</p>
        </div>
        <div>
          <p className="section-label">{executivePage.labels.relevantContent}</p>
          <ContentList items={group.relevantContent} />
        </div>
        <ActionLink className="text-cta" content={`jtbd_${index + 1}`} destination={group.cta.destination} label={group.cta.label} />
      </div>
    </details>
  );
}

function EditorialFeature() {
  const feature = executivePage.editorialFeature;
  return (
    <section className="editorial-feature" id="editorial" aria-labelledby="editorial-heading">
      <div className="editorial-copy">
        <p className="eyebrow">{feature.eyebrow}</p>
        <h2 id="editorial-heading">{feature.heading}</h2>
        {feature.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="featured-content">
        <p className="section-label">{executivePage.labels.featuredContent}</p>
        <h3>{feature.featuredContent}</h3>
        <p className="feature-duration"><span aria-hidden="true">◷</span> {feature.duration}</p>
        <ActionLink className="text-cta" content="editorial_feature" destination={feature.cta.destination} label={feature.cta.label} />
      </div>
    </section>
  );
}

function ReadinessChecklist() {
  const checklist = executivePage.readinessChecklist;
  return (
    <section className="readiness-section" id="readiness" aria-labelledby="readiness-heading">
      <div className="section-heading">
        <h2 id="readiness-heading">{checklist.heading}</h2>
        <p>{checklist.introduction}</p>
      </div>
      <ul className="readiness-list">
        {checklist.items.map((item) => <li key={item}><span aria-hidden="true">✓</span>{item}</li>)}
      </ul>
      <ActionLink className="button-secondary" content="readiness_checklist" destination={checklist.cta.destination} label={checklist.cta.label} />
    </section>
  );
}

function FeaturedOffer() {
  const offer = executivePage.featuredOffer;
  return (
    <section className="featured-offer" id="credential" aria-labelledby="offer-heading">
      <div><p className="eyebrow">{offer.eyebrow}</p><h2 id="offer-heading">{offer.heading}</h2></div>
      <div className="offer-detail">
        <span className="credential-mark" aria-hidden="true">AI</span>
        <div>
          <h3>{offer.offer}</h3>
          <p>{offer.description}</p>
          <ActionLink className="text-cta" content="featured_credential" destination={offer.cta.destination} label={offer.cta.label} />
        </div>
      </div>
    </section>
  );
}

function NextSteps() {
  const nextSteps = executivePage.nextSteps;
  return (
    <section className="next-steps" id="next-steps" aria-labelledby="next-steps-heading">
      <h2 id="next-steps-heading">{nextSteps.heading}</h2>
      <div className="next-step-grid">
        {nextSteps.cards.map((card, index) => (
          <article className="next-step-card" key={card.title}>
            <span className="step-index" aria-hidden="true">0{index + 1}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <ActionLink className="text-cta" content={`next_step_${index + 1}`} destination={card.cta.destination} label={card.cta.label} />
          </article>
        ))}
      </div>
    </section>
  );
}

function AnnotationRail({ open }: { open: boolean }) {
  return (
    <aside className="annotation-rail" aria-label="Prototype annotations">
      <details className="annotation-panel" open={open} key={String(open)}>
        <summary><span>Prototype annotations</span><span className="annotation-toggle" aria-hidden="true">⌄</span></summary>
        <div className="annotation-body">
          <p className="annotation-kicker">Review layer — not site copy</p>
          <ol>
            {annotations.map((annotation, index) => (
              <li key={annotation.title}>
                <a href={annotation.target} aria-label={`Go to annotation ${index + 1}: ${annotation.title}`}>
                  <span className="annotation-number" aria-hidden="true">{index + 1}</span>
                  <span><strong>{annotation.title}</strong><span>{annotation.detail}</span></span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </details>
    </aside>
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
        <TrackedAsnLink className="site-brand" content="global_brand" destination="https://aiskillsnavigator.microsoft.com/" aria-label="AI Skills Navigator home">
          <img src="https://aiskillsnavigator.microsoft.com/assets/Microsoft-logo-DrxmtfFd.svg" alt="Microsoft logo" />
          <span className="brand-divider" aria-hidden="true" /><span>AI Skills Navigator</span>
        </TrackedAsnLink>
        <TrackedAsnLink className="sign-in" content="global_sign_in" destination="https://aiskillsnavigator.microsoft.com/">Sign in</TrackedAsnLink>
      </header>

      <div className="review-layout">
        <main>
          <section className="executive-hero" id={executivePage.slug} aria-labelledby="page-title">
            <div className="hero-copy">
              <p className="eyebrow">{executivePage.audience}</p>
              <h1 id="page-title">{executivePage.title}</h1>
              <p className="hero-description">{executivePage.description}</p>
              <div className="hero-actions">
                <ActionLink className="button-primary" content="hero_primary" destination={executivePage.primaryCTA.destination} label={executivePage.primaryCTA.label} />
                <ActionLink className="button-secondary" content="hero_secondary" destination={executivePage.secondaryCTA.destination} label={executivePage.secondaryCTA.label} />
              </div>
              <p className="supporting-copy">{executivePage.supportingCopy}</p>
            </div>
            <div className="hero-art" aria-hidden="true"><span /><span /><span /></div>
          </section>

          <section className="jtbd-section" id="jtbd" aria-labelledby="jtbd-heading">
            <div className="section-heading">
              <h2 id="jtbd-heading">{executivePage.jtbdSection.heading}</h2>
              <p>{executivePage.jtbdSection.introduction}</p>
            </div>
            <div className="jtbd-grid">
              {executivePage.jtbdGroups.map((group, index) => <JtbdCard group={group} index={index} open={false} key={`${group.heading}-${isMobile}`} />)}
            </div>
          </section>

          <EditorialFeature />
          <ReadinessChecklist />
          <FeaturedOffer />
          <NextSteps />
        </main>
        <AnnotationRail open={!isMobile} />
      </div>

      <footer className="site-footer" id="site-footer">
        <nav aria-label="Microsoft legal links">
          <a href="https://go.microsoft.com/fwlink/?LinkId=521839">Privacy &amp; Cookies</a>
          <a href="https://go.microsoft.com/fwlink/?linkid=2259814">Consumer Health Privacy</a>
          <a href="https://aka.ms/YourCaliforniaPrivacyChoices">Your Privacy Choices</a>
          <TrackedAsnLink content="footer_terms" destination="https://aiskillsnavigator.microsoft.com/termsofuse">Terms of Use</TrackedAsnLink>
          <a href="https://www.microsoft.com/legal/intellectualproperty/Trademarks/">Trademark</a>
          <a href="https://aka.ms/VoiceOfTheCustomer_AISkillsNavigator">Provide feedback</a>
        </nav>
        <span>© Microsoft 2026</span>
      </footer>
    </div>
  );
}

export default App;