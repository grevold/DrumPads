import { useRouteSwitcher } from "../../Router";
import { Layout } from "../../components/Layout/Layout";
import { Logo } from "../../icons/Logo";
import { RoutePath } from "../../types";

import s from "./styles.module.css";

export const AllowSoundsPage = () => {
  const setRoute = useRouteSwitcher();

  return (
    <Layout
      onClick={() => setRoute(RoutePath.Main)}
      header={<Logo className={s.logoHidden} />}
      footer={<Logo />}
    >
      <div className={s.start}>
        <span className={s.start_word}>Начать</span>
      </div>
    </Layout>
  );
};
