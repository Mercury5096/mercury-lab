import { assetPath } from "../../../assetPath";
import { sceneCopy } from "../../../data/siteCopy";
import { useEffect, useRef, useState } from "react";

function WorkflowTarget({ children, className, effectKey, label, onTrigger }) {
  return (
    <span
      className={`ai-target ${className} ${effectKey ? "is-triggered" : ""}`}
      key={effectKey}
      onClick={onTrigger}
    >
      {children}
      <small className="ai-target__label">{label}</small>
    </span>
  );
}

export default function AiWorkflowLabScene({ locale }) {
  const [effects, setEffects] = useState({});
  const [activeStage, setActiveStage] = useState("");
  const effectSequence = useRef({});
  const activeStageTimer = useRef(null);
  const workflowStages = ["research", "prompt", "generate", "review", "deliver"];
  const labels = Object.fromEntries(
    Object.entries(sceneCopy.ai).map(([key, value]) => [key, value[locale] ?? value.en]),
  );

  useEffect(() => {
    return () => {
      if (activeStageTimer.current) {
        window.clearTimeout(activeStageTimer.current);
      }
    };
  }, []);

  function triggerEffect(event, stage) {
    event.preventDefault();
    event.stopPropagation();
    setActiveStage(stage);
    const stageIndex = workflowStages.indexOf(stage);
    const triggeredStages = stageIndex >= 0 ? workflowStages.slice(0, stageIndex + 1) : [stage];
    const activeDuration = stage === "deliver" ? 5200 : stage === "review" ? 4300 : stage === "generate" ? 3800 : 3200;

    if (activeStageTimer.current) {
      window.clearTimeout(activeStageTimer.current);
    }

    activeStageTimer.current = window.setTimeout(() => {
      setActiveStage("");
    }, activeDuration);

    const effectKey = (effectSequence.current[stage] ?? 0) + 1;
    effectSequence.current[stage] = effectKey;
    const flowEffects = Object.fromEntries(triggeredStages.map((flowStage) => [flowStage, effectKey]));
    setEffects((current) => ({ ...current, ...flowEffects }));

    window.setTimeout(() => {
      setEffects((current) => {
        const next = { ...current };
        triggeredStages.forEach((flowStage) => {
          if (next[flowStage] === effectKey) {
            delete next[flowStage];
          }
        });
        return next;
      });
    }, activeDuration);
  }

  return (
    <span className={`ai-workflow-scene ${activeStage ? `is-${activeStage}-active is-ai-active` : ""}`}>
      <span className="ai-workflow-scene__picture">
        <img
          src={assetPath("/assets/factory/ai-workflow/background-desktop-v1.webp")}
          alt=""
          className="ai-workflow-scene__backdrop"
        />
      </span>
      <span className="ai-workflow-scene__wash" />

      <span className="ai-iteration-loop" aria-hidden="true">
        <i className="ai-iteration-loop__rail ai-iteration-loop__rail--forward" />
        <i className="ai-iteration-loop__rail ai-iteration-loop__rail--review" />
        <i className="ai-iteration-loop__rail ai-iteration-loop__rail--return" />
        <i className="ai-iteration-loop__node ai-iteration-loop__node--brief" />
        <i className="ai-iteration-loop__node ai-iteration-loop__node--prompt" />
        <i className="ai-iteration-loop__node ai-iteration-loop__node--model" />
        <i className="ai-iteration-loop__node ai-iteration-loop__node--review" />
        <i className="ai-iteration-loop__node ai-iteration-loop__node--deliver" />
        <i className="ai-iteration-loop__card ai-iteration-loop__card--brief" />
        <i className="ai-iteration-loop__card ai-iteration-loop__card--prompt" />
        <i className="ai-iteration-loop__card ai-iteration-loop__card--output" />
        <i className="ai-iteration-loop__card ai-iteration-loop__card--revision" />
        <i className="ai-iteration-loop__card ai-iteration-loop__card--final" />
        <i className="ai-iteration-loop__pulse" />
      </span>

      <WorkflowTarget
        className="ai-target--research"
        effectKey={effects.research}
        label={labels.research}
        onTrigger={(event) => triggerEffect(event, "research")}
      >
        <i className="ai-source-card ai-source-card--one" />
        <i className="ai-source-card ai-source-card--two" />
        <i className="ai-source-card ai-source-card--three" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--prompt"
        effectKey={effects.prompt}
        label={labels.prompt}
        onTrigger={(event) => triggerEffect(event, "prompt")}
      >
        <i className="ai-prompt-sheet ai-prompt-sheet--one" />
        <i className="ai-prompt-sheet ai-prompt-sheet--two" />
        <i className="ai-prompt-cursor" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--generate"
        effectKey={effects.generate}
        label={labels.generate}
        onTrigger={(event) => triggerEffect(event, "generate")}
      >
        <svg className="ai-pipeline" viewBox="0 0 180 96" preserveAspectRatio="none">
          <path d="M12 48H45M45 48L73 25M45 48L73 48M45 48L73 71M73 25H108M73 48H108M73 71H108M108 25L145 39M108 48H145M108 71L145 57M145 39H168M145 48H168M145 57H168" />
          <circle cx="12" cy="48" r="4" />
          <circle cx="45" cy="48" r="4" />
          <circle cx="73" cy="25" r="4" />
          <circle cx="73" cy="48" r="4" />
          <circle cx="73" cy="71" r="4" />
          <circle cx="108" cy="25" r="4" />
          <circle cx="108" cy="48" r="4" />
          <circle cx="108" cy="71" r="4" />
          <circle cx="145" cy="39" r="4" />
          <circle cx="145" cy="48" r="4" />
          <circle cx="145" cy="57" r="4" />
          <circle cx="168" cy="48" r="5" />
        </svg>
        <i className="ai-pipeline-pulse" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--review"
        effectKey={effects.review}
        label={labels.review}
        onTrigger={(event) => triggerEffect(event, "review")}
      >
        <i className="ai-review-note ai-review-note--one" />
        <i className="ai-review-note ai-review-note--two" />
        <i className="ai-review-mark ai-review-mark--approve" />
        <i className="ai-review-mark ai-review-mark--revise" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--deliver"
        effectKey={effects.deliver}
        label={labels.deliver}
        onTrigger={(event) => triggerEffect(event, "deliver")}
      >
        <i className="ai-delivery-card" />
        <i className="ai-delivery-signal" />
      </WorkflowTarget>

      <span className="ai-workflow-scene__key">
        <small>{labels.keySmall}</small>
        <strong>{labels.keyStrong}</strong>
      </span>
    </span>
  );
}
