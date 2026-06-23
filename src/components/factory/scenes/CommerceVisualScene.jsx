import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useEffect, useRef, useState } from "react";

const commerceStages = ["sample", "compose", "adapt", "export"];

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

export default function CommerceVisualScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState(null);
  const [loopKey, setLoopKey] = useState(0);
  const effectSequence = useRef({});
  const loopTimers = useRef([]);
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.commerce).map(([key, value]) => [key, value[locale] ?? value.en]),
  );

  function clearLoopTimers() {
    loopTimers.current.forEach((timer) => window.clearTimeout(timer));
    loopTimers.current = [];
  }

  useEffect(() => clearLoopTimers, []);

  function triggerEffect(event) {
    event.preventDefault();
    event.stopPropagation();
    clearLoopTimers();
    setEffects({});
    setActiveStage(null);
    setLoopKey((current) => current + 1);

    commerceStages.forEach((stage, index) => {
      const stageTimer = window.setTimeout(() => {
        const effectKey = (effectSequence.current[stage] ?? 0) + 1;
        effectSequence.current[stage] = effectKey;
        setActiveStage(stage);
        setEffects((current) => ({
          ...current,
          [stage]: effectKey,
        }));

        const clearStageTimer = window.setTimeout(() => {
          setEffects((current) => {
            if (current[stage] !== effectKey) {
              return current;
            }

            const next = { ...current };
            delete next[stage];
            return next;
          });
        }, 1900);
        loopTimers.current.push(clearStageTimer);
      }, index * 920);
      loopTimers.current.push(stageTimer);
    });

    const finishTimer = window.setTimeout(() => {
      setActiveStage(null);
    }, commerceStages.length * 920 + 1100);
    loopTimers.current.push(finishTimer);
  }

  return (
    <span className={`commerce-visual-scene ${activeStage ? `is-${activeStage}-active is-commerce-active` : ""}`}>
      <span className="commerce-visual-scene__picture">
        <img
          src={assetPath("/assets/factory/commerce/background-desktop-v1.webp")}
          alt=""
          className="commerce-visual-scene__backdrop"
        />
      </span>
      <span className="commerce-visual-scene__wash" />
      <span className="commerce-material-flow" aria-hidden="true" key={loopKey}>
        <i className="commerce-material-flow__rail commerce-material-flow__rail--sample" />
        <i className="commerce-material-flow__rail commerce-material-flow__rail--compose" />
        <i className="commerce-material-flow__rail commerce-material-flow__rail--adapt" />
        <i className="commerce-material-flow__card commerce-material-flow__card--swatch" />
        <i className="commerce-material-flow__card commerce-material-flow__card--poster" />
        <i className="commerce-material-flow__card commerce-material-flow__card--format" />
        <i className="commerce-material-flow__packet" />
      </span>

      <CommerceTarget
        className="commerce-target--sample"
        effectKey={effects.sample}
        label={labels.sample}
        onTrigger={triggerEffect}
      >
        <i className="commerce-swatch commerce-swatch--one" />
        <i className="commerce-swatch commerce-swatch--two" />
        <i className="commerce-swatch commerce-swatch--three" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--compose"
        effectKey={effects.compose}
        label={labels.compose}
        onTrigger={triggerEffect}
      >
        <i className="commerce-poster commerce-poster--one" />
        <i className="commerce-poster commerce-poster--two" />
        <i className="commerce-crop" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--adapt"
        effectKey={effects.adapt}
        label={labels.adapt}
        onTrigger={triggerEffect}
      >
        <i className="commerce-frame commerce-frame--wide" />
        <i className="commerce-frame commerce-frame--square" />
        <i className="commerce-frame commerce-frame--story" />
      </CommerceTarget>

      <CommerceTarget
        className="commerce-target--export"
        effectKey={effects.export}
        label={labels.export}
        onTrigger={triggerEffect}
      >
        <i className="commerce-box" />
        <i className="commerce-export-line" />
      </CommerceTarget>

      <span className="commerce-visual-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
