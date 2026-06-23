import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { brand, factoryCopy, rooms } from "../data/siteCopy";
import BlueprintFrame from "./factory/BlueprintFrame";
import RoomShell from "./factory/RoomShell";

const readValue = (value, locale) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

const { floors, roomFunctions } = factoryCopy;

const floorByRoom = Object.fromEntries(
  floors.flatMap((floor) => floor.rooms.map((roomId) => [roomId, floor.id])),
);

function ModuleDossier({ locale, room, onClose }) {
  const proof = room.proof;
  const read = (value) => readValue(value, locale);
  const t = factoryCopy.dossier;

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
        {read(t.close)}
      </button>
      <div className="dossier-index">
        <span>{room.period}</span>
        <span>{read(room.diagram.zone)}</span>
      </div>
      <div className="manual-panel__top">
        <div>
          <p className="eyebrow">{read(room.discipline)}</p>
          <h3>{read(room.title)}</h3>
        </div>
      </div>
      <p className="manual-summary dossier-achievement">{read(room.summary)}</p>
      <dl className="manual-spec dossier-spec">
        <div>
          <dt>{read(t.activePeriod)}</dt>
          <dd>{room.period}</dd>
        </div>
        <div>
          <dt>{read(t.productionScope)}</dt>
          <dd>{read(room.discipline)}</dd>
        </div>
      </dl>
      {proof && (
        <section
          className={`dossier-proof dossier-proof--${proof.layout ?? "wide"}`}
          aria-label={`${read(room.title)} evidence`}
        >
          <div className="dossier-proof__head">
            <span>{read(t.evidenceSummary)}</span>
            <strong>{read(proof.label)}</strong>
          </div>
          <p>{read(proof.outcome)}</p>
          <ul>
            {proof.roles.map((role) => (
              <li key={read(role)}>{read(role)}</li>
            ))}
          </ul>
          {proof.assets?.length > 0 && (
            <div className="dossier-proof__gallery">
              {proof.assets.map((asset) => (
                <img key={asset.src} src={asset.src} alt={asset.alt} />
              ))}
            </div>
          )}
          {proof.videos?.length > 0 && (
            <div className="dossier-proof__videos">
              {proof.videos.map((video) => (
                <a
                  className="dossier-proof__video"
                  href={video.url}
                  key={video.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <span>{read(video.type)}</span>
                  <strong>{read(video.title)}</strong>
                  <small>{read(video.role)}</small>
                </a>
              ))}
            </div>
          )}
        </section>
      )}
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
  locale,
}) {
  const read = (value) => readValue(value, locale);
  const [brandFirst, brandSecond] = brand.name.split(" ");
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeFloor, setActiveFloor] = useState(floors[0].id);
  const t = factoryCopy.status;
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
            {brandFirst}
            <span>{brandSecond}</span>
          </h1>
        </div>
        <div className="factory-intro">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="subtitle">{subtitle}</p>
          <p className="positioning">{positioning}</p>
          <p className="section-copy">{description}</p>
        </div>
        <aside className="factory-status" aria-label={t.drawingStatusAria}>
          <p>{read(t.status)}</p>
          <strong>{read(t.operational)}</strong>
          <span>{read(t.drawing)}</span>
          <span>{read(t.language)}</span>
          <div className="barcode" aria-hidden="true" />
          <small>{read(t.controlled)}</small>
        </aside>
      </header>

      <div className="cutaway-layout">
        <nav className="route-index" aria-label={t.routeIndexAria}>
          <div className="route-index__head">
            <p>{read(t.factoryRoute)}</p>
            <span>{read(t.explore)}</span>
            <strong>
              {read(t.viewingPrefix)} {activeFloor}
            </strong>
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
                  <span>LV-{floorByRoom[room.id]}</span>
                  <strong>{read(roomFunctions[room.id])}</strong>
                  <small>MCL-{room.code} / {read(room.title)}</small>
                </button>
              </li>
            ))}
          </ol>
          <div className="route-index__legend">
            <p>{read(t.legend)}</p>
            <span>{read(t.peopleFlow)}</span>
            <span>{read(t.evidenceGate)}</span>
            <span>{read(t.publicRelease)}</span>
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
              <span>{read(t.verticalRoute)}</span>
              <i className="shaft-ladder" />
              <i className="shaft-pipe" />
              <i className="shaft-data" />
            </div>
            <div className="factory-levels" aria-label={t.productionRoomsAria}>
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
                    <span>{read(t.level)} / {floor.id}</span>
                    <strong>{read(floor.label)}</strong>
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
                            floorId={floor.id}
                            functionLabel={read(roomFunctions[room.id])}
                            index={index}
                            locale={locale}
                            room={room}
                            roomRefs={roomRefs}
                            onActivate={setActiveRoom}
                            onNavigate={moveFocus}
                          />
                          {isActive &&
                            createPortal(
                              <ModuleDossier locale={locale} room={room} onClose={closeDossier} />,
                              document.body,
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
              <p>{read(t.principles)}</p>
              <span>{read(t.principlesText)}</span>
            </div>
            <div>
              <p>{read(t.machineStatus)}</p>
              <strong>{read(t.allOperational)}</strong>
            </div>
            <div>
              <p>{read(t.activeFeed)}</p>
              <span>{selectedRoom ? read(selectedRoom.title) : read(t.selectRoom)}</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
