import { Banks, EPack } from "./store/soundEffectsConfigSlice";

export const samples: Record<
  EPack,
  Record<
    Banks,
    Array<{
      color: string;
      sample: string;
      keyBoard: string;
    }>
  >
> = {
  Classic_Hip_Hop: {
    A: [
      { color: "#d7e81c", sample: "Chord_F_1.mp3", keyBoard: "KeyA" },
      { color: "#d7e81c", sample: "Chord_C_2.mp3", keyBoard: "KeyW" },
      { color: "#d7e81c", sample: "Sax_3.mp3", keyBoard: "KeyS" },
      { color: "#c41492", sample: "Bass_F_4.mp3", keyBoard: "KeyE" },
      { color: "#c41492", sample: "Bass_C_5.mp3", keyBoard: "KeyD" },
      { color: "#c41492", sample: "Sax_6.mp3", keyBoard: "KeyR" },
      { color: "#1ce885", sample: "FX_7.mp3", keyBoard: "KeyF" },
      { color: "#1ce885", sample: "Pre_8.mp3", keyBoard: "KeyT" },
      { color: "#1ce885", sample: "Voice_9.mp3", keyBoard: "KeyG" },
      { color: "#3e07e3", sample: "Kick_10.mp3", keyBoard: "KeyY" },
      { color: "#3e07e3", sample: "Hat_11.mp3", keyBoard: "KeyH" },
      { color: "#3e07e3", sample: "Snare_12.mp3", keyBoard: "KeyU" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyA" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyW" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyS" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyE" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyD" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyR" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyF" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyT" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyG" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyY" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyH" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyU" },
    ],
  },
  Lazy_Morning: {
    A: [
      { color: "#d7e81c", sample: "Chord_B_1.mp3", keyBoard: "1" },
      { color: "#d7e81c", sample: "Chord_F_2.mp3", keyBoard: "2" },
      { color: "#d7e81c", sample: "Chord_G_3.mp3", keyBoard: "3" },
      { color: "#c41492", sample: "Bass_E_4.mp3", keyBoard: "q" },
      { color: "#c41492", sample: "Bass_F_5.mp3", keyBoard: "w" },
      { color: "#c41492", sample: "Bass_G_6.mp3", keyBoard: "e" },
      { color: "#1ce885", sample: "Lead_B_7.mp3", keyBoard: "a" },
      { color: "#1ce885", sample: "Lead_F_8.mp3", keyBoard: "s" },
      { color: "#1ce885", sample: "Lead_G_9.mp3", keyBoard: "d" },
      { color: "#3e07e3", sample: "Kick_10.mp3", keyBoard: "z" },
      { color: "#3e07e3", sample: "Hat_11.mp3", keyBoard: "x" },
      { color: "#3e07e3", sample: "Snare_12.mp3", keyBoard: "c" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyA" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyW" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyS" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyE" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyD" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyR" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyF" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyT" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyG" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyY" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyH" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyU" },
    ],
  },
  LoFi_Night: {
    A: [
      { color: "#d7e81c", sample: "Chord_C_1.mp3", keyBoard: "KeyA" },
      { color: "#d7e81c", sample: "Chord_F_2.mp3", keyBoard: "KeyW" },
      { color: "#d7e81c", sample: "Voice_01_3.mp3", keyBoard: "KeyS" },
      { color: "#c41492", sample: "Bass_C_4.mp3", keyBoard: "KeyE" },
      { color: "#c41492", sample: "Bass_F_5.mp3", keyBoard: "KeyD" },
      { color: "#c41492", sample: "Voice_02_6.mp3", keyBoard: "KeyR" },
      { color: "#1ce885", sample: "Scratch_7.mp3", keyBoard: "KeyF" },
      { color: "#1ce885", sample: "Pre_8.mp3", keyBoard: "KeyT" },
      { color: "#1ce885", sample: "Voice_9.mp3", keyBoard: "KeyG" },
      { color: "#3e07e3", sample: "Kick_10.mp3", keyBoard: "KeyY" },
      { color: "#3e07e3", sample: "Hat_11.mp3", keyBoard: "KeyH" },
      { color: "#3e07e3", sample: "Snare_12.mp3", keyBoard: "KeyU" },
    ],
    B: [
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyA" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyW" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyS" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyE" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyD" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyR" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyF" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyT" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyG" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyY" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyH" },
      { color: "#d7e81c", sample: "Kick_10.mp3", keyBoard: "KeyU" },
    ],
  },
};
