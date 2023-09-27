import { Banks, EPack } from "./store/soundEffectsConfigSlice";

export const samples: Record<
  EPack,
  Record<
    Banks,
    Array<{
      color: string;
      sample: string;
    }>
  >
> = {
  Classic_Hip_Hop: {
    A: [
      { color: "#d7e81c", sample: "Chord_F_1.mp3" },
      { color: "#d7e81c", sample: "Chord_C_2.mp3" },
      { color: "#d7e81c", sample: "Sax_3.mp3" },
      { color: "#c41492", sample: "Bass_F_4.mp3" },
      { color: "#c41492", sample: "Bass_C_5.mp3" },
      { color: "#c41492", sample: "Sax_6.mp3" },
      { color: "#1ce885", sample: "FX_7.mp3" },
      { color: "#1ce885", sample: "Pre_8.mp3" },
      { color: "#1ce885", sample: "Voice_9.mp3" },
      { color: "#3e07e3", sample: "Kick_10.mp3" },
      { color: "#3e07e3", sample: "Hat_11.mp3" },
      { color: "#3e07e3", sample: "Snare_12.mp3" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
    ],
  },
  Lazy_Morning: {
    A: [
      { color: "#d7e81c", sample: "Chord_B_1.mp3" },
      { color: "#d7e81c", sample: "Chord_F_2.mp3" },
      { color: "#d7e81c", sample: "Chord_G_3.mp3" },
      { color: "#c41492", sample: "Bass_E_4.mp3" },
      { color: "#c41492", sample: "Bass_F_5.mp3" },
      { color: "#c41492", sample: "Bass_G_6.mp3" },
      { color: "#1ce885", sample: "Lead_B_7.mp3" },
      { color: "#1ce885", sample: "Lead_F_8.mp3" },
      { color: "#1ce885", sample: "Lead_G_9.mp3" },
      { color: "#3e07e3", sample: "Kick_10.mp3" },
      { color: "#3e07e3", sample: "Hat_11.mp3" },
      { color: "#3e07e3", sample: "Snare_12.mp3" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
    ],
  },
  LoFi_Night: {
    A: [
      { color: "#d7e81c", sample: "Chord_C_1.mp3" },
      { color: "#d7e81c", sample: "Chord_F_2.mp3" },
      { color: "#d7e81c", sample: "Voice_01_3.mp3" },
      { color: "#c41492", sample: "Bass_C_4.mp3" },
      { color: "#c41492", sample: "Bass_F_5.mp3" },
      { color: "#c41492", sample: "Voice_02_6.mp3" },
      { color: "#1ce885", sample: "Scratch_7.mp3" },
      { color: "#1ce885", sample: "Pre_8.mp3" },
      { color: "#1ce885", sample: "Voice_9.mp3" },
      { color: "#3e07e3", sample: "Kick_10.mp3" },
      { color: "#3e07e3", sample: "Hat_11.mp3" },
      { color: "#3e07e3", sample: "Snare_12.mp3" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
      { color: "#d7e81c", sample: "Kick_10.mp3" },
    ],
  },
};
