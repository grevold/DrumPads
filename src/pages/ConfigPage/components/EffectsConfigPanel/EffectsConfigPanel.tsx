import { CrusherConfigPanel } from "./components/CrusherConfigPanel/CrusherConfigPanel";
import { PingPongConfigPanel } from "./components/PingPongConfigPanel/PingPongConfigPanel";
import { ReverbPanel } from "./components/ReverbPanel/ReverbPanel";

import s from "./EffectsConfigPanel.module.css";

export const EffectsConfigPanel = () => {
  return (
    <div className={s.root}>
      <h1 className={s.header}>FX PANEL</h1>
      <div className={s.effects}>
        <PingPongConfigPanel />
        <ReverbPanel />
        <CrusherConfigPanel />
      </div>
    </div>
  );
};
