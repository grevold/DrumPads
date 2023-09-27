import { CrusherConfigPanel } from "./components/CrusherConfigPanel/CrusherConfigPanel";
import { PhaserConfigPanel } from "./components/PhaserConfigPanel/PhaserConfigPanel";
import { PingPongConfigPanel } from "./components/PingPongConfigPanel/PingPongConfigPanel";

import s from "./EffectsConfigPanel.module.css";

export const EffectsConfigPanel = () => {
  return (
    <div className={s.root}>
      <PingPongConfigPanel />
      <PhaserConfigPanel />
      <CrusherConfigPanel />
    </div>
  );
};
