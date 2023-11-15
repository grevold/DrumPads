import ScrollLock from "react-scrolllock";
import { useRouteSwitcher } from "../../Router";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout/Layout";
import { RoutePath } from "../../types";
import { Pads } from "./components/Pads/Pads";
import { SwitchSoundEffect } from "./components/SwitchSoundEffect/SwitchSoundEffect";

export const MainPage = () => {
  const setRoute = useRouteSwitcher();

  return (
    <Layout
      header={<Header onClick={() => setRoute(RoutePath.Config)} />}
      footer={<SwitchSoundEffect />}
    >
      <ScrollLock />
      <Pads />
    </Layout>
  );
};
