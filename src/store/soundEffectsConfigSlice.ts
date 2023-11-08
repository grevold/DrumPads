import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NormalRange, Positive, Time } from "tone/build/esm/core/type/Units";
import { samples } from "../Texts";

export enum EInstrument {
  Drums = "Drums",
  Basses = "Basses",
  Synths = "Synths",
  Percussion = "Percussion",
}

export enum ESoundEffect {
  PingPong = "Delay",
  Reverb = "Reverb",
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
    [ESoundEffect.Reverb]: {
      enabled: boolean;
      params?: { roomSize?: number };
    };
    [ESoundEffect.CrusherMode]: {
      enabled: boolean;
      params?: {
        bits?: Positive;
      };
    };
  };
  instrument: EInstrument;
  pack: string;
  bank: Banks;
}

const initialState: ISoundEffectsConfig = {
  soundEffects: {
    [ESoundEffect.PingPong]: {
      enabled: false,
    },
    [ESoundEffect.Reverb]: {
      enabled: false,
    },

    [ESoundEffect.CrusherMode]: {
      enabled: false,
    },
  },
  instrument: EInstrument.Basses,
  pack: Object.keys(samples.Basses)[0],
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
    selectInstrument(store, action: PayloadAction<EInstrument>) {
      const instrument = action.payload;
      const defaultPack = Object.keys(samples[action.payload])[0];

      return {
        ...store,
        instrument,
        pack: defaultPack,
      };
    },
    selectPack(store, action: PayloadAction<string>) {
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
    setRoomSizeForReverb(store, action: PayloadAction<number>) {
      return {
        ...store,
        soundEffects: {
          ...store.soundEffects,
          [ESoundEffect.Reverb]: {
            ...store.soundEffects[ESoundEffect.Reverb],
            params: {
              ...store.soundEffects[ESoundEffect.Reverb].params,
              roomSize: action.payload,
            },
          },
        },
      };
    },
    setBitForCrusherMode(store, action: PayloadAction<number>) {
      return {
        ...store,
        soundEffects: {
          ...store.soundEffects,
          [ESoundEffect.CrusherMode]: {
            ...store.soundEffects[ESoundEffect.CrusherMode],
            params: {
              ...store.soundEffects[ESoundEffect.CrusherMode].params,
              bits: action.payload,
            },
          },
        },
      };
    },
  },
});

export const soundEffectsActions = slice.actions;
export const soundEffectsReducer = slice.reducer;
