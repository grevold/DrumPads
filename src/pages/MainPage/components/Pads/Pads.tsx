import { useEffect, useState } from "react";
import { samples } from "../../../../Texts";
import { store, useAppDispatch, useAppSelector } from "../../../../store/store";
import { Pad } from "../Pad/Pad";

import s from "./styles.module.css";
import { soundEffectsActions } from "../../../../store/soundEffectsConfigSlice";
import * as Tone from "tone";

export function Pads() {
  const dispatch = useAppDispatch();
  const [allPlayersDownload, setAllPlayersDownload] = useState<boolean>(false);
  const config = useAppSelector((store) => store.soundEffectsReducer);
  const samplesArray = samples[config.instrument][config.pack][config.bank];

  // Преобразование массива строк в массив промисов
  const promises = samplesArray.map((url) => {
    const player = new Tone.Player(
      `https://storage.yandexcloud.net/fxmachine/${config.instrument}/${config.pack}/${url.sample}`
    );
    return new Promise((resolve, reject) => {
      resolve(player);
    });
  });

  // useEffect(() => {
  //   Promise.all(promises)
  //     .then((results) => {
  //       setAllPlayersDownload(true);
  //       dispatch(soundEffectsActions.addSounds(results));
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, [promises]);

  // console.log(promises)

  return (
    <div className={s.root}>
      {samplesArray.map(({ color, sample, keyBoard, type }, index) => (
        <Pad
          key={index}
          sample={sample}
          color={color}
          type={type}
          keyBoard={keyBoard}
        />
      ))}
    </div>
  );
}
