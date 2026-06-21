import {
  brand,
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
  const isZh = locale === "zh";
  const t = {
    factory: isZh ? "工廠" : "Factory",
    modes: isZh ? "路徑" : "Modes",
    cases: isZh ? "案例" : "Cases",
    protocol: isZh ? "協作" : "Protocol",
    edition: isZh ? "v0.5 / 中文" : "v0.5 / EN",
    switchLabel: isZh ? "EN" : "中文",
    switchAria: isZh ? "Switch to English" : "切換到中文",
    contactPending: isZh ? "聯絡 / LinkedIn 待補" : "Contact / LinkedIn pending",
    openEvidence: isZh ? "查看相冊" : "Open gallery",
    closeGallery: isZh ? "關閉相冊" : "Close gallery",
    selectedEvidence: isZh ? "精選證據相冊" : "Selected Evidence Gallery",
    noImages: isZh ? "這個案例目前以外部連結為主。" : "This case currently uses external links.",
    projectLinks: isZh ? "作品連結" : "Project links",
    footerLeft: isZh ? "Mercury Lab / 原型 v0.5" : "Mercury Lab / Prototype v0.5",
    footerRight: isZh
      ? "中英切換 / 權利邊界 / 證據導向"
      : "Bilingual / Rights-aware / Evidence-controlled",
  };
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
        <a className="brand" href="#top" aria-label="Mercury Lab home">
          <span className="brand-mark">Hg</span>
          <span>Mercury Lab</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#factory">{t.factory}</a>
          <a href="#modes">{t.modes}</a>
          <a href="#cases">{t.cases}</a>
          <a href="#protocol">{t.protocol}</a>
        </nav>
        <div className="header-tools">
          <button
            className="locale-toggle"
            type="button"
            aria-label={t.switchAria}
            onClick={() => setLocale(isZh ? "en" : "zh")}
          >
            {t.switchLabel}
          </button>
          <span className="edition">{t.edition}</span>
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
                <p className="mode-tag">{isZh ? "路徑" : "Mode"}</p>
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
                <p className="file-number">FILE {String(index + 1).padStart(2, "0")}</p>
                <h3>{read(file.title, locale)}</h3>
                <p>{read(file.note, locale)}</p>
                <button
                  className={`case-evidence-button ${
                    file.displayLevel === "abstract" ? "restricted" : ""
                  }`}
                  type="button"
                  aria-label={`${read(file.title, locale)} / ${t.openEvidence}`}
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
              aria-label={t.closeGallery}
              onClick={() => setActiveCaseIndex(null)}
            />
            <article className="evidence-lightbox__panel">
              <header className="evidence-lightbox__head">
                <div>
                  <p className="eyebrow">{t.selectedEvidence}</p>
                  <h3>{read(activeCase.title, locale)}</h3>
                  {activeProof?.label && <span>{read(activeProof.label, locale)}</span>}
                </div>
                <button type="button" onClick={() => setActiveCaseIndex(null)}>
                  {t.closeGallery}
                </button>
              </header>

              <div className="evidence-lightbox__body">
                <div className="evidence-lightbox__stage">
                  {activeAsset ? (
                    <img src={activeAsset.src} alt={activeAsset.alt} />
                  ) : (
                    <p>{t.noImages}</p>
                  )}
                </div>

                {activeAssets.length > 1 && (
                  <div className="evidence-lightbox__thumbs" aria-label={t.selectedEvidence}>
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
                    <p>{t.projectLinks}</p>
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
              <button type="button" disabled>
                {t.contactPending}
              </button>
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
        <span>{t.footerLeft}</span>
        <span>{t.footerRight}</span>
      </footer>
    </div>
  );
}

export default App;
