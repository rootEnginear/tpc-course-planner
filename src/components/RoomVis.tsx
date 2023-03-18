export default function RoomVis({ slots }: { slots: number }) {
  return (
    <>
      {new Array(slots).fill(0).map((_, i) => (
        <>
          {i % 6 === 0 && i !== 0 && <>&emsp;</>}
          <span key={i}>🟩</span>
        </>
      ))}
      {slots % 6 !== 0 &&
        new Array(6 - (slots % 6)).fill(0).map((_, i) => <span key={i}>🟥</span>)}
    </>
  );
}
