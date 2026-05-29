import { useRef, useState } from "react";

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

export default function MultimediaWorkshopScene() {
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
    }, stage === "prototype" ? 2300 : 1800);
  }

  return (
    <span className="multimedia-workshop-scene">
      <span className="multimedia-workshop-scene__picture">
        <img
          src="/assets/factory/multimedia/background-desktop-v1.webp"
          alt=""
          className="multimedia-workshop-scene__backdrop"
        />
      </span>
      <span className="multimedia-workshop-scene__wash" />

      <MultimediaTarget
        className="multimedia-target--storyboard"
        effectKey={effects.storyboard}
        label="Storyboard"
        onTrigger={(event) => triggerEffect(event, "storyboard")}
      >
        <i className="multimedia-board multimedia-board--one" />
        <i className="multimedia-board multimedia-board--two" />
        <i className="multimedia-board multimedia-board--three" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--edit"
        effectKey={effects.edit}
        label="Edit"
        onTrigger={(event) => triggerEffect(event, "edit")}
      >
        <i className="multimedia-timeline" />
        <i className="multimedia-playhead" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--prototype"
        effectKey={effects.prototype}
        label="Prototype"
        onTrigger={(event) => triggerEffect(event, "prototype")}
      >
        <i className="multimedia-proto multimedia-proto--model" />
        <i className="multimedia-proto multimedia-proto--screen" />
        <i className="multimedia-signal" />
      </MultimediaTarget>

      <MultimediaTarget
        className="multimedia-target--test"
        effectKey={effects.test}
        label="Test"
        onTrigger={(event) => triggerEffect(event, "test")}
      >
        <i className="multimedia-controller" />
        <i className="multimedia-audio" />
      </MultimediaTarget>

      <span className="multimedia-workshop-scene__key">
        <small>Mixed media prototype</small>
        <strong>Gold / live test layer</strong>
      </span>
    </span>
  );
}
