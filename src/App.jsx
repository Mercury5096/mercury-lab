import {
  brand,
  appCopy,
  caseFiles,
  processingModes,
  rooms,
  sectionContent,
  usageSteps,
} from "./content";
import { useEffect, useState } from "react";
import ContentFactory from "./components/ContentFactory";

const read = (value, locale) =>
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
  const [locale, setLocale] = useState("en");
  const [activeCaseIndex, setActiveCaseIndex] = useState(null);
  const [activeAssetIndex, setActiveAssetIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);
  const isZh = locale === "zh";
  const contactEmail = "merrcuy5096@gmail.com";
  const t = appCopy;
  const activeCase = activeCaseIndex === null ? null : caseFiles[activeCaseIndex];
  const activeRoom = activeCaseIndex === null ? null : rooms[activeCaseIndex];
  const activeProof = activeRoom?.proof;
  const activeAssets = activeProof?.assets ?? [];
  const activeAsset = activeAssets[activeAssetIndex] ?? activeAssets[0] ?? null;
  const activeVideos = activeProof?.videos ?? [];

  useEffect(() => {
    if (activeCaseIndex === null) {
      return undefined;
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setActiveCaseIndex(null);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeCaseIndex]);

  function openCaseGallery(index) {
    setActiveCaseIndex(index);
    setActiveAssetIndex(0);
  }

  return (
    <div className="page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label={t.header.brandAria}>
          <span className="brand-mark">Hg</span>
          <span>{brand.name}</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#factory">{read(t.nav.factory, locale)}</a>
          <a href="#modes">{read(t.nav.modes, locale)}</a>
          <a href="#cases">{read(t.nav.cases, locale)}</a>
          <a href="#protocol">{read(t.nav.protocol, locale)}</a>
        </nav>
        <div className="header-tools">
          <button
            className="locale-toggle"
            type="button"
            aria-label={read(t.header.switchAria, locale)}
            onClick={() => setLocale(isZh ? "en" : "zh")}
          >
            {read(t.header.switchLabel, locale)}
          </button>
          <span className="edition">{read(t.header.edition, locale)}</span>
        </div>
      </header>

      <main id="top">
        <ContentFactory
          heroEyebrow={read(sectionContent.hero.eyebrow, locale)}
          subtitle={read(brand.subtitle, locale)}
          positioning={read(brand.positioning, locale)}
          eyebrow={read(sectionContent.factory.eyebrow, locale)}
          title={read(sectionContent.factory.title, locale)}
          description={read(sectionContent.factory.description, locale)}
          locale={locale}
        />

        <section className="usage section-shell" id="use">
          <SectionHeading
            eyebrow={read(sectionContent.usage.eyebrow, locale)}
            title={read(sectionContent.usage.title, locale)}
            description={read(sectionContent.usage.description, locale)}
          />
          <div className="usage-grid">
            {usageSteps.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>
                <h3>{read(step.title, locale)}</h3>
                <p>{read(step.body, locale)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="modes section-shell" id="modes">
          <SectionHeading
            eyebrow={read(sectionContent.modes.eyebrow, locale)}
            title={read(sectionContent.modes.title, locale)}
          />
          <div className="mode-list">
            {processingModes.map((mode) => (
              <article key={mode.id}>
                <p className="mode-tag">{read(t.cases.modeTag, locale)}</p>
                <h3>{read(mode.label, locale)}</h3>
                <p>{read(mode.description, locale)}</p>
                <code>{read(mode.route, locale)}</code>
              </article>
            ))}
          </div>
        </section>

        <section className="cases section-shell" id="cases">
          <SectionHeading
            eyebrow={read(sectionContent.cases.eyebrow, locale)}
            title={read(sectionContent.cases.title, locale)}
            description={read(sectionContent.cases.description, locale)}
          />
          <div className="case-grid">
            {caseFiles.map((file, index) => (
              <article key={file.title.en}>
                <p className="file-number">
                  {t.cases.filePrefix} {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{read(file.title, locale)}</h3>
                <p>{read(file.note, locale)}</p>
                <button
                  className={`case-evidence-button ${
                    file.displayLevel === "abstract" ? "restricted" : ""
                  }`}
                  type="button"
                  aria-label={`${read(file.title, locale)} / ${read(t.cases.openEvidence, locale)}`}
                  onClick={() => openCaseGallery(index)}
                >
                  {read(file.status, locale)}
                </button>
              </article>
            ))}
          </div>
        </section>

        {activeCase && (
          <section className="evidence-lightbox" role="dialog" aria-modal="true">
            <button
              className="evidence-lightbox__scrim"
              type="button"
              aria-label={read(t.cases.closeGallery, locale)}
              onClick={() => setActiveCaseIndex(null)}
            />
            <article className="evidence-lightbox__panel">
              <header className="evidence-lightbox__head">
                <div>
                  <p className="eyebrow">{read(t.cases.selectedEvidence, locale)}</p>
                  <h3>{read(activeCase.title, locale)}</h3>
                  {activeProof?.label && <span>{read(activeProof.label, locale)}</span>}
                </div>
                <button type="button" onClick={() => setActiveCaseIndex(null)}>
                  {read(t.cases.closeGallery, locale)}
                </button>
              </header>

              <div className="evidence-lightbox__body">
                <div className="evidence-lightbox__stage">
                  {activeAsset ? (
                    <img src={activeAsset.src} alt={activeAsset.alt} />
                  ) : (
                    <p>{read(t.cases.noImages, locale)}</p>
                  )}
                </div>

                {activeAssets.length > 1 && (
                  <div
                    className="evidence-lightbox__thumbs"
                    aria-label={read(t.cases.selectedEvidence, locale)}
                  >
                    {activeAssets.map((asset, index) => (
                      <button
                        className={index === activeAssetIndex ? "active" : ""}
                        key={asset.src}
                        type="button"
                        onClick={() => setActiveAssetIndex(index)}
                      >
                        <img src={asset.src} alt="" />
                      </button>
                    ))}
                  </div>
                )}

                {activeVideos.length > 0 && (
                  <div className="evidence-lightbox__links">
                    <p>{read(t.cases.projectLinks, locale)}</p>
                    {activeVideos.map((video) => (
                      <a href={video.url} key={video.url} rel="noreferrer" target="_blank">
                        <span>{read(video.type, locale)}</span>
                        <strong>{read(video.title, locale)}</strong>
                        <small>{read(video.role, locale)}</small>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </section>
        )}

        <section className="protocol section-shell" id="protocol">
          <SectionHeading
            eyebrow={read(sectionContent.protocol.eyebrow, locale)}
            title={read(sectionContent.protocol.title, locale)}
          />
          <div className="protocol-grid">
            <div className="protocol-statement">
              <p>{read(sectionContent.protocol.statement, locale)}</p>
              <div
                className="contact-actions"
                aria-label={read(t.collaboration.contactOptionsAria, locale)}
              >
                <a href="https://www.linkedin.com/in/mercury-ooi-9a653067/" rel="noreferrer" target="_blank">
                  {read(t.collaboration.contactLinkedIn, locale)}
                </a>
                <button
                  type="button"
                  onClick={async () => {
                    await navigator.clipboard.writeText(contactEmail);
                    setEmailCopied(true);
                    window.setTimeout(() => setEmailCopied(false), 1800);
                  }}
                >
                  {emailCopied
                    ? read(t.collaboration.contactEmailCopied, locale)
                    : read(t.collaboration.contactEmail, locale)}
                </button>
              </div>
            </div>
            <ul className="protocol-rules">
              {sectionContent.protocol.rules.map((rule) => (
                <li key={rule.en}>{read(rule, locale)}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>{read(t.footer.left, locale)}</span>
        <span>{read(t.footer.right, locale)}</span>
      </footer>
    </div>
  );
}

export default App;
