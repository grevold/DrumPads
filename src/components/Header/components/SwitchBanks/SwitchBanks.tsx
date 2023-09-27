import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import {
  Banks,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { Switch } from "antd";

import s from "./SwitchBanks.module.css";

interface Props {
  className: string;
}

export function SwitchBanks() {
  const dispatch = useAppDispatch();
  const handleBankSelect = useCallback(() => {
    dispatch(soundEffectsActions.switchBank());
  }, [dispatch]);
  const config = useAppSelector((store) => store.soundEffectsReducer);

  return (
    <div className={s.root}>
      <Switch
        onClick={handleBankSelect}
        checkedChildren={config.bank}
        unCheckedChildren={Banks.B}
        defaultChecked
      />
    </div>
  );
}
