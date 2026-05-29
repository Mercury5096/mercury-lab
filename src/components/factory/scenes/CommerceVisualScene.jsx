import { useRef, useState } from "react";

function CommerceTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`commerce-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="commerce-target__label">{label}</small>
    </span>
  );
}

export default function CommerceVisualScene() {
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
    }, stage === "adapt" ? 2200 : 1800);
  }

  return (
    <span className="commerce-visual-scene">
      <span className="commerce-visual-scene__picture">
        <img
          src="/assets/factory/commerce/background-desktop-v1.webp"
          alt=""
          className="commerce-visual-scene__backdrop"
        />
      </span>
      <span className="commerce-visual-scene__wash" />

      <CommerceTarget
        className="commerce-target--sample"
        effectKey={effects.sample}
        label="Sample"
        onTrigger={(event) => triggerEffect(event, "sample")}
      >
        <i className="commerce-swatch commerce-swatch--one" />
        <i className="commerce-swatch commerce-swatch--two" />
        <i className="commerce-swatch commerce-swatch--three" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--compose"
        effectKey={effects.compose}
        label="Compose"
        onTrigger={(event) => triggerEffect(event, "compose")}
      >
        <i className="commerce-poster commerce-poster--one" />
        <i className="commerce-poster commerce-poster--two" />
        <i className="commerce-crop" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--adapt"
        effectKey={effects.adapt}
        label="Adapt"
        onTrigger={(event) => triggerEffect(event, "adapt")}
      >
        <i className="commerce-frame commerce-frame--wide" />
        <i className="commerce-frame commerce-frame--square" />
        <i className="commerce-frame commerce-frame--story" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--export"
        effectKey={effects.export}
        label="Export"
        onTrigger={(event) => triggerEffect(event, "export")}
      >
        <i className="commerce-box" />
        <i className="commerce-export-line" />
      </CommerceTarget>

      <span className="commerce-visual-scene__key">
        <small>Visual adaptation</small>
        <strong>Gold / approved sample</strong>
      </span>
    </span>
  );
}
