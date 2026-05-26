export default function BlueprintFrame({ activeRoute }) {
  return (
    <svg
      className="cutaway-overlay"
      viewBox="0 0 1000 1500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="section-grid" width="42" height="42" patternUnits="userSpaceOnUse">
          <path className="section-grid-line" d="M42 0H0V42" />
        </pattern>
      </defs>

      <rect x="22" y="20" width="956" height="1458" fill="url(#section-grid)" />
      <g className="section-register">
        <path d="M18 44h36M36 26v36M946 44h36M964 26v36M18 1454h36M36 1436v36M946 1454h36M964 1436v36" />
        <path d="M74 90H936M74 1418H936" />
      </g>
      <g className="section-dimensions">
        <path d="M62 152H35M47 152v1092M62 1244H35" />
        <path d="M947 220h25M958 220v1002M947 1222h25" />
        <path d="M116 1375v24m166-24v24m166-24v24m166-24v24m166-24v24" />
        <text x="26" y="706" transform="rotate(-90 26 706)">FACTORY SECTION / VERTICAL ASSEMBLY</text>
        <text x="967" y="742" transform="rotate(-90 967 742)">FIVE LEVELS / EIGHT MODULES</text>
        <text x="112" y="1415">00</text>
        <text x="764" y="1415">SCALE / DIAGRAMMATIC</text>
      </g>
      <g className="section-level-lines">
        <path d="M70 358H940M70 574H940M70 790H940M70 1006H940M70 1222H940" />
        <text x="878" y="348">LEVEL 04</text>
        <text x="878" y="564">LEVEL 03</text>
        <text x="878" y="780">LEVEL 02</text>
        <text x="878" y="996">LEVEL 01</text>
        <text x="878" y="1212">LEVEL 00</text>
      </g>
      <g className="section-annotations">
        <path d="M121 138V111H254M750 123H866V176" />
        <text x="126" y="103">UPPER PLANT / PUBLISHING INPUT</text>
        <text x="742" y="114">SERVICE SHAFT</text>
      </g>
      <g className={`section-route section-route--publishing ${activeRoute === "publishing" ? "is-active" : ""}`}>
        <path d="M236 298H498V490H236" />
        <circle cx="236" cy="298" r="6" />
        <circle cx="498" cy="298" r="6" />
        <circle cx="236" cy="490" r="6" />
      </g>
      <g className={`section-route section-route--delivery ${activeRoute === "delivery" ? "is-active" : ""}`}>
        <path d="M496 706H738V922H262" />
        <circle cx="496" cy="706" r="6" />
        <circle cx="738" cy="922" r="6" />
      </g>
      <g className={`section-route section-route--research ${activeRoute === "research" ? "is-active" : ""}`}>
        <path d="M255 706H825V1139H510V1308" />
        <circle cx="255" cy="706" r="6" />
        <circle cx="825" cy="706" r="6" />
        <circle cx="510" cy="1308" r="6" />
      </g>
    </svg>
  );
}
