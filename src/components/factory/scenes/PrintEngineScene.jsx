import { useRef, useState } from "react";

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

export default function PrintEngineScene() {
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
    }, stage === "proof" ? 2200 : 1800);
  }

  return (
    <span className="print-engine-scene">
      <span className="print-engine-scene__picture">
        <img
          src="/assets/factory/print/background-desktop-v2.webp"
          alt=""
          className="print-engine-scene__backdrop"
        />
      </span>
      <span className="print-engine-scene__wash" />

      <PrintTarget
        className="print-target--scan"
        effectKey={effects.scan}
        label="Scan"
        onTrigger={(event) => triggerEffect(event, "scan")}
      >
        <i className="print-scan-bed" />
        <i className="print-scan-line" />
      </PrintTarget>

      <PrintTarget
        className="print-target--arrange"
        effectKey={effects.arrange}
        label="Arrange"
        onTrigger={(event) => triggerEffect(event, "arrange")}
      >
        <i className="print-panel print-panel--one" />
        <i className="print-panel print-panel--two" />
        <i className="print-panel print-panel--three" />
        <i className="print-panel print-panel--four" />
      </PrintTarget>

      <PrintTarget
        className="print-target--proof"
        effectKey={effects.proof}
        label="Proof"
        onTrigger={(event) => triggerEffect(event, "proof")}
      >
        <i className="print-register print-register--one" />
        <i className="print-register print-register--two" />
        <i className="print-register print-register--three" />
      </PrintTarget>

      <PrintTarget
        className="print-target--output"
        effectKey={effects.output}
        label="Output"
        onTrigger={(event) => triggerEffect(event, "output")}
      >
        <i className="print-sheet-stack" />
        <i className="print-output-line" />
      </PrintTarget>

      <span className="print-engine-scene__key">
        <small>Prepress engine</small>
        <strong>Gold / checked output</strong>
      </span>
    </span>
  );
}
