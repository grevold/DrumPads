// import { Pad } from "./components/Pad/Pad";
import { useEffect, useRef } from "react";
// import { texts } from "./Texts";
import { Howl } from "howler";

// import s from "./index.module.css";

function App() {
  // const arrayOfPads = texts.Main.pads;
  // console.log("render");

  const sample = useRef(
    new Howl({
      src: [`${process.env.PUBLIC_URL}/Samples/Kick_01.mp3`],
    })
  );

  useEffect(() => {
    const handleClick = () => {
      sample.current.play();
    };
    window.addEventListener("touchstart", handleClick);
    return () => window.removeEventListener("touchstart", handleClick);
  }, []);

  return <h1>Stieve Rambo</h1>;

  // return (
  //   <div className={s.root}>
  //     <h1 className={s.header}>Drum Pads</h1>
  //     <div className={s.playGround}>
  //       {arrayOfPads.map((pad) => (
  //         <Pad key={pad.sample} sound={pad.sample} color={pad.color} />
  //       ))}
  //     </div>
  //   </div>
  // );
}

export default App;
