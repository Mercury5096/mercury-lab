import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useRef, useState } from "react";

function VisualProp({ children, className, effectKey, label, onTrigger, src }) {
  return (
    <span
      className={`cookbook-prop ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      <img src={src} alt="" />
      {children}
      <small className="cookbook-prop__label">{label}</small>
    </span>
  );
}

export default function CookbookProductionScene({ locale }) {
  const [effects, setEffects] = useState({});
  const effectSequence = useRef({});
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.cookbook).map(([key, value]) => [key, value[locale] ?? value.en]),
  );

  function triggerEffect(event, prop) {
    event.preventDefault();
    event.stopPropagation();
    const effectKey = (effectSequence.current[prop] ?? 0) + 1;
    effectSequence.current[prop] = effectKey;
    setEffects((current) => ({
      ...current,
      [prop]: effectKey,
    }));

    const duration = {
      plan: 1800,
      cook: 3500,
      style: 1900,
      capture: 700,
    }[prop];

    window.setTimeout(() => {
      setEffects((current) => {
        if (current[prop] !== effectKey) {
          return current;
        }

        const next = { ...current };
        delete next[prop];
        return next;
      });
    }, duration);
  }

  return (
    <span className="cookbook-scene">
      <span className="cookbook-scene__picture">
        <img
          src={assetPath("/assets/factory/cookbook/background-desktop-v1.webp")}
          alt=""
          className="cookbook-scene__backdrop"
        />
      </span>
      <span className="cookbook-scene__wash" />
      <span className="cookbook-surface cookbook-surface--plan" />
      <span className="cookbook-surface cookbook-surface--cook" />
      <span className="cookbook-surface cookbook-surface--style" />
      <span className="cookbook-surface cookbook-surface--capture" />
      <svg className="cookbook-system-route" viewBox="0 0 1000 620" preserveAspectRatio="none">
        <path d="M122 386H338V449H548V447H722V526" />
        <circle cx="122" cy="386" r="4.5" />
        <circle cx="338" cy="449" r="4.5" />
        <circle cx="548" cy="447" r="4.5" />
        <circle cx="722" cy="526" r="4.5" />
      </svg>

      <VisualProp
        className="cookbook-prop--plan"
        effectKey={effects.plan}
        label={labels.plan}
        onTrigger={(event) => triggerEffect(event, "plan")}
        src={assetPath("/assets/factory/cookbook/props/recipe-proofs-v1.webp")}
      >
        <i className="cookbook-proof-mark cookbook-proof-mark--one" />
        <i className="cookbook-proof-mark cookbook-proof-mark--two" />
        <i className="cookbook-proof-mark cookbook-proof-mark--three" />
      </VisualProp>

      <VisualProp
        className="cookbook-prop--cook"
        effectKey={effects.cook}
        label={labels.cook}
        onTrigger={(event) => triggerEffect(event, "cook")}
        src={assetPath("/assets/factory/cookbook/props/pot-v1.webp")}
      >
        <i className="cookbook-heat-ring" />
        <i className="cookbook-steam" />
      </VisualProp>

      <VisualProp
        className="cookbook-prop--style"
        effectKey={effects.style}
        label={labels.style}
        onTrigger={(event) => triggerEffect(event, "style")}
        src={assetPath("/assets/factory/cookbook/props/plated-dish-v1.webp")}
      >
        <i className="cookbook-plating-glint cookbook-plating-glint--one" />
        <i className="cookbook-plating-glint cookbook-plating-glint--two" />
        <i className="cookbook-plating-glint cookbook-plating-glint--three" />
      </VisualProp>

      <VisualProp
        className="cookbook-prop--capture"
        effectKey={effects.capture}
        label={labels.capture}
        onTrigger={(event) => triggerEffect(event, "capture")}
        src={assetPath("/assets/factory/cookbook/props/camera-tripod-v1.webp")}
      >
        <i className="cookbook-flash" />
        <i className="cookbook-focus" />
      </VisualProp>

      <span className="cookbook-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
