import * as Tone from "tone";
import {
  ESoundEffect,
  ISoundEffectsConfig,
} from "../../../../store/soundEffectsConfigSlice";

interface IEffect {
  dispose: () => void;
}

export interface IPadState {
  player: Tone.Player;
  connectedEffects: IEffect[];
}

export const createPlayerBySoundsEffectsConfigAndUrl = (
  { soundEffects, instrument, pack, bank }: ISoundEffectsConfig,
  url: string
): IPadState => {
  const player = new Tone.Player(
    `https://storage.yandexcloud.net/fxmachine/${instrument}/${pack}/${url}`
  ).toDestination();

  const connectedEffects: IEffect[] = [];

  if (soundEffects[ESoundEffect.PingPong].enabled) {
    const effect = new Tone.PingPongDelay(
      soundEffects[ESoundEffect.PingPong].params?.delayTime,
      soundEffects[ESoundEffect.PingPong].params?.feedback
    ).toDestination();

    player.connect(effect);
    connectedEffects.push(effect);
  }
  if (soundEffects[ESoundEffect.Reverb].enabled) {
    const effect = new Tone.Reverb(
      soundEffects[ESoundEffect.Reverb].params?.roomSize
    ).toDestination();

    player.connect(effect);
    connectedEffects.push(effect);
  }

  if (soundEffects[ESoundEffect.CrusherMode].enabled) {
    const effect = new Tone.Vibrato(
      soundEffects[ESoundEffect.CrusherMode].params?.depth
    ).toDestination();

    player.connect(effect);
    connectedEffects.push(effect);
  }

  return { player, connectedEffects };
};
