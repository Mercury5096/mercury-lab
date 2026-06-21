export default function BlueprintFrame({ activeRoute }) {
  return (
    <>
      <svg
        className="cutaway-overlay"
        viewBox="0 0 1000 2148"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="section-grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path className="section-grid-line" d="M42 0H0V42" />
          </pattern>
        </defs>

        <rect x="22" y="20" width="956" height="2106" fill="url(#section-grid)" />
        <g className="section-register">
          <path d="M18 44h36M36 26v36M946 44h36M964 26v36M18 2102h36M36 2084v36M946 2102h36M964 2084v36" />
          <path d="M74 90H936M74 2066H936" />
        </g>
        <g className="section-dimensions">
          <path d="M62 152H35M47 152v1740M62 1892H35" />
          <path d="M947 220h25M958 220v1650M947 1870h25" />
          <path d="M116 2023v24m166-24v24m166-24v24m166-24v24m166-24v24" />
          <text x="26" y="1030" transform="rotate(-90 26 1030)">FACTORY SECTION / VERTICAL ASSEMBLY</text>
          <text x="967" y="1066" transform="rotate(-90 967 1066)">EIGHT LEVELS / EIGHT MODULES</text>
          <text x="112" y="2063">00</text>
          <text x="764" y="2063">SCALE / DIAGRAMMATIC</text>
        </g>
        <g className="section-level-lines">
          <path d="M70 358H940M70 574H940M70 790H940M70 1006H940M70 1222H940M70 1438H940M70 1654H940M70 1870H940" />
          <text x="878" y="348">LEVEL 07</text>
          <text x="878" y="564">LEVEL 06</text>
          <text x="878" y="780">LEVEL 05</text>
          <text x="878" y="996">LEVEL 04</text>
          <text x="878" y="1212">LEVEL 03</text>
          <text x="878" y="1428">LEVEL 02</text>
          <text x="878" y="1644">LEVEL 01</text>
          <text x="878" y="1860">LEVEL 00</text>
        </g>
        <g className="section-annotations">
          <path d="M121 138V111H254M750 123H866V176" />
          <text x="126" y="103">UPPER PLANT / PUBLISHING INPUT</text>
          <text x="742" y="114">SERVICE SHAFT</text>
        </g>
        <g className={`section-route section-route--publishing ${activeRoute === "publishing" ? "is-active" : ""}`}>
          <path d="M236 298H498V514H236V730H498" />
        </g>
        <g className={`section-route section-route--delivery ${activeRoute === "delivery" ? "is-active" : ""}`}>
          <path d="M496 1162H738V1378H262" />
        </g>
        <g className={`section-route section-route--research ${activeRoute === "research" ? "is-active" : ""}`}>
          <path d="M255 946H825V1594H510V1810" />
        </g>
      </svg>
      <span className="cutaway-route-dots" aria-hidden="true">
        <i className={`cutaway-route-dot cutaway-route-dot--publishing ${activeRoute === "publishing" ? "is-active" : ""}`} style={{ "--dot-x": "23.6%", "--dot-y": "13.87%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--publishing ${activeRoute === "publishing" ? "is-active" : ""}`} style={{ "--dot-x": "23.6%", "--dot-y": "23.93%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--publishing ${activeRoute === "publishing" ? "is-active" : ""}`} style={{ "--dot-x": "49.8%", "--dot-y": "33.99%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--delivery ${activeRoute === "delivery" ? "is-active" : ""}`} style={{ "--dot-x": "49.6%", "--dot-y": "54.1%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--delivery ${activeRoute === "delivery" ? "is-active" : ""}`} style={{ "--dot-x": "26.2%", "--dot-y": "64.15%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--research ${activeRoute === "research" ? "is-active" : ""}`} style={{ "--dot-x": "25.5%", "--dot-y": "44.04%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--research ${activeRoute === "research" ? "is-active" : ""}`} style={{ "--dot-x": "51%", "--dot-y": "74.21%" }} />
        <i className={`cutaway-route-dot cutaway-route-dot--research ${activeRoute === "research" ? "is-active" : ""}`} style={{ "--dot-x": "51%", "--dot-y": "84.26%" }} />
      </span>
    </>
  );
}
