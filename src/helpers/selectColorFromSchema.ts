import { AMINO_COLOR_MAP } from "@/constants";

export const getAminoColor = (amino: string) =>
  AMINO_COLOR_MAP.get(amino.toUpperCase()) || "transparent";
