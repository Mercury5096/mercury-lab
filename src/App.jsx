import {
  brand,
  caseFiles,
  processingModes,
  sectionContent,
  usageSteps,
} from "./content";
import ContentFactory from "./components/ContentFactory";

const locale = "en";
const read = (value) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-copy">{description}</p>}
    </div>
  );
}

function App() {
  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mercury Lab home">
          <span className="brand-mark">Hg</span>
          <span>Mercury Lab</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#factory">Factory</a>
          <a href="#modes">Modes</a>
          <a href="#cases">Cases</a>
          <a href="#protocol">Protocol</a>
        </nav>
        <span className="edition">v0.2 / EN</span>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow">{read(sectionContent.hero.eyebrow)}</p>
            <h1>
              Mercury
              <span>Lab</span>
            </h1>
            <p className="subtitle">{read(brand.subtitle)}</p>
            <p className="positioning">{read(brand.positioning)}</p>
            <div className="hero-actions">
              <a className="primary-action" href="#factory">
                Enter the factory
              </a>
              <a className="secondary-action" href="#protocol">
                Read protocol
              </a>
            </div>
          </div>
          <div className="hero-instrument" aria-hidden="true">
            <div className="dial">
              <span>INPUT</span>
              <span>METHOD</span>
              <span>OUTPUT</span>
              <i />
            </div>
            <div className="receipt">
              <p>ACTIVE LINE</p>
              <strong>PRINT - CONTENT - AI</strong>
              <div className="barcode" />
              <small>HUMAN-IN-THE-LOOP / EVIDENCE CONTROLLED</small>
            </div>
          </div>
        </section>

        <ContentFactory
          eyebrow={read(sectionContent.factory.eyebrow)}
          title={read(sectionContent.factory.title)}
          description={read(sectionContent.factory.description)}
        />

        <section className="usage section-shell" id="use">
          <SectionHeading
            eyebrow={read(sectionContent.usage.eyebrow)}
            title={read(sectionContent.usage.title)}
            description={read(sectionContent.usage.description)}
          />
          <div className="usage-grid">
            {usageSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{read(step.title)}</h3>
                <p>{read(step.body)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modes section-shell" id="modes">
          <SectionHeading
            eyebrow={read(sectionContent.modes.eyebrow)}
            title={read(sectionContent.modes.title)}
          />
          <div className="mode-list">
            {processingModes.map((mode) => (
              <article key={mode.id}>
                <p className="mode-tag">Mode</p>
                <h3>{read(mode.label)}</h3>
                <p>{read(mode.description)}</p>
                <code>{read(mode.route)}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="cases section-shell" id="cases">
          <SectionHeading
            eyebrow={read(sectionContent.cases.eyebrow)}
            title={read(sectionContent.cases.title)}
            description={read(sectionContent.cases.description)}
          />
          <div className="case-grid">
            {caseFiles.map((file, index) => (
              <article key={file.title.en}>
                <p className="file-number">FILE {String(index + 1).padStart(2, "0")}</p>
                <h3>{read(file.title)}</h3>
                <p>{read(file.note)}</p>
                <span className={file.displayLevel === "abstract" ? "restricted" : ""}>
                  {read(file.status)}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="protocol section-shell" id="protocol">
          <SectionHeading
            eyebrow={read(sectionContent.protocol.eyebrow)}
            title={read(sectionContent.protocol.title)}
          />
          <div className="protocol-grid">
            <div className="protocol-statement">
              <p>{read(sectionContent.protocol.statement)}</p>
              <button type="button" disabled>
                Contact destination pending approval
              </button>
            </div>
            <ul className="protocol-rules">
              {sectionContent.protocol.rules.map((rule) => (
                <li key={rule.en}>{read(rule)}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Mercury Lab / Prototype v0.2</span>
        <span>English-first / Rights-aware / Evidence-controlled</span>
      </footer>
    </div>
  );
}

export default App;
