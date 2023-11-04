import { EInstrument } from "./store/soundEffectsConfigSlice";
import { IPad } from "./types";

export const samples: Record<
  EInstrument,
  Record<
    string,
    {
      A: IPad[];
      B: IPad[];
    }
  >
> = {
  // Drums: {},
  Basses: {
    Bass1: {
      A: [
        { color: "#bd28d7", sample: "Bass C1.mp3", keyBoard: "1" },
        { color: "#bd28d7", sample: "Bass C1d.mp3", keyBoard: "2" },
        { color: "#bd28d7", sample: "Bass D1.mp3", keyBoard: "3" },
        { color: "#dc6123", sample: "Bass D1d.mp3", keyBoard: "q" },
        { color: "#dc6123", sample: "Bass E1.mp3", keyBoard: "w" },
        { color: "#dc6123", sample: "Bass F1.mp3", keyBoard: "e" },
        { color: "#40db24", sample: "Bass F1d.mp3", keyBoard: "a" },
        { color: "#40db24", sample: "Bass G1.mp3", keyBoard: "s" },
        { color: "#40db24", sample: "Bass G1d.mp3", keyBoard: "d" },
        { color: "#219dde", sample: "Bass A1.mp3", keyBoard: "z" },
        { color: "#219dde", sample: "Bass A1d.mp3", keyBoard: "x" },
        { color: "#219dde", sample: "Bass B1.mp3", keyBoard: "c" },
      ],
      B: [
        { color: "#2a30d5", sample: "Cymb.mp3", keyBoard: "1" },
        { color: "#2a30d5", sample: "Perc_1.mp3", keyBoard: "2" },
        { color: "#2a30d5", sample: "Perc_2.mp3", keyBoard: "3" },
        { color: "#d52a7f", sample: "Perc_3.mp3", keyBoard: "q" },
        { color: "#d52a7f", sample: "Hat_4.mp3", keyBoard: "w" },
        { color: "#d52a7f", sample: "Snare_2.mp3", keyBoard: "e" },
        { color: "#d6ce29", sample: "Hat_2.mp3", keyBoard: "a" },
        { color: "#d6ce29", sample: "Pre.mp3", keyBoard: "s" },
        { color: "#d6ce29", sample: "Hat_3.mp3", keyBoard: "d" },
        { color: "#25da73", sample: "Kick_1.mp3", keyBoard: "z" },
        { color: "#25da73", sample: "Hat_1.mp3", keyBoard: "x" },
        { color: "#25da73", sample: "Snare_1.mp3", keyBoard: "c" },
      ],
    },
  },
  Synths: {
    Pluck1: {
      A: [
        { color: "#bd28d7", sample: "Pluck C1.mp3", keyBoard: "1" },
        { color: "#bd28d7", sample: "Pluck C1d.mp3", keyBoard: "2" },
        { color: "#bd28d7", sample: "Pluck D1.mp3", keyBoard: "3" },
        { color: "#dc6123", sample: "Pluck D1d.mp3", keyBoard: "q" },
        { color: "#dc6123", sample: "Pluck E1.mp3", keyBoard: "w" },
        { color: "#dc6123", sample: "Pluck F1.mp3", keyBoard: "e" },
        { color: "#40db24", sample: "Pluck F1d.mp3", keyBoard: "a" },
        { color: "#40db24", sample: "Pluck G1.mp3", keyBoard: "s" },
        { color: "#40db24", sample: "Pluck G1d.mp3", keyBoard: "d" },
        { color: "#219dde", sample: "Pluck A1.mp3", keyBoard: "z" },
        { color: "#219dde", sample: "Pluck A1d.mp3", keyBoard: "x" },
        { color: "#219dde", sample: "Pluck B1.mp3", keyBoard: "c" },
      ],
      B: [
        { color: "#2a30d5", sample: "Cymb.mp3", keyBoard: "1" },
        { color: "#2a30d5", sample: "Perc_1.mp3", keyBoard: "2" },
        { color: "#2a30d5", sample: "Perc_2.mp3", keyBoard: "3" },
        { color: "#d52a7f", sample: "Perc_3.mp3", keyBoard: "q" },
        { color: "#d52a7f", sample: "Hat_4.mp3", keyBoard: "w" },
        { color: "#d52a7f", sample: "Snare_2.mp3", keyBoard: "e" },
        { color: "#d6ce29", sample: "Hat_2.mp3", keyBoard: "a" },
        { color: "#d6ce29", sample: "Pre.mp3", keyBoard: "s" },
        { color: "#d6ce29", sample: "Hat_3.mp3", keyBoard: "d" },
        { color: "#25da73", sample: "Kick_1.mp3", keyBoard: "z" },
        { color: "#25da73", sample: "Hat_1.mp3", keyBoard: "x" },
        { color: "#25da73", sample: "Snare_1.mp3", keyBoard: "c" },
      ],
    },
  },
  // Percussion: {},
};
