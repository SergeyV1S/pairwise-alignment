const AMINO_COLOR_SCHEMA = new Map([
  [["C"], "#FFEA00"],
  [["G"], "#C4C4C4"],
  [["A", "I", "L", "M", "F", "W", "Y", "V", "P"], "#67E4A6"],
  [["D", "E"], "#FC9CAC"],
  [["K", "R"], "#BB99FF"],
  [["S", "T", "H", "Q", "N"], "#80BFFF"]
]);

export const AMINO_COLOR_MAP = new Map<string, string>();

AMINO_COLOR_SCHEMA.forEach((color, aminos) => {
  aminos.forEach((amino) => {
    AMINO_COLOR_MAP.set(amino, color);
  });
});

AMINO_COLOR_MAP.set("-", "#DDDDDD");
