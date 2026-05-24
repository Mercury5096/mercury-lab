import RoomMotif from "./RoomMotifs";

const locale = "en";
const read = (value) =>
  typeof value === "string" ? value : value[locale] ?? value.en;

export default function RoomShell({
  active,
  focusable,
  functionLabel,
  index,
  room,
  roomRefs,
  onActivate,
  onNavigate,
}) {
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
          <span>RM-{room.code}</span>
          <small>{room.period}</small>
        </span>
        <strong>{read(room.title)}</strong>
        <span className="room-function">{functionLabel}</span>
      </span>
      <RoomMotif roomId={room.id} />
      <span className="room-footer">
        <span>{room.diagram.callout}</span>
        <span>Open dossier</span>
      </span>
    </button>
  );
}
