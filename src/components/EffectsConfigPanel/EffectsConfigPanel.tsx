import { CrusherConfigPanel } from "./components/CrusherConfigPanel/CrusherConfigPanel";
import { PingPongConfigPanel } from "./components/PingPongConfigPanel/PingPongConfigPanel";

import s from "./EffectsConfigPanel.module.css";
import { ReverbPanel } from "./components/ReverbPanel/ReverbPanel";

export const EffectsConfigPanel = () => {
  return (
    <div className={s.root}>
      <PingPongConfigPanel />
      <ReverbPanel />
      <CrusherConfigPanel />
    </div>
  );
};
