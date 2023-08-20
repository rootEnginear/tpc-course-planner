interface RoomVisProps {
  slots: number;
  medical?: boolean;
}

export default function RoomVis({ slots, medical }: RoomVisProps) {
  const full_slots = Math.floor(slots / 6);

  if (medical)
    return (
      <span>
        <span className="mr-8">{"🟦".repeat(full_slots)}</span>
        <span className="whitespace-nowrap">
          {full_slots} room{full_slots > 1 && "s"}
        </span>
      </span>
    );

  const reminded_slots = slots % 6;

  return (
    <span>
      {new Array(full_slots).fill(0).map((_, i) => (
        <span className="mr-8 whitespace-nowrap" key={i}>
          🟩🟩🟩🟩🟩🟩
        </span>
      ))}
      {reminded_slots !== 0 && (
        <span className="mr-8 whitespace-nowrap">
          {"🟩".repeat(reminded_slots).padEnd(12, "🟥")}
        </span>
      )}
      <span className="whitespace-nowrap">
        {slots} slot{slots > 1 && "s"}
      </span>
    </span>
  );
}
