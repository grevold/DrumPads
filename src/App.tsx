import { useState } from "react";
import { RoutePath } from "./types";
import { Router } from "./Router";
import { AllowSoundsPage } from "./pages/AllowSoundsPage/AllowSoundsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { ConfigPage } from "./pages/ConfigPage/ConfigPage";

function App() {
  const [route, setRoute] = useState<RoutePath>(RoutePath.AllowSounds);

  return (
    <Router.Provider
      value={{
        switch: setRoute,
      }}
    >
      {route === RoutePath.AllowSounds && <AllowSoundsPage />}
      {route === RoutePath.Config && <ConfigPage />}
      {route === RoutePath.Main && <MainPage />}
    </Router.Provider>
  );
}

export default App;
