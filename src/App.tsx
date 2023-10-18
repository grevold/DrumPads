import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { RoutePath } from "./types";
import { Router } from "./Router";
import { Config } from "./components/Config/Config";

import s from "./index.module.css";
import { Logo } from "./icons/Logo";

function App() {
  const [route, setRoute] = useState<RoutePath>(RoutePath.AllowSounds);

  return (
    <Router.Provider
      value={{
        switch: setRoute,
      }}
    >
      {route === RoutePath.AllowSounds && (
        <div className={s.root} onClick={() => setRoute(RoutePath.Main)}>
          <div className={s.start}>
            <span className={s.start_word}>Начать</span>
          </div>
          <Logo className={s.logo} />
        </div>
      )}
      {route === RoutePath.Config && (
        <div className={s.root}>
          <Header onClick={() => setRoute(RoutePath.Main)} />
          <Config />
        </div>
      )}
      {route === RoutePath.Main && (
        <div className={s.root}>
          <Header onClick={() => setRoute(RoutePath.Config)} />
          <Main />
        </div>
      )}
    </Router.Provider>
  );
}

export default App;
