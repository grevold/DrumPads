import { createContext, useContext } from "react";
import { RoutePath } from "./types";

interface IRouterContext {
  switch: (route: RoutePath) => void;
}

export const Router = createContext<IRouterContext>({
  switch: () => undefined,
});

export const useRouteSwitcher = () => {
  return useContext(Router).switch;
};
