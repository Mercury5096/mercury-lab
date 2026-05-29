import { useRef, useState } from "react";

function OperationTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`operation-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="operation-target__label">{label}</small>
    </span>
  );
}

export default function OperationControlScene() {
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
    }, stage === "track" ? 2400 : 1800);
  }

  return (
    <span className="operation-control-scene">
      <span className="operation-control-scene__picture">
        <img
          src="/assets/factory/operation/background-desktop-v1.webp"
          alt=""
          className="operation-control-scene__backdrop"
        />
      </span>
      <span className="operation-control-scene__wash" />

      <OperationTarget
        className="operation-target--intake"
        effectKey={effects.intake}
        label="Intake"
        onTrigger={(event) => triggerEffect(event, "intake")}
      >
        <i className="operation-brief operation-brief--one" />
        <i className="operation-brief operation-brief--two" />
        <i className="operation-brief operation-brief--three" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--assign"
        effectKey={effects.assign}
        label="Assign"
        onTrigger={(event) => triggerEffect(event, "assign")}
      >
        <i className="operation-person operation-person--one" />
        <i className="operation-person operation-person--two" />
        <i className="operation-person operation-person--three" />
        <i className="operation-assign-line" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--track"
        effectKey={effects.track}
        label="Track"
        onTrigger={(event) => triggerEffect(event, "track")}
      >
        <i className="operation-progress operation-progress--one" />
        <i className="operation-progress operation-progress--two" />
        <i className="operation-progress operation-progress--three" />
        <i className="operation-scan" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--deliver"
        effectKey={effects.deliver}
        label="Deliver"
        onTrigger={(event) => triggerEffect(event, "deliver")}
      >
        <i className="operation-package" />
        <i className="operation-route" />
      </OperationTarget>

      <span className="operation-control-scene__key">
        <small>Coordination loop</small>
        <strong>Gold / active handoff</strong>
      </span>
    </span>
  );
}
