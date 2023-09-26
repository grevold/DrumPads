import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum EPack {
  Classic_Hip_Hop = "Classic_Hip_Hop",
  Lazy_Morning = "Lazy_Morning",
  LoFi_Night = "LoFi_Night",
}

export enum ESoundEffect {
  PingPong = "Delay",
  PhaserMode = "Phaser",
  CrusherMode = "Bit Crush",
}

export enum Banks {
  A = "A",
  B = "B",
}

export interface ISoundEffectsConfig {
  soundEffects: ESoundEffect[];
  pack: EPack;
  bank: Banks;
}

const initialState: ISoundEffectsConfig = {
  soundEffects: [],
  pack: EPack.Lazy_Morning,
  bank: Banks.A,
};

const slice = createSlice({
  name: "soundEffectsConfig",
  initialState,
  reducers: {
    clickEffect(store, action: PayloadAction<ESoundEffect>) {
      return {
        ...store,
        soundEffects: store.soundEffects.includes(action.payload)
          ? store.soundEffects.filter((effect) => effect !== action.payload)
          : [...store.soundEffects, action.payload],
      };
    },
  },
});

export const soundEffectsActions = slice.actions;
export const soundEffectsReducer = slice.reducer;
