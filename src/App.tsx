import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { RoutePath } from "./types";
import { Router } from "./Router";
import { Config } from "./components/Config/Config";

import s from "./index.module.css";

function App() {
  const [route, setRoute] = useState<RoutePath>(RoutePath.AllowSounds);
  const [state, setState] = useState(false);
  setInterval(() => {
    setState((prevState) => !prevState);
  }, 1000);

  return (
    <Router.Provider
      value={{
        switch: setRoute,
      }}
    >
      {route === RoutePath.AllowSounds && (
        <div className={s.root} onClick={() => setRoute(RoutePath.Main)}>
          <button className={state ? s.start_shadow : s.start}>Начать</button>
        </div>
      )}
      {route === RoutePath.Config && (
        <>
          <Header onClick={() => setRoute(RoutePath.Main)} />
          <Config />
        </>
      )}
      {route === RoutePath.Main && (
        <div>
          <Header onClick={() => setRoute(RoutePath.Config)} />
          <Main />
        </div>
      )}
    </Router.Provider>
  );
}

export default App;
