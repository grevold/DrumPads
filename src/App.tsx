import { useState } from "react";
import { Header } from "./components/Header/Header";
import { useAppSelector } from "./store/store";
import { samples } from "./Texts";
import { HashRouter, Route, Routes } from "react-router-dom";

import s from "./index.module.css";
import { Main } from "./components/Main/Main";
import { RoutePath } from "./types";
import { Config } from "./components/Config/Config";

function App() {
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.pack][config.bank];

  const [state, setState] = useState(false);

  if (!state) {
    return (
      <div className={s.root}>
        <button
          className={s.start}
          onClick={() => {
            setState(true);
          }}
        >
          Начать
        </button>
      </div>
    );
  }

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route element={<Config />} path={RoutePath.Config} />
        <Route element={<Main />} path={"*"} />
      </Routes>
    </HashRouter>
  );
}

export default App;
