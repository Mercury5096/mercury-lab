import { useRef, useState } from "react";

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

export default function EditorialKitchenScene() {
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
    }, stage === "layout" ? 2300 : 1800);
  }

  return (
    <span className="editorial-kitchen-scene">
      <span className="editorial-kitchen-scene__picture">
        <img
          src="/assets/factory/editorial/background-desktop-v1.webp"
          alt=""
          className="editorial-kitchen-scene__backdrop"
        />
      </span>
      <span className="editorial-kitchen-scene__wash" />

      <EditorialTarget
        className="editorial-target--draft"
        effectKey={effects.draft}
        label="Draft"
        onTrigger={(event) => triggerEffect(event, "draft")}
      >
        <i className="editorial-note editorial-note--one" />
        <i className="editorial-note editorial-note--two" />
        <i className="editorial-note editorial-note--three" />
      </EditorialTarget>

      <EditorialTarget
        className="editorial-target--layout"
        effectKey={effects.layout}
        label="Layout"
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
        label="Edit"
        onTrigger={(event) => triggerEffect(event, "edit")}
      >
        <i className="editorial-pencil" />
        <i className="editorial-mark editorial-mark--one" />
        <i className="editorial-mark editorial-mark--two" />
      </EditorialTarget>

      <EditorialTarget
        className="editorial-target--release"
        effectKey={effects.release}
        label="Release"
        onTrigger={(event) => triggerEffect(event, "release")}
      >
        <i className="editorial-stack" />
        <i className="editorial-route" />
      </EditorialTarget>

      <span className="editorial-kitchen-scene__key">
        <small>Editorial cycle</small>
        <strong>Gold / approved pass</strong>
      </span>
    </span>
  );
}
