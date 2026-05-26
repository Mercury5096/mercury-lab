import { useRef, useState } from "react";

function ArchiveTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`story-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="story-target__label">{label}</small>
    </span>
  );
}

export default function StoryArchiveScene() {
  const [effects, setEffects] = useState({});
  const effectSequence = useRef({});

  function triggerEffect(event, stage) {
    event.preventDefault();
    event.stopPropagation();
    const effectKey = (effectSequence.current[stage] ?? 0) + 1;
    effectSequence.current[stage] = effectKey;
    setEffects((current) => ({
      ...current,
      [stage]: effectKey,
    }));

    window.setTimeout(() => {
      setEffects((current) => {
        if (current[stage] !== effectKey) {
          return current;
        }

        const next = { ...current };
        delete next[stage];
        return next;
      });
    }, stage === "review" ? 5200 : 1900);
  }

  return (
    <span className="story-archive-scene">
      <span className="story-archive-scene__picture">
        <img
          src="/assets/factory/story-archive/background-desktop-v1.webp"
          alt=""
          className="story-archive-scene__backdrop"
        />
      </span>
      <span className="story-archive-scene__wash" />

      <ArchiveTarget
        className="story-target--archive"
        effectKey={effects.archive}
        label="Archive"
        onTrigger={(event) => triggerEffect(event, "archive")}
      >
        <i className="story-tab story-tab--one" />
        <i className="story-tab story-tab--two" />
        <i className="story-tab story-tab--three" />
      </ArchiveTarget>

      <ArchiveTarget
        className="story-target--develop"
        effectKey={effects.develop}
        label="Develop"
        onTrigger={(event) => triggerEffect(event, "develop")}
      >
        <i className="story-card story-card--one" />
        <i className="story-card story-card--two" />
        <i className="story-card story-card--three" />
        <i className="story-thread" />
      </ArchiveTarget>

      <ArchiveTarget
        className="story-target--review"
        effectKey={effects.review}
        label="Review"
        onTrigger={(event) => triggerEffect(event, "review")}
      >
        <img className="story-page story-page--one" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <img className="story-page story-page--two" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <img className="story-page story-page--three" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <img className="story-page story-page--four" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <img className="story-page story-page--five" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <img className="story-page story-page--six" src="/assets/factory/story-archive/props/review-page-v1.webp" alt="" />
        <i className="story-review-mark" />
      </ArchiveTarget>

      <ArchiveTarget
        className="story-target--protect"
        effectKey={effects.protect}
        label="Protect"
        onTrigger={(event) => triggerEffect(event, "protect")}
      >
        <i className="story-packet" />
        <i className="story-lock" />
      </ArchiveTarget>

      <span className="story-archive-scene__key">
        <small>Archive handling</small>
        <strong>Gold / reviewed layer</strong>
      </span>
    </span>
  );
}
