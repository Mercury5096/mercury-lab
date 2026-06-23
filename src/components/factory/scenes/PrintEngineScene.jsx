import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useEffect, useRef, useState } from "react";

function PrintTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`print-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="print-target__label">{label}</small>
    </span>
  );
}

export default function PrintEngineScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState(null);
  const effectSequence = useRef({});
  const activeStageTimer = useRef(null);
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.print).map(([key, value]) => [key, value[locale] ?? value.en]),
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
    }, 3000);

    window.setTimeout(() => {
      setEffects((current) => {
        if (current[stage] !== effectKey) {
          return current;
        }

        const next = { ...current };
        delete next[stage];
        return next;
      });
    }, stage === "proof" ? 2600 : stage === "output" ? 2300 : 1900);
  }

  return (
    <span className={`print-engine-scene ${activeStage ? `is-${activeStage}-active is-print-active` : ""}`}>
      <span className="print-engine-scene__picture">
        <img
          src={assetPath("/assets/factory/print/background-desktop-v2.webp")}
          alt=""
          className="print-engine-scene__backdrop"
        />
      </span>
      <span className="print-engine-scene__wash" />
      <span className="print-production-pass" aria-hidden="true">
        <i className="print-production-pass__rail print-production-pass__rail--scan" />
        <i className="print-production-pass__rail print-production-pass__rail--proof" />
        <i className="print-production-pass__sheet print-production-pass__sheet--input" />
        <i className="print-production-pass__sheet print-production-pass__sheet--layout" />
        <i className="print-production-pass__proof" />
        <i className="print-production-pass__output" />
      </span>

      <PrintTarget
        className="print-target--scan"
        effectKey={effects.scan}
        label={labels.scan}
        onTrigger={(event) => triggerEffect(event, "scan")}
      >
        <i className="print-feed-sheet" />
        <i className="print-scan-bed" />
        <i className="print-scan-line" />
      </PrintTarget>

      <PrintTarget
        className="print-target--arrange"
        effectKey={effects.arrange}
        label={labels.arrange}
        onTrigger={(event) => triggerEffect(event, "arrange")}
      >
        <i className="print-panel print-panel--one" />
        <i className="print-panel print-panel--two" />
        <i className="print-panel print-panel--three" />
        <i className="print-panel print-panel--four" />
        <i className="print-align-rule" />
      </PrintTarget>

      <PrintTarget
        className="print-target--proof"
        effectKey={effects.proof}
        label={labels.proof}
        onTrigger={(event) => triggerEffect(event, "proof")}
      >
        <i className="print-proof-sheet" />
        <i className="print-color-bar" />
        <i className="print-register print-register--one" />
        <i className="print-register print-register--two" />
        <i className="print-register print-register--three" />
      </PrintTarget>

      <PrintTarget
        className="print-target--output"
        effectKey={effects.output}
        label={labels.output}
        onTrigger={(event) => triggerEffect(event, "output")}
      >
        <i className="print-output-sheet" />
        <i className="print-sheet-stack" />
        <i className="print-output-line" />
      </PrintTarget>

      <span className="print-engine-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
