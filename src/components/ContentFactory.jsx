import { useRef, useState } from "react";
import { rooms } from "../content";

const locale = "en";
const read = (value) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

function BlueprintOverlay({ activeRoute }) {
  return (
    <svg
      className="blueprint-overlay"
      viewBox="0 0 1000 720"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="blueprint-minor-grid" width="25" height="25" patternUnits="userSpaceOnUse">
          <path d="M 25 0 L 0 0 0 25" />
        </pattern>
        <filter id="ai-glow">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>
      <rect className="bp-grid" width="1000" height="720" fill="url(#blueprint-minor-grid)" />
      <g className="bp-registration">
        <path d="M30 45h32M46 29v32M938 45h32M954 29v32M30 670h32M46 654v32M938 670h32M954 654v32" />
      </g>
      <g className="bp-measurements">
        <path d="M74 54V30M74 38H710M710 54V30M78 38l10-5v10zM706 38l-10-5v10z" />
        <path d="M754 38H930M754 54V30M930 54V30" />
        <text x="335" y="29">PUBLISHING FOUNDATION / 06.40 M</text>
        <text x="770" y="29">RESEARCH WING</text>
      </g>
      <path className="bp-building" d="M72 76H928V652H72Z" />
      <path className="bp-corridor" d="M482 78V414H545V514H928" />
      <path className="bp-corridor" d="M72 470H449V652" />
      <g className={`bp-route bp-route--publishing ${activeRoute === "publishing" ? "is-active" : ""}`}>
        <path d="M170 195H353V365H266" />
      </g>
      <g className={`bp-route bp-route--delivery ${activeRoute === "delivery" ? "is-active" : ""}`}>
        <path d="M205 564H520H680" />
      </g>
      <g className={`bp-route bp-route--research ${activeRoute === "research" ? "is-active" : ""}`}>
        <path d="M616 190H808V210M616 220V365H835V555" />
      </g>
      <path className="bp-ai-glow" d="M802 340H879V454H844V590" filter="url(#ai-glow)" />
      <path className="bp-ai-circuit" d="M802 340H879V454H844V590" />
      <g className="bp-leaders">
        <path d="M166 118V91H111" />
        <path d="M271 443V461H160" />
        <path d="M822 263H902V244" />
        <path d="M849 584H928" />
      </g>
      <g className="bp-notes">
        <text x="82" y="87">INPUT BAY</text>
        <text x="96" y="477">PRODUCTION ROUTE</text>
        <text x="838" y="237">NARRATIVE SYSTEM</text>
        <text x="855" y="580">HITL NODE</text>
      </g>
    </svg>
  );
}

function RoomModule({ active, index, room, roomRefs, onActivate, onNavigate }) {
  return (
    <button
      className={`room room--${room.diagram.area} ${active ? "active" : ""}`}
      id={`room-${room.id}`}
      key={room.id}
      role="tab"
      ref={(element) => {
        roomRefs.current[index] = element;
      }}
      aria-selected={active}
      aria-controls={`panel-${room.id}`}
      tabIndex={active ? 0 : -1}
      type="button"
      onClick={() => onActivate(room.id)}
      onKeyDown={(event) => onNavigate(event, index)}
    >
      <span className="room__header">
        <span className="room__code">{room.code}</span>
        <span className="room__period">{room.period}</span>
      </span>
      <span className="room__zone">{room.diagram.zone}</span>
      <strong>{read(room.title)}</strong>
      <span className="room__callout">{room.diagram.callout}</span>
      <span className="room__instruction">Open dossier</span>
    </button>
  );
}

function ModuleDossier({ room }) {
  return (
    <article
      className="manual-panel dossier"
      id={`panel-${room.id}`}
      role="tabpanel"
      aria-labelledby={`room-${room.id}`}
      tabIndex={0}
    >
      <div className="dossier-tabs" aria-hidden="true">
        <span className="active">Module</span>
        <span>Evidence</span>
        <span>Display</span>
      </div>
      <div className="dossier-index">
        <span>FILE / MCL-{room.code}</span>
        <span>{room.diagram.zone}</span>
      </div>
      <div className="manual-panel__top">
        <div>
          <p className="eyebrow">Module Manual / {room.code}</p>
          <h3>{read(room.title)}</h3>
        </div>
        <span className={`status ${room.displayLevel === "abstract" ? "restricted" : ""}`}>
          {read(room.status)}
        </span>
      </div>
      <p className="manual-summary">{read(room.summary)}</p>
      <dl className="manual-spec">
        <div>
          <dt>Active period</dt>
          <dd>{room.period}</dd>
        </div>
        <div>
          <dt>Production scope</dt>
          <dd>{read(room.discipline)}</dd>
        </div>
        <div>
          <dt>Evidence basis</dt>
          <dd>{read(room.evidence)}</dd>
        </div>
      </dl>
      <aside className="archival-note">
        <span>Archival note / Display rule</span>
        <p>{read(room.display)}</p>
      </aside>
    </article>
  );
}

export default function ContentFactory({ eyebrow, title, description }) {
  const [activeRoom, setActiveRoom] = useState(rooms[0].id);
  const roomRefs = useRef([]);
  const selectedRoom = rooms.find((room) => room.id === activeRoom);

  function moveFocus(event, index) {
    let target = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      target = (index + 1) % rooms.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      target = (index - 1 + rooms.length) % rooms.length;
    } else if (event.key === "Home") {
      target = 0;
    } else if (event.key === "End") {
      target = rooms.length - 1;
    }

    if (target !== null) {
      event.preventDefault();
      setActiveRoom(rooms[target].id);
      roomRefs.current[target]?.focus();
    }
  }

  return (
    <section className="factory section-shell" id="factory">
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="section-copy">{description}</p>
      </div>
      <div className="factory-grid">
        <div className="cutaway">
          <div className="blueprint-titlebar">
            <div>
              <span className="plan-ref">MCL / FACTORY PLAN 02</span>
              <strong>Mercury Content Laboratory</strong>
            </div>
            <div className="blueprint-tabs" aria-hidden="true">
              <span className="active">Floor Plan</span>
              <span>Routing</span>
              <span>Rights</span>
            </div>
            <span className="signal" aria-hidden="true" />
          </div>
          <div className="blueprint-drawing">
            <BlueprintOverlay activeRoute={selectedRoom.diagram.route} />
            <div className="technical-label label--left">Level / 01</div>
            <div className="technical-label label--right">Scale / Diagrammatic</div>
            <div
              className="rooms-grid"
              role="tablist"
              aria-label="Mercury Lab production rooms"
            >
              {rooms.map((room, index) => (
                <RoomModule
                  active={room.id === activeRoom}
                  index={index}
                  key={room.id}
                  room={room}
                  roomRefs={roomRefs}
                  onActivate={setActiveRoom}
                  onNavigate={moveFocus}
                />
              ))}
            </div>
            <div className="mobile-route" aria-hidden="true">
              <span />
              Selected route / {selectedRoom.diagram.route}
            </div>
          </div>
        </div>
        <ModuleDossier room={selectedRoom} />
      </div>
    </section>
  );
}
