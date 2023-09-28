import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { RoutePath } from "./types";
import { Router } from "./Router";
import { Config } from "./components/Config/Config";

import s from "./index.module.css";

function App() {
  const [route, setRoute] = useState<RoutePath>(RoutePath.AllowSounds);

  return (
    <Router.Provider
      value={{
        switch: setRoute,
      }}
    >
      {route === RoutePath.AllowSounds && (
        <div className={s.root}>
          <button className={s.start} onClick={() => setRoute(RoutePath.Main)}>
            Начать
          </button>
        </div>
      )}
      {route === RoutePath.Config && (
        <>
          <Header onClick={() => setRoute(RoutePath.Main)} />
          <Config />
        </>
      )}
      {route === RoutePath.Main && (
        <>
          <Header onClick={() => setRoute(RoutePath.Config)} />
          <Main />
        </>
      )}
    </Router.Provider>
  );
}

export default App;
