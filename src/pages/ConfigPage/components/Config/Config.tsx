import { Select } from "antd";
import { useCallback } from "react";
import {
  EInstrument,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { EffectsConfigPanel } from "../EffectsConfigPanel/EffectsConfigPanel";
import { samples } from "../../../../Texts";

import s from "./Config.module.css";
import { Container } from "../../../../components/Container/Container";

export function Config() {
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

  const config = useAppSelector((store) => store.soundEffectsReducer);

  return (
    <Container className={s.root}>
      <div>
        <h1 className={s.title}>Instrument</h1>

        <select
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
