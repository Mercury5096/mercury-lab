import { assetPath } from "../../../assetPath";
import { useEffect, useRef, useState } from "react";

const operationStages = ["intake", "assign", "track", "deliver"];

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

export default function OperationControlScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState(null);
  const [loopKey, setLoopKey] = useState(0);
  const effectSequence = useRef({});
  const loopTimers = useRef([]);
  const isZh = locale === "zh";
  const labels = {
    intake: isZh ? "接收" : "Intake",
    assign: isZh ? "分派" : "Assign",
    track: isZh ? "追蹤" : "Track",
    deliver: isZh ? "交付" : "Deliver",
    keySmall: isZh ? "協調循環" : "Coordination loop",
    keyStrong: isZh ? "金色 / 交接中" : "Gold / active handoff",
  };

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

    operationStages.forEach((stage, index) => {
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
      }, index * 950);
      loopTimers.current.push(stageTimer);
    });

    const finishTimer = window.setTimeout(() => {
      setActiveStage(null);
    }, operationStages.length * 950 + 900);
    loopTimers.current.push(finishTimer);
  }

  return (
    <span
      className={`operation-control-scene ${
        activeStage ? `is-${activeStage}-active` : ""
      } ${activeStage ? "is-looping" : ""}`}
    >
      <span className="operation-control-scene__picture">
        <img
          src={assetPath("/assets/factory/operation/background-desktop-v1.webp")}
          alt=""
          className="operation-control-scene__backdrop"
        />
      </span>
      <span className="operation-control-scene__wash" />
      <span className="operation-flow" aria-hidden="true" key={loopKey}>
        <i className="operation-flow__rail operation-flow__rail--one" />
        <i className="operation-flow__rail operation-flow__rail--two" />
        <i className="operation-flow__rail operation-flow__rail--three" />
        <i className="operation-flow__node operation-flow__node--intake" />
        <i className="operation-flow__node operation-flow__node--assign" />
        <i className="operation-flow__node operation-flow__node--track" />
        <i className="operation-flow__node operation-flow__node--deliver" />
        <i className="operation-flow__card operation-flow__card--one" />
        <i className="operation-flow__card operation-flow__card--two" />
      </span>

      <OperationTarget
        className="operation-target--intake"
        effectKey={effects.intake}
        label={labels.intake}
        onTrigger={triggerEffect}
      >
        <i className="operation-brief operation-brief--one" />
        <i className="operation-brief operation-brief--two" />
        <i className="operation-brief operation-brief--three" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--assign"
        effectKey={effects.assign}
        label={labels.assign}
        onTrigger={triggerEffect}
      >
        <i className="operation-person operation-person--one" />
        <i className="operation-person operation-person--two" />
        <i className="operation-person operation-person--three" />
        <i className="operation-assign-line" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--track"
        effectKey={effects.track}
        label={labels.track}
        onTrigger={triggerEffect}
      >
        <i className="operation-progress operation-progress--one" />
        <i className="operation-progress operation-progress--two" />
        <i className="operation-progress operation-progress--three" />
        <i className="operation-scan" />
      </OperationTarget>

      <OperationTarget
        className="operation-target--deliver"
        effectKey={effects.deliver}
        label={labels.deliver}
        onTrigger={triggerEffect}
      >
        <i className="operation-package" />
        <i className="operation-route" />
      </OperationTarget>

      <span className="operation-control-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
