import { Select } from "antd";
import { useCallback } from "react";
import {
  EInstrument,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { EffectsConfigPanel } from "../EffectsConfigPanel/EffectsConfigPanel";
import { samples } from "../../../../Texts";
import { Container } from "../../../../components/Container/Container";

import s from "./Config.module.css";

export function Config() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const dispatch = useAppDispatch();

  const handleInstrumentSelect = useCallback(
    (instrument: EInstrument) => {
      dispatch(soundEffectsActions.selectInstrument(instrument));
    },
    [dispatch]
  );

  const handlePackSelect = useCallback(
    (pack: string) => {
      dispatch(soundEffectsActions.selectPack(pack));
    },
    [dispatch]
  );

  return (
    <Container className={s.root}>
      <div>
        <h1 className={s.title}>Instrument</h1>

        <select
          value={config.instrument}
          className={s.select}
          onChange={({ target }) =>
            handleInstrumentSelect(target.value as EInstrument)
          }
        >
          {Object.values(EInstrument).map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h1 className={s.title}>Soundbank</h1>
        <select
          value={config.pack}
          className={s.select}
          onChange={({ target }) => handlePackSelect(target.value)}
        >
          {Object.keys(samples[config.instrument]).map((pack) => (
            <option key={pack} value={pack}>
              {pack}
            </option>
          ))}
        </select>
      </div>

      <EffectsConfigPanel />
    </Container>
  );
}
