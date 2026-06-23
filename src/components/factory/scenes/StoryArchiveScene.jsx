import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useEffect, useRef, useState } from "react";

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

export default function StoryArchiveScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState("");
  const effectSequence = useRef({});
  const activeStageTimer = useRef(null);
  const archiveStages = ["archive", "develop", "review", "protect"];
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.story).map(([key, value]) => [key, value[locale] ?? value.en]),
  );

  useEffect(() => {
    return () => {
      if (activeStageTimer.current) {
        window.clearTimeout(activeStageTimer.current);
      }
    };
  }, []);

  function triggerEffect(event, stage) {
    event.preventDefault();
    event.stopPropagation();
    setActiveStage(stage);
    const stageIndex = archiveStages.indexOf(stage);
    const triggeredStages = stageIndex >= 0 ? archiveStages.slice(0, stageIndex + 1) : [stage];
    const activeDuration = stage === "protect" ? 5600 : stage === "review" ? 6200 : stage === "develop" ? 3900 : 3300;

    if (activeStageTimer.current) {
      window.clearTimeout(activeStageTimer.current);
    }

    activeStageTimer.current = window.setTimeout(() => {
      setActiveStage("");
    }, activeDuration);

    const effectKey = (effectSequence.current[stage] ?? 0) + 1;
    effectSequence.current[stage] = effectKey;
    const flowEffects = Object.fromEntries(triggeredStages.map((flowStage) => [flowStage, effectKey]));
    setEffects((current) => ({ ...current, ...flowEffects }));

    window.setTimeout(() => {
      setEffects((current) => {
        const next = { ...current };
        triggeredStages.forEach((flowStage) => {
          if (next[flowStage] === effectKey) {
            delete next[flowStage];
          }
        });
        return next;
      });
    }, activeDuration);
  }

  return (
    <span className={`story-archive-scene ${activeStage ? `is-${activeStage}-active is-story-active` : ""}`}>
      <span className="story-archive-scene__picture">
        <img
          src={assetPath("/assets/factory/story-archive/background-desktop-v1.webp")}
          alt=""
          className="story-archive-scene__backdrop"
        />
      </span>
      <span className="story-archive-scene__wash" />

      <span className="story-rights-loop" aria-hidden="true">
        <i className="story-rights-loop__rail story-rights-loop__rail--index" />
        <i className="story-rights-loop__rail story-rights-loop__rail--review" />
        <i className="story-rights-loop__rail story-rights-loop__rail--protect" />
        <i className="story-rights-loop__node story-rights-loop__node--archive" />
        <i className="story-rights-loop__node story-rights-loop__node--develop" />
        <i className="story-rights-loop__node story-rights-loop__node--review" />
        <i className="story-rights-loop__node story-rights-loop__node--protect" />
        <i className="story-rights-loop__folder" />
        <i className="story-rights-loop__manuscript" />
        <i className="story-rights-loop__thread" />
        <i className="story-rights-loop__review" />
        <i className="story-rights-loop__rights" />
        <i className="story-rights-loop__handoff" />
      </span>

      <ArchiveTarget
        className="story-target--archive"
        effectKey={effects.archive}
        label={labels.archive}
        onTrigger={(event) => triggerEffect(event, "archive")}
      >
        <i className="story-tab story-tab--one" />
        <i className="story-tab story-tab--two" />
        <i className="story-tab story-tab--three" />
      </ArchiveTarget>

      <ArchiveTarget
        className="story-target--develop"
        effectKey={effects.develop}
        label={labels.develop}
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
        label={labels.review}
        onTrigger={(event) => triggerEffect(event, "review")}
      >
        <img className="story-page story-page--one" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <img className="story-page story-page--two" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <img className="story-page story-page--three" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <img className="story-page story-page--four" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <img className="story-page story-page--five" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <img className="story-page story-page--six" src={assetPath("/assets/factory/story-archive/props/review-page-v1.webp")} alt="" />
        <i className="story-review-mark" />
      </ArchiveTarget>

      <ArchiveTarget
        className="story-target--protect"
        effectKey={effects.protect}
        label={labels.protect}
        onTrigger={(event) => triggerEffect(event, "protect")}
      >
        <i className="story-packet" />
        <i className="story-lock" />
      </ArchiveTarget>

      <span className="story-archive-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
