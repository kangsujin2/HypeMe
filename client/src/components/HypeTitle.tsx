const LETTERS = [
  { char: "H", color: "#6F7F3C" },
  { char: "Y", color: "#D17A22" },
  { char: "P", color: "#E0B44C" },
  { char: "E", color: "#6F7F3C" },
  { char: "M", color: "#D17A22" },
  { char: "E", color: "#E0B44C" },
];

export function HypeTitle() {
  return (
    <h1 className="flex justify-center gap-1 select-none">
      {LETTERS.map((l, i) => (
        <span
          key={i}
          className="
            inline-block
            text-4xl
            font-extrabold
            border-2 border-[#2A2A2A]
            px-2 py-1
            leading-none
          "
          style={{
            color: "#2A2A2A",
            backgroundColor: "#FFF8ED",
            boxShadow: "3px 3px 0 " + l.color,
            transform: `translateY(${i % 2 === 0 ? "0px" : "2px"})`,
          }}
        >
          {l.char}
        </span>
      ))}
    </h1>
  );
}
