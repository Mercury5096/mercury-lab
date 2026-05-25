import { useEffect, useRef, useState } from "react";
import { rooms } from "../content";
import BlueprintFrame from "./factory/BlueprintFrame";
import RoomShell from "./factory/RoomShell";

const locale = "en";
const read = (value) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

const roomFunctions = {
  "print-engine-room": "Print to System",
  "editorial-kitchen": "Editorial Room",
  "cookbook-production-floor": "Brief to Delivery",
  "story-archive-ip-office": "Story to Interaction",
  "operation-control-room": "Research Engine",
  "commerce-visual-line": "Design Studio",
  "multimedia-workshop": "Case Files",
  "ai-workflow-lab": "Archive / Protocol",
};

const floors = [
  {
    id: "04",
    label: "Publishing Foundation",
    rooms: ["print-engine-room", "editorial-kitchen"],
  },
  {
    id: "03",
    label: "Production Deck",
    rooms: ["cookbook-production-floor"],
  },
  {
    id: "02",
    label: "Narrative and Control",
    rooms: ["story-archive-ip-office", "operation-control-room"],
  },
  {
    id: "01",
    label: "Visual and Media Line",
    rooms: ["commerce-visual-line", "multimedia-workshop"],
  },
  {
    id: "00",
    label: "Assisted Research Lab",
    rooms: ["ai-workflow-lab"],
  },
];

const floorByRoom = Object.fromEntries(
  floors.flatMap((floor) => floor.rooms.map((roomId) => [roomId, floor.id])),
);

function ModuleDossier({ room, onClose }) {
  return (
    <article
      className="manual-panel dossier"
      id={`panel-${room.id}`}
      role="region"
      aria-labelledby={`room-${room.id}`}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          onClose();
        }
      }}
    >
      <button className="dossier-close" type="button" onClick={onClose}>
        Close
      </button>
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

export default function ContentFactory({
  heroEyebrow,
  subtitle,
  positioning,
  eyebrow,
  title,
  description,
}) {
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeFloor, setActiveFloor] = useState(floors[0].id);
  const roomRefs = useRef([]);
  const floorRefs = useRef({});
  const floorVisibility = useRef({});
  const selectedRoom = rooms.find((room) => room.id === activeRoom) ?? null;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          floorVisibility.current[entry.target.dataset.floor] = entry.isIntersecting
            ? entry.intersectionRatio
            : 0;
        });
        const visibleFloor = Object.entries(floorVisibility.current).sort(
          (left, right) => right[1] - left[1],
        )[0];
        if (visibleFloor?.[1] > 0) {
          setActiveFloor(visibleFloor[0]);
        }
      },
      {
        rootMargin: "-18% 0px -18% 0px",
        threshold: [0.08, 0.25, 0.5, 0.72],
      },
    );

    floors.forEach((floor) => {
      const element = floorRefs.current[floor.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  function closeDossier() {
    const selectedIndex = rooms.findIndex((room) => room.id === activeRoom);
    setActiveRoom(null);
    roomRefs.current[selectedIndex]?.focus();
  }

  function activateFromIndex(roomId) {
    const index = rooms.findIndex((room) => room.id === roomId);
    setActiveRoom(roomId);
    floorRefs.current[floorByRoom[roomId]]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
    roomRefs.current[index]?.focus({ preventScroll: true });
  }

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
    <section className="factory factory-cutaway" id="factory">
      <header className="factory-masthead">
        <div className="factory-identity">
          <p className="eyebrow">{heroEyebrow}</p>
          <h1>
            Mercury
            <span>Lab</span>
          </h1>
        </div>
        <div className="factory-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <p className="positioning">{positioning}</p>
          <p className="section-copy">{description}</p>
        </div>
        <aside className="factory-status" aria-label="Factory drawing status">
          <p>Content Factory / Section A</p>
          <strong>Status / Operational</strong>
          <span>Drawing / CUT-04</span>
          <span>Language / EN</span>
          <div className="barcode" aria-hidden="true" />
          <small>Evidence controlled / Human responsible</small>
        </aside>
      </header>

      <div className="cutaway-layout">
        <nav className="route-index" aria-label="Factory route index">
          <div className="route-index__head">
            <p>Factory Route</p>
            <span>Explore / 01-08</span>
            <strong>Viewing / Level {activeFloor}</strong>
          </div>
          <ol>
            {rooms.map((room) => (
              <li
                key={room.id}
                className={`${room.id === activeRoom ? "active" : ""} ${
                  floorByRoom[room.id] === activeFloor ? "is-current-level" : ""
                }`}
              >
                <button type="button" onClick={() => activateFromIndex(room.id)}>
                  <span>{room.code}</span>
                  <strong>{roomFunctions[room.id]}</strong>
                  <small>{read(room.title)}</small>
                </button>
              </li>
            ))}
          </ol>
          <div className="route-index__legend">
            <p>System Legend</p>
            <span>People flow</span>
            <span>Evidence gate</span>
            <span>Public release</span>
          </div>
        </nav>

        <div className="building-column">
          <div className="factory-building">
            <BlueprintFrame activeRoute={selectedRoom?.diagram.route} />
            <div className="factory-roof" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="factory-shaft" aria-hidden="true">
              <span>Vertical route</span>
            </div>
            <div className="factory-levels" aria-label="Mercury Lab production rooms">
              {floors.map((floor) => (
                <section
                  className={`factory-level factory-level--${floor.id} ${
                    floor.id === activeFloor ? "is-current" : ""
                  }`}
                  data-floor={floor.id}
                  key={floor.id}
                  ref={(element) => {
                    floorRefs.current[floor.id] = element;
                  }}
                >
                  <header className="level-label" aria-hidden="true">
                    <span>Level / {floor.id}</span>
                    <strong>{floor.label}</strong>
                  </header>
                  <div className={`level-rooms level-rooms--${floor.rooms.length}`}>
                    {floor.rooms.map((roomId) => {
                      const room = rooms.find((item) => item.id === roomId);
                      const index = rooms.indexOf(room);
                      const isActive = room.id === activeRoom;
                      return (
                        <div className="room-bay" key={room.id}>
                          <RoomShell
                            active={isActive}
                            focusable={!activeRoom && index === 0}
                            functionLabel={roomFunctions[room.id]}
                            index={index}
                            room={room}
                            roomRefs={roomRefs}
                            onActivate={setActiveRoom}
                            onNavigate={moveFocus}
                          />
                          {isActive && (
                            <ModuleDossier room={room} onClose={closeDossier} />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>

          <footer className="factory-console" aria-hidden="true">
            <div>
              <p>System Principles</p>
              <span>Traceable source / Rights aware / Human reviewed</span>
            </div>
            <div>
              <p>Machine Status</p>
              <strong>All systems operational</strong>
            </div>
            <div>
              <p>Active Feed</p>
              <span>{selectedRoom ? read(selectedRoom.title) : "Select a room to inspect its module record"}</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
