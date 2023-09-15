import s from "./index.module.css";
import { Pad } from "./components/Pad/Pad";
import { texts } from "./Texts";

function App() {
  const arrayOfPads = texts.Main.pads;
  console.log("render");
  return (
    <div className={s.root}>
      <h1 className={s.header}>Drum Pads</h1>
      <div className={s.playGround}>
        {arrayOfPads.map((pad) => (
          <Pad key={pad.sample} sound={pad.sample} color={pad.color} />
        ))}
      </div>
    </div>
  );
}

export default App;
