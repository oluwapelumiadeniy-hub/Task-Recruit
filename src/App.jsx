import { useRef, useState } from "react";
import "./styles.css";

const services = [
  {
    number: "01",
    category: "INTAKE",
    title: "Catch every opportunity",
    description:
      "Route enquiries, organize details, and tee up timely follow-ups so promising leads don't get lost in the shuffle.",
    link: "Explore enquiry workflows",
    art: "intake",
  },
  {
    number: "02",
    category: "OPERATIONS",
    title: "Keep the work moving",
    description:
      "Connect handoffs, reminders, and approvals across the tools your team already uses every day.",
    link: "Explore team workflows",
    art: "operations",
  },
  {
    number: "03",
    category: "CLARITY",
    title: "See what needs attention",
    description:
      "Turn scattered updates into useful summaries that help people decide what to do next.",
    link: "Explore reporting flows",
    art: "insights",
  },
];

const steps = [
  {
    number: "01",
    icon: "⌕",
    iconClass: "step-discover",
    title: "Find the friction",
    description:
      "We learn how work actually gets done, where it slows down, and what a better day would look like.",
  },
  {
    number: "02",
    icon: "✳",
    iconClass: "step-design",
    title: "Build the right flow",
    description:
      "We map, connect, and test a focused workflow with clear checkpoints and your team in the loop.",
  },
  {
    number: "03",
    icon: "✓",
    iconClass: "step-improve",
    title: "Make it work better",
    description:
      "We learn from real use and refine the flow as your team's needs change.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i /><i /><i /><i />
    </span>
  );
}

function Brand({ footer = false }) {
  return (
    <a className={footer ? "brand footer-brand" : "brand"} href="#top" aria-label="TaskCircuit home">
      <BrandMark />
      <span>Task<span className="brand-ai">Circuit</span></span>
    </a>
  );
}

function Header({ menuOpen, onToggle, onNavigate }) {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={onToggle}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} id="main-nav" aria-label="Main navigation">
          <a href="#solutions" onClick={onNavigate}>What we do</a>
          <a href="#belief" onClick={onNavigate}>Our approach</a>
          <a href="#contact" onClick={onNavigate}>Get started</a>
          <a className="nav-cta" href="#contact" onClick={onNavigate}>Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function WorkflowIllustration() {
  const rows = [
    { icon: "↘", iconClass: "icon-inbox", title: "New enquiry received", detail: "Website form · just now", end: "✓" },
    { icon: "✳", iconClass: "icon-spark", title: "Details organized", detail: "AI summary ready to review", end: "✓" },
    { icon: "↗", iconClass: "icon-user", title: "Owner gets the next step", detail: "Right context, right person", end: "→" },
  ];

  return (
    <div className="hero-art" role="img" aria-label="A new customer enquiry is organized, reviewed, and sent to the right person">
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="workflow-card">
        <div className="workflow-top">
          <div><span className="tiny-label">WORKFLOW SNAPSHOT</span><h2>New enquiry, handled.</h2></div>
          <span className="live-pill"><i />IN MOTION</span>
        </div>
        <div className="workflow-body">
          {rows.map((row, index) => (
            <div key={row.title}>
              <div className="flow-row">
                <span className={"flow-icon " + row.iconClass}>{row.icon}</span>
                <div><strong>{row.title}</strong><small>{row.detail}</small></div>
                <span className={index === rows.length - 1 ? "flow-arrow" : "flow-check"}>{row.end}</span>
              </div>
              {index < rows.length - 1 && <div className="flow-connector"><span /><span /><span /></div>}
            </div>
          ))}
        </div>
        <div className="workflow-foot"><span className="pulse" />Your team stays in control at every step</div>
      </div>
      <div className="floating-note note-top"><span className="note-icon">✦</span><span><strong>Less busywork</strong><small>More room to think</small></span></div>
      <div className="floating-note note-bottom"><span className="mini-bars"><i /><i /><i /><i /></span><span><strong>One smooth flow</strong><small>From first hello to next step</small></span></div>
      <div className="hero-stamp">GOOD<br />WORK,<br /><span>ON REPEAT.</span></div>
    </div>
  );
}

function SolutionArtwork({ type }) {
  if (type === "intake") {
    return (
      <div className="solution-illustration intake-art" aria-hidden="true">
        <div className="mini-window"><span className="window-dots">•••</span><span className="field-line" /><span className="field-line short" /><span className="send-chip">Send <b>↗</b></span></div>
        <i className="orbit-dot dot-a" /><i className="orbit-dot dot-b" /><i className="orbit-dot dot-c" />
      </div>
    );
  }
  if (type === "operations") {
    return (
      <div className="solution-illustration ops-art" aria-hidden="true">
        <div className="ops-node node-one">IN</div><div className="ops-line line-one" />
        <div className="ops-node node-two">AI</div><div className="ops-line line-two" />
        <div className="ops-node node-three">✓</div><div className="ops-caption">HANDOFF, WITHOUT THE HUNT</div>
      </div>
    );
  }
  const bars = [28, 46, 39, 65, 51, 78, 92];
  return (
    <div className="solution-illustration insight-art" aria-hidden="true">
      <div className="insight-head"><span>WEEKLY OVERVIEW</span><i>•••</i></div>
      <div className="insight-big">A clearer picture <span>↗</span></div>
      <div className="chart">{bars.map((height, index) => <i key={index} style={{ height: height + "%" }} />)}</div>
      <div className="chart-labels">{["M", "T", "W", "T", "F", "S", "S"].map((day, index) => <span key={index}>{day}</span>)}</div>
    </div>
  );
}

function Solutions() {
  return (
    <section className="solutions section-pad" id="solutions">
      <div className="container">
        <div className="section-heading two-col-heading">
          <div><div className="eyebrow"><span className="eyebrow-dot" />What we do</div><h2>Small, smart systems.<br /><em>Meaningful change.</em></h2></div>
          <p>Automation should make work feel clearer, not more complicated. We find the friction in your day and build a calmer way through it.</p>
        </div>
        <div className="solution-grid">
          {services.map((service) => (
            <article className={"solution-card " + (service.art === "intake" ? "card-lime" : service.art === "operations" ? "card-lavender" : "card-peach")} key={service.number}>
              <div className="solution-number">{service.number}<span> — {service.category}</span></div>
              <SolutionArtwork type={service.art} />
              <h3>{service.title}</h3><p>{service.description}</p>
              <a className="card-link" href="#contact">{service.link} <span>↗</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Belief() {
  return (
    <section className="belief section-pad" id="belief">
      <div className="container belief-grid">
        <div className="belief-visual" aria-hidden="true">
          <div className="belief-circle circle-back" /><div className="belief-line" />
          <div className="belief-circle circle-front"><span className="spark-big">✳</span><span className="circle-caption">THE BEST<br />OF BOTH</span></div>
          <div className="belief-pill pill-human"><span>●</span> HUMAN JUDGMENT</div>
          <div className="belief-pill pill-ai"><span>✦</span> HELPFUL AI</div>
        </div>
        <div className="belief-copy">
          <div className="eyebrow"><span className="eyebrow-dot" />People-first by design</div>
          <h2>Let technology handle the repeatable. <em>Keep people in the important parts.</em></h2>
          <p>Good automation supports your team instead of getting in its way. We design clear checkpoints and useful handoffs so people stay part of the process.</p>
          <ul className="check-list">
            <li><span>✓</span> Human review where it matters</li>
            <li><span>✓</span> Clear, understandable workflows</li>
            <li><span>✓</span> Built around your existing tools</li>
          </ul>
          <a className="text-link" href="#approach">A thoughtful way to start <span>↓</span></a>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach section-pad" id="approach">
      <div className="container">
        <div className="approach-heading"><div className="eyebrow"><span className="eyebrow-dot" />A clear path from idea to impact</div><h2>Simple to start.<br /><em>Thoughtful all the way through.</em></h2></div>
        <div className="steps">
          {steps.map((step, index) => (
            <Fragment key={step.number}>
              <article className="step">
                <span className="step-count">{step.number}</span><div className={"step-icon " + step.iconClass}>{step.icon}</div>
                <h3>{step.title}</h3><p>{step.description}</p>
              </article>
              {index < steps.length - 1 && <div className="step-arrow" aria-hidden="true">↗</div>}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const workflowRef = useRef(null);
  const [note, setNote] = useState("Your note stays in this browser. Copy it to share through your preferred contact channel.");

  async function copyBrief() {
    const text = workflowRef.current?.value.trim();
    if (!text) {
      setNote("Add a task first, then copy your brief.");
      workflowRef.current?.focus();
      return;
    }
    const brief = "TaskCircuit workflow brief\n\nThe task I would like to make easier:\n" + text;
    try {
      await navigator.clipboard.writeText(brief);
      setNote("Brief copied. Paste it into an email or message to TaskCircuit.");
    } catch {
      workflowRef.current?.select();
      setNote("Select and copy your task description to share it with TaskCircuit.");
    }
  }

  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-panel">
        <div className="contact-shape shape-one" /><div className="contact-shape shape-two" />
        <div className="contact-copy">
          <div className="eyebrow eyebrow-light"><span className="eyebrow-dot" />Ready when you are</div>
          <h2>Let’s make work<br /><em>feel lighter.</em></h2>
          <p>Tell us what’s taking too much time. Start with one repeat task and see where a smoother workflow could take you.</p>
        </div>
        <div className="contact-form">
          <label htmlFor="workflow">What's the task you wish would happen automatically?</label>
          <textarea ref={workflowRef} id="workflow" placeholder="For example: when a new client books, add them to our tracker and let the right person know…" />
          <button className="button button-lime" type="button" onClick={copyBrief}>Copy a workflow brief <span aria-hidden="true">↗</span></button>
          <p className="form-note" aria-live="polite">{note}</p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main"><Brand footer /><p>Make room for better work.</p><a className="back-top" href="#top">Back to top ↑</a></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} TaskCircuit</span><span>Thoughtful automation. Human in the loop.</span></div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Header menuOpen={menuOpen} onToggle={() => setMenuOpen((open) => !open)} onNavigate={() => setMenuOpen(false)} />
      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" />Thoughtful automation for growing teams</div>
              <h1>Make room for the work <em>that moves you forward.</em></h1>
              <p className="hero-intro">We connect your tools and simplify repetitive workflows with practical AI automation—so your team can spend more time on the work that needs a human touch.</p>
              <div className="hero-actions"><a className="button button-dark" href="#contact">Start with one workflow <span aria-hidden="true">↗</span></a><a className="text-link" href="#solutions">Explore what we do <span aria-hidden="true">↓</span></a></div>
              <div className="hero-note"><span className="avatar-stack" aria-hidden="true"><b>✓</b><b>✳</b><b>↗</b></span><span>Built around your people, process, and tools.</span></div>
            </div>
            <WorkflowIllustration />
          </div>
        </section>
        <section className="tool-strip" aria-label="Common workflow touchpoints"><div className="container tool-strip-inner"><span className="tool-caption">WE CONNECT THE WORK YOU ALREADY DO</span><div className="tool-list"><span>CRM</span><b>·</b><span>EMAIL</span><b>·</b><span>FORMS</span><b>·</b><span>CALENDAR</span><b>·</b><span>YOUR STACK</span></div></div></section>
        <Solutions />
        <Belief />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Fragment({ children }) {
  return <>{children}</>;
}

