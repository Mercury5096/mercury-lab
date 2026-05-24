import { useRef, useState } from "react";
import {
  brand,
  caseFiles,
  processingModes,
  rooms,
  sectionContent,
  usageSteps,
} from "./content";

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

function ManualPanel({ room }) {
  return (
    <article
      className="manual-panel"
      id={`panel-${room.id}`}
      role="tabpanel"
      aria-labelledby={`room-${room.id}`}
      tabIndex={0}
    >
      <div className="manual-panel__top">
        <div>
          <p className="eyebrow">Module Manual / {room.code}</p>
          <h3>{read(room.title)}</h3>
        </div>
        <span className={`status ${room.displayLevel === "abstract" ? "restricted" : ""}`}>
          {read(room.status)}
        </span>
      </div>
      <p className="manual-summary">{read(room.summary)}</p>
      <dl className="manual-spec">
        <div>
          <dt>Active period</dt>
          <dd>{room.period}</dd>
        </div>
        <div>
          <dt>Production scope</dt>
          <dd>{read(room.discipline)}</dd>
        </div>
        <div>
          <dt>Evidence basis</dt>
          <dd>{read(room.evidence)}</dd>
        </div>
        <div>
          <dt>Display rule</dt>
          <dd>{read(room.display)}</dd>
        </div>
      </dl>
    </article>
  );
}

function ContentFactory() {
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const roomRefs = useRef([]);
  const selectedRoom = rooms.find((room) => room.id === activeRoom);

  function moveFocus(event, index) {
    let target = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      target = (index + 1) % rooms.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      target = (index - 1 + rooms.length) % rooms.length;
    } else if (event.key === "Home") {
      target = 0;
    } else if (event.key === "End") {
      target = rooms.length - 1;
    }

    if (target !== null) {
      event.preventDefault();
      setActiveRoom(rooms[target].id);
      roomRefs.current[target]?.focus();
    }
  }

  return (
    <section className="factory section-shell" id="factory">
      <SectionHeading
        eyebrow={read(sectionContent.factory.eyebrow)}
        title={read(sectionContent.factory.title)}
        description={read(sectionContent.factory.description)}
      />
      <div className="factory-grid">
        <div className="cutaway">
          <div className="factory-sign">
            <span>Mercury Content Works</span>
            <span className="signal" aria-hidden="true" />
          </div>
          <div
            className="rooms-grid"
            role="tablist"
            aria-label="Mercury Lab production rooms"
          >
            {rooms.map((room, index) => {
              const active = room.id === activeRoom;
              return (
                <button
                  className={`room ${active ? "active" : ""}`}
                  id={`room-${room.id}`}
                  key={room.id}
                  role="tab"
                  ref={(element) => {
                    roomRefs.current[index] = element;
                  }}
                  aria-selected={active}
                  aria-controls={`panel-${room.id}`}
                  tabIndex={active ? 0 : -1}
                  type="button"
                  onClick={() => setActiveRoom(room.id)}
                  onKeyDown={(event) => moveFocus(event, index)}
                >
                  <span className="room__code">{room.code}</span>
                  <span className="room__period">{room.period}</span>
                  <strong>{read(room.title)}</strong>
                  <span className="room__line" aria-hidden="true" />
                  <span className="room__instruction">Open manual</span>
                </button>
              );
            })}
          </div>
          <div className="conveyor" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <ManualPanel room={selectedRoom} />
      </div>
    </section>
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
        <span className="edition">v0.1 / EN</span>
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

        <ContentFactory />

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
        <span>Mercury Lab / Prototype v0.1</span>
        <span>English-first / Rights-aware / Evidence-controlled</span>
      </footer>
    </div>
  );
}

export default App;
