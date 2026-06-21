import { assetPath } from "../../../assetPath";
import { useEffect, useRef, useState } from "react";

const multimediaStages = ["storyboard", "edit", "prototype", "test"];

function MultimediaTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`multimedia-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="multimedia-target__label">{label}</small>
    </span>
  );
}

export default function MultimediaWorkshopScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState(null);
  const [loopKey, setLoopKey] = useState(0);
  const effectSequence = useRef({});
  const loopTimers = useRef([]);
  const isZh = locale === "zh";
  const labels = {
    storyboard: isZh ? "分鏡" : "Storyboard",
    edit: isZh ? "剪輯" : "Edit",
    prototype: isZh ? "原型" : "Prototype",
    test: isZh ? "測試" : "Test",
    keySmall: isZh ? "混合媒體原型" : "Mixed media prototype",
    keyStrong: isZh ? "金色 / 測試層" : "Gold / live test layer",
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

    multimediaStages.forEach((stage, index) => {
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
    }, multimediaStages.length * 920 + 1100);
    loopTimers.current.push(finishTimer);
  }

  return (
    <span className={`multimedia-workshop-scene ${activeStage ? `is-${activeStage}-active is-multimedia-active` : ""}`}>
      <span className="multimedia-workshop-scene__picture">
        <img
          src={assetPath("/assets/factory/multimedia/background-desktop-v1.webp")}
          alt=""
          className="multimedia-workshop-scene__backdrop"
        />
      </span>
      <span className="multimedia-workshop-scene__wash" />
      <span className="multimedia-motion-rig" aria-hidden="true" key={loopKey}>
        <i className="multimedia-motion-rig__rail multimedia-motion-rig__rail--story" />
        <i className="multimedia-motion-rig__rail multimedia-motion-rig__rail--edit" />
        <i className="multimedia-motion-rig__rail multimedia-motion-rig__rail--test" />
        <i className="multimedia-motion-rig__clip multimedia-motion-rig__clip--one" />
        <i className="multimedia-motion-rig__clip multimedia-motion-rig__clip--two" />
        <i className="multimedia-motion-rig__screen" />
        <i className="multimedia-motion-rig__signal" />
      </span>

      <MultimediaTarget
        className="multimedia-target--storyboard"
        effectKey={effects.storyboard}
        label={labels.storyboard}
        onTrigger={triggerEffect}
      >
        <i className="multimedia-board multimedia-board--one" />
        <i className="multimedia-board multimedia-board--two" />
        <i className="multimedia-board multimedia-board--three" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--edit"
        effectKey={effects.edit}
        label={labels.edit}
        onTrigger={triggerEffect}
      >
        <i className="multimedia-timeline" />
        <i className="multimedia-playhead" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--prototype"
        effectKey={effects.prototype}
        label={labels.prototype}
        onTrigger={triggerEffect}
      >
        <i className="multimedia-proto multimedia-proto--model" />
        <i className="multimedia-proto multimedia-proto--screen" />
        <i className="multimedia-signal" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--test"
        effectKey={effects.test}
        label={labels.test}
        onTrigger={triggerEffect}
      >
        <i className="multimedia-controller" />
        <i className="multimedia-audio" />
      </MultimediaTarget>

      <span className="multimedia-workshop-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
