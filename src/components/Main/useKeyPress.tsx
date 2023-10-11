import { useEffect, useState } from "react";

export const useKeyPress = (keyTarget: any) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const downHandler = ({ key }: any) => {
    if (key === keyTarget) setIsKeyPressed(true);
  };
  const upHandler = ({ key }: any) => {
    if (key === keyTarget) setIsKeyPressed(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    return window.removeEventListener("keydown", downHandler);
  }, []);
};
