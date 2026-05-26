import { useRef, useState } from "react";

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

export default function AiWorkflowLabScene() {
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
    }, stage === "generate" ? 2100 : 1800);
  }

  return (
    <span className="ai-workflow-scene">
      <span className="ai-workflow-scene__picture">
        <img
          src="/assets/factory/ai-workflow/background-desktop-v1.webp"
          alt=""
          className="ai-workflow-scene__backdrop"
        />
      </span>
      <span className="ai-workflow-scene__wash" />

      <WorkflowTarget
        className="ai-target--research"
        effectKey={effects.research}
        label="Research"
        onTrigger={(event) => triggerEffect(event, "research")}
      >
        <i className="ai-source-card ai-source-card--one" />
        <i className="ai-source-card ai-source-card--two" />
        <i className="ai-source-card ai-source-card--three" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--prompt"
        effectKey={effects.prompt}
        label="Prompt"
        onTrigger={(event) => triggerEffect(event, "prompt")}
      >
        <i className="ai-prompt-sheet ai-prompt-sheet--one" />
        <i className="ai-prompt-sheet ai-prompt-sheet--two" />
        <i className="ai-prompt-cursor" />
      </WorkflowTarget>

      <WorkflowTarget
        className="ai-target--generate"
        effectKey={effects.generate}
        label="Generate"
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
        label="Review"
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
        label="Deliver"
        onTrigger={(event) => triggerEffect(event, "deliver")}
      >
        <i className="ai-delivery-card" />
        <i className="ai-delivery-signal" />
      </WorkflowTarget>

      <span className="ai-workflow-scene__key">
        <small>Human review loop</small>
        <strong>Gold / selected decision</strong>
      </span>
    </span>
  );
}
