import RoomInterior from "./RoomMotifs";
import { factoryCopy } from "../../data/siteCopy";

const read = (value, locale) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

export default function RoomShell({
  active,
  focusable,
  floorId,
  functionLabel,
  index,
  locale,
  room,
  roomRefs,
  onActivate,
  onNavigate,
}) {
  const readCopy = (value) => read(value, locale);

  return (
    <button
      className={`factory-room room--${room.diagram.area} ${active ? "active" : ""}`}
      id={`room-${room.id}`}
      ref={(element) => {
        roomRefs.current[index] = element;
      }}
      aria-expanded={active}
      aria-controls={`panel-${room.id}`}
      tabIndex={active || focusable ? 0 : -1}
      type="button"
      onClick={() => onActivate(room.id)}
      onKeyDown={(event) => onNavigate(event, index)}
    >
      <span className="room-structure" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span className="room-label">
        <span className="room-label__head">
          <span>LV-{floorId}</span>
          <small>{room.period}</small>
        </span>
        <strong>{read(room.title, locale)}</strong>
        <span className="room-function">{functionLabel}</span>
      </span>
      <RoomInterior locale={locale} roomId={room.id} />
      <span className="room-footer">
        <span>{read(room.diagram.callout, locale)}</span>
        <span>{readCopy(factoryCopy.roomShell.openDossier)}</span>
      </span>
    </button>
  );
}
