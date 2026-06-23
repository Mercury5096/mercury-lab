import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useEffect, useRef, useState } from "react";

function EditorialTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`editorial-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="editorial-target__label">{label}</small>
    </span>
  );
}

export default function EditorialKitchenScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState(null);
  const effectSequence = useRef({});
  const activeStageTimer = useRef(null);
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.editorial).map(([key, value]) => [key, value[locale] ?? value.en]),
  );

  useEffect(() => () => {
    window.clearTimeout(activeStageTimer.current);
  }, []);

  function triggerEffect(event, stage) {
    event.preventDefault();
    event.stopPropagation();
    const effectKey = (effectSequence.current[stage] ?? 0) + 1;
    effectSequence.current[stage] = effectKey;
    window.clearTimeout(activeStageTimer.current);
    setActiveStage(stage);
    setEffects((current) => ({
      ...current,
      [stage]: effectKey,
    }));

    activeStageTimer.current = window.setTimeout(() => {
      setActiveStage(null);
    }, 2800);

    window.setTimeout(() => {
      setEffects((current) => {
        if (current[stage] !== effectKey) {
          return current;
        }

        const next = { ...current };
        delete next[stage];
        return next;
      });
    }, stage === "layout" ? 2300 : 1800);
  }

  return (
    <span className={`editorial-kitchen-scene ${activeStage ? `is-${activeStage}-active is-editorial-active` : ""}`}>
      <span className="editorial-kitchen-scene__picture">
        <img
          src={assetPath("/assets/factory/editorial/background-desktop-v1.webp")}
          alt=""
          className="editorial-kitchen-scene__backdrop"
        />
      </span>
      <span className="editorial-kitchen-scene__wash" />
      <span className="editorial-page-cycle" aria-hidden="true">
        <i className="editorial-page-cycle__rail editorial-page-cycle__rail--draft" />
        <i className="editorial-page-cycle__rail editorial-page-cycle__rail--layout" />
        <i className="editorial-page-cycle__rail editorial-page-cycle__rail--release" />
        <i className="editorial-page-cycle__sheet editorial-page-cycle__sheet--draft" />
        <i className="editorial-page-cycle__sheet editorial-page-cycle__sheet--layout" />
        <i className="editorial-page-cycle__mark" />
        <i className="editorial-page-cycle__release" />
      </span>

      <EditorialTarget
        className="editorial-target--draft"
        effectKey={effects.draft}
        label={labels.draft}
        onTrigger={(event) => triggerEffect(event, "draft")}
      >
        <i className="editorial-note editorial-note--one" />
        <i className="editorial-note editorial-note--two" />
        <i className="editorial-note editorial-note--three" />
      </EditorialTarget>

      <EditorialTarget
        className="editorial-target--layout"
        effectKey={effects.layout}
        label={labels.layout}
        onTrigger={(event) => triggerEffect(event, "layout")}
      >
        <i className="editorial-spread" />
        <i className="editorial-grid editorial-grid--one" />
        <i className="editorial-grid editorial-grid--two" />
        <i className="editorial-grid editorial-grid--three" />
      </EditorialTarget>

      <EditorialTarget
        className="editorial-target--edit"
        effectKey={effects.edit}
        label={labels.edit}
        onTrigger={(event) => triggerEffect(event, "edit")}
      >
        <i className="editorial-pencil" />
        <i className="editorial-mark editorial-mark--one" />
        <i className="editorial-mark editorial-mark--two" />
      </EditorialTarget>

      <EditorialTarget
        className="editorial-target--release"
        effectKey={effects.release}
        label={labels.release}
        onTrigger={(event) => triggerEffect(event, "release")}
      >
        <i className="editorial-stack" />
        <i className="editorial-route" />
      </EditorialTarget>

      <span className="editorial-kitchen-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
