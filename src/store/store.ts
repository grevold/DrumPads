import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { soundEffectsReducer } from "./soundEffectsConfigSlice";
import { soundsReducer } from "./soundsConfigSlice";

export const store = configureStore({
  reducer: {
    soundEffectsReducer,
  },
});

type ReduxState = ReturnType<typeof store.getState>;
type ReduxDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ReduxState> = useSelector;
export const useAppDispatch = () => useDispatch<ReduxDispatch>();
