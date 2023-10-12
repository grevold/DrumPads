import { Select } from "antd";
import s from "./Config.module.css";

import { useCallback } from "react";

import {
  EPack,
  soundEffectsActions,
} from "../../store/soundEffectsConfigSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { EffectsConfigPanel } from "../EffectsConfigPanel/EffectsConfigPanel";

interface Props {
  isOpened: boolean;
}

export function Config() {
  const dispatch = useAppDispatch();
  const handlePackSelect = useCallback(
    (pack: EPack) => {
      dispatch(soundEffectsActions.selectPack(pack));
    },
    [dispatch]
  );
  const config = useAppSelector((store) => store.soundEffectsReducer);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Soundbank</h1>
      <Select
        id={"select"}
        className={s.select}
        value={config.pack}
        showSearch
        placeholder="Search to Select"
        onChange={handlePackSelect}
        options={Object.values(EPack).map((value) => ({
          value,
          label: value,
        }))}
      />
      <EffectsConfigPanel />
    </div>
  );
}
