import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import {
  Banks,
  soundEffectsActions,
} from "../../../../store/soundEffectsConfigSlice";
import { Switch } from "antd";

import s from "./SwitchBanks.module.css";

export function SwitchBanks() {
  const dispatch = useAppDispatch();
  const handleBankSelect = useCallback(() => {
    dispatch(soundEffectsActions.switchBank());
  }, [dispatch]);

  return (
    <div className={s.root}>
      <Switch
        onClick={handleBankSelect}
        checkedChildren={Banks.A}
        unCheckedChildren={Banks.B}
        defaultChecked
        className={s.custom_switch}
      />
    </div>
  );
}
