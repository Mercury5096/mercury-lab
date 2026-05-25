function VisualProp({ children, className, label, src }) {
  return (
    <span className={`cookbook-prop ${className}`}>
      <img src={src} alt="" />
      {children}
      <small className="cookbook-prop__label">{label}</small>
    </span>
  );
}

export default function CookbookProductionScene() {
  return (
    <span className="cookbook-scene">
      <span className="cookbook-scene__picture">
        <img
          src="/assets/factory/cookbook/background-desktop-v1.webp"
          alt=""
          className="cookbook-scene__backdrop"
        />
      </span>
      <span className="cookbook-scene__wash" />
      <svg className="cookbook-system-route" viewBox="0 0 1000 620" preserveAspectRatio="none">
        <path d="M128 390H347V464H544V435H786" />
        <circle cx="128" cy="390" r="5" />
        <circle cx="347" cy="464" r="5" />
        <circle cx="544" cy="435" r="5" />
        <circle cx="786" cy="435" r="5" />
      </svg>

      <VisualProp
        className="cookbook-prop--plan"
        label="Plan"
        src="/assets/factory/cookbook/props/recipe-proofs-v1.webp"
      />

      <VisualProp
        className="cookbook-prop--cook"
        label="Cook"
        src="/assets/factory/cookbook/props/pot-v1.webp"
      >
        <i className="cookbook-steam" />
      </VisualProp>

      <VisualProp
        className="cookbook-prop--style"
        label="Style"
        src="/assets/factory/cookbook/props/plated-dish-v1.webp"
      />

      <VisualProp
        className="cookbook-prop--capture"
        label="Capture"
        src="/assets/factory/cookbook/props/camera-tripod-v1.webp"
      >
        <i className="cookbook-focus" />
      </VisualProp>

      <span className="cookbook-scene__key">
        <small>Movable props</small>
        <strong>Gold / active layer</strong>
      </span>
    </span>
  );
}
