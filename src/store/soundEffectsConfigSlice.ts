import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PhaserOptions } from "tone";
import { NormalRange, Positive, Time } from "tone/build/esm/core/type/Units";

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
  soundEffects: {
    [ESoundEffect.PingPong]: {
      enabled: boolean;
      params?: { delayTime?: Time; feedback?: NormalRange };
    };
    [ESoundEffect.PhaserMode]: {
      enabled: boolean;
      params?: Partial<PhaserOptions>;
    };
    [ESoundEffect.CrusherMode]: {
      enabled: boolean;
      params?: {
        bits?: Positive;
      };
    };
  };
  pack: EPack;
  bank: Banks;
}

const initialState: ISoundEffectsConfig = {
  soundEffects: {
    [ESoundEffect.PingPong]: {
      enabled: false,
    },
    [ESoundEffect.PhaserMode]: {
      enabled: false,
    },
    [ESoundEffect.CrusherMode]: {
      enabled: false,
    },
  },
  pack: EPack.Lazy_Morning,
  bank: Banks.A,
};

const slice = createSlice({
  name: "soundEffectsConfig",
  initialState,
  reducers: {
    clickEffect(store, action: PayloadAction<ESoundEffect>) {
      const configForEffect = store.soundEffects[action.payload];

      return {
        ...store,
        soundEffects: {
          ...store.soundEffects,
          [action.payload]: {
            ...configForEffect,
            enabled: !configForEffect.enabled,
          },
        },
      };
    },
    selectPack(store, action: PayloadAction<EPack>) {
      return {
        ...store,
        pack: action.payload,
      };
    },
    switchBank(store) {
      return {
        ...store,
        bank: store.bank === Banks.A ? Banks.B : Banks.A,
      };
    },
    setDelayTimeForPingPongMode(store, action: PayloadAction<number>) {
      return {
        ...store,
        soundEffects: {
          ...store.soundEffects,
          [ESoundEffect.PingPong]: {
            ...store.soundEffects[ESoundEffect.PingPong],
            params: {
              ...store.soundEffects[ESoundEffect.PingPong].params,
              delayTime: `${action.payload}n`,
            },
          },
        },
      };
    },
    setFeedbackForPingPongMode(store, action: PayloadAction<number>) {
      return {
        ...store,
        soundEffects: {
          ...store.soundEffects,
          [ESoundEffect.PingPong]: {
            ...store.soundEffects[ESoundEffect.PingPong],
            params: {
              ...store.soundEffects[ESoundEffect.PingPong].params,
              feedback: action.payload,
            },
          },
        },
      };
    },
  },
});

export const soundEffectsActions = slice.actions;
export const soundEffectsReducer = slice.reducer;
