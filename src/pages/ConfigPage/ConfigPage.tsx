import { useRouteSwitcher } from "../../Router";
import { Header } from "../../components/Header/Header";
import { Layout } from "../../components/Layout/Layout";
import { Logo } from "../../icons/Logo";
import { RoutePath } from "../../types";
import { Config } from "./components/Config/Config";

export const ConfigPage = () => {
  const setRoute = useRouteSwitcher();
  return (
    <Layout
      header={<Header onClick={() => setRoute(RoutePath.Main)} />}
      footer={<Logo />}
    >
      <Config />
    </Layout>
  );
};
