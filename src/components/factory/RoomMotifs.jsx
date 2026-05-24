function PrintMotif() {
  return (
    <svg viewBox="0 0 180 90">
      <path d="M22 17h62v54H22zM17 25v-14h14M75 11h14v14M17 63v14h14M75 77h14V63" />
      <path d="M103 27h49M103 38h40M103 49h49M103 60h30" />
      <circle cx="53" cy="44" r="15" />
      <path d="M38 44h30M53 29v30" />
    </svg>
  );
}

function EditorialMotif() {
  return (
    <svg viewBox="0 0 180 90">
      <path d="M17 18h50v55H17zM75 18h88M75 29h70M75 40h82M75 52h55M75 64h75" />
      <path d="M25 27h34M25 36h24M25 49h34M25 58h28" />
    </svg>
  );
}

function AiMotif() {
  return (
    <svg viewBox="0 0 180 90">
      <path d="M31 45h37M68 45l30-23M68 45l30 23M98 22h43M98 68h43" />
      <circle cx="25" cy="45" r="6" />
      <circle cx="68" cy="45" r="7" />
      <circle cx="101" cy="22" r="6" />
      <circle cx="101" cy="68" r="6" />
      <circle cx="146" cy="22" r="6" />
      <circle cx="146" cy="68" r="6" />
    </svg>
  );
}

export default function RoomMotif({ roomId }) {
  let motif = null;
  if (roomId === "print-engine-room") motif = <PrintMotif />;
  if (roomId === "editorial-kitchen") motif = <EditorialMotif />;
  if (roomId === "ai-workflow-lab") motif = <AiMotif />;

  return motif ? (
    <span className="room-motif" aria-hidden="true">
      {motif}
    </span>
  ) : null;
}
