import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { rooms } from "../content";
import BlueprintFrame from "./factory/BlueprintFrame";
import RoomShell from "./factory/RoomShell";

const readValue = (value, locale) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

const copy = (en, zh = null) => ({ en, zh });

const roomFunctions = {
  "print-engine-room": copy("Print to System", "從印刷到系統"),
  "editorial-kitchen": copy("Editorial Room", "編輯製作"),
  "cookbook-production-floor": copy("Brief to Delivery", "從企劃到交付"),
  "story-archive-ip-office": copy("Story to Interaction", "從故事到互動"),
  "operation-control-room": copy("Coordination Engine", "協調引擎"),
  "commerce-visual-line": copy("Commercial Visuals", "商業視覺"),
  "multimedia-workshop": copy("Case Files", "多媒體作品"),
  "ai-workflow-lab": copy("Research to Output", "從研究到原型"),
};

const floors = [
  {
    id: "07",
    label: copy("Print Foundation", "印刷基礎"),
    rooms: ["print-engine-room"],
  },
  {
    id: "06",
    label: copy("Editorial Production", "編輯製作"),
    rooms: ["editorial-kitchen"],
  },
  {
    id: "05",
    label: copy("Cookbook Production", "食譜出版"),
    rooms: ["cookbook-production-floor"],
  },
  {
    id: "04",
    label: copy("Story Archive", "故事檔案"),
    rooms: ["story-archive-ip-office"],
  },
  {
    id: "03",
    label: copy("Operations Control", "營運協調"),
    rooms: ["operation-control-room"],
  },
  {
    id: "02",
    label: copy("Commerce Visuals", "電商視覺"),
    rooms: ["commerce-visual-line"],
  },
  {
    id: "01",
    label: copy("Multimedia Practice", "多媒體實作"),
    rooms: ["multimedia-workshop"],
  },
  {
    id: "00",
    label: copy("Assisted Research Lab", "AI 輔助研究"),
    rooms: ["ai-workflow-lab"],
  },
];

const floorByRoom = Object.fromEntries(
  floors.flatMap((floor) => floor.rooms.map((roomId) => [roomId, floor.id])),
);

function ModuleDossier({ locale, room, onClose }) {
  const proof = room.proof;
  const read = (value) => readValue(value, locale);
  const isZh = locale === "zh";
  const t = {
    close: isZh ? "關閉" : "Close",
    module: isZh ? "模組" : "Module",
    evidence: isZh ? "證據" : "Evidence",
    file: isZh ? "檔案" : "FILE",
    manual: isZh ? "模組說明" : "Module Manual",
    activePeriod: isZh ? "活躍時期" : "Active period",
    productionScope: isZh ? "製作範圍" : "Production scope",
  };

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
        {t.close}
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
          <dt>{t.activePeriod}</dt>
          <dd>{room.period}</dd>
        </div>
        <div>
          <dt>{t.productionScope}</dt>
          <dd>{read(room.discipline)}</dd>
        </div>
      </dl>
      {proof && (
        <section
          className={`dossier-proof dossier-proof--${proof.layout ?? "wide"}`}
          aria-label={`${read(room.title)} evidence`}
        >
          <div className="dossier-proof__head">
            <span>{isZh ? "證據摘要" : "Evidence Summary"}</span>
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
  const isZh = locale === "zh";
  const [activeRoom, setActiveRoom] = useState(null);
  const [activeFloor, setActiveFloor] = useState(floors[0].id);
  const t = {
    status: isZh ? "內容工廠 / A 剖面" : "Content Factory / Section A",
    operational: isZh ? "狀態 / 開放檢視" : "Status / Open for review",
    drawing: isZh ? "圖面 / CUT-04" : "Drawing / CUT-04",
    language: isZh ? "語言 / 中文" : "Language / EN",
    controlled: isZh ? "證據精選 / 人工審核" : "Evidence curated / Human reviewed",
    factoryRoute: isZh ? "工廠路線" : "Factory Route",
    explore: isZh ? "探索 / Level 07-00" : "Explore / Level 07-00",
    viewing: isZh ? `目前 / Level ${activeFloor}` : `Viewing / Level ${activeFloor}`,
    legend: isZh ? "系統圖例" : "System Legend",
    peopleFlow: isZh ? "人員流程" : "People flow",
    evidenceGate: isZh ? "證據關口" : "Evidence gate",
    publicRelease: isZh ? "公開發布" : "Public release",
    verticalRoute: isZh ? "垂直路線" : "Vertical route",
    level: isZh ? "樓層" : "Level",
    principles: isZh ? "系統原則" : "System Principles",
    principlesText: isZh ? "可追溯來源 / 權利意識 / 人工審核" : "Traceable source / Rights aware / Human reviewed",
    machineStatus: isZh ? "機器狀態" : "Machine Status",
    allOperational: isZh ? "所有系統運作中" : "All systems operational",
    activeFeed: isZh ? "目前檢視" : "Active Feed",
    selectRoom: isZh ? "選擇一個房間查看模組記錄" : "Select a room to inspect its module record",
  };
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
          <p>{t.status}</p>
          <strong>{t.operational}</strong>
          <span>{t.drawing}</span>
          <span>{t.language}</span>
          <div className="barcode" aria-hidden="true" />
          <small>{t.controlled}</small>
        </aside>
      </header>

      <div className="cutaway-layout">
        <nav className="route-index" aria-label="Factory route index">
          <div className="route-index__head">
            <p>{t.factoryRoute}</p>
            <span>{t.explore}</span>
            <strong>{t.viewing}</strong>
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
            <p>{t.legend}</p>
            <span>{t.peopleFlow}</span>
            <span>{t.evidenceGate}</span>
            <span>{t.publicRelease}</span>
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
              <span>{t.verticalRoute}</span>
              <i className="shaft-ladder" />
              <i className="shaft-pipe" />
              <i className="shaft-data" />
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
                    <span>{t.level} / {floor.id}</span>
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
              <p>{t.principles}</p>
              <span>{t.principlesText}</span>
            </div>
            <div>
              <p>{t.machineStatus}</p>
              <strong>{t.allOperational}</strong>
            </div>
            <div>
              <p>{t.activeFeed}</p>
              <span>{selectedRoom ? read(selectedRoom.title) : t.selectRoom}</span>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
