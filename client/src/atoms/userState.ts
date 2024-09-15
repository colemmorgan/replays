import { atom } from "recoil";
import GamePreview from "../types/GamePreview";


interface User {
  id: string;
  name: string;
  email: string;
  epicId: string;
  epicUsername: string;
  games: GamePreview[]
}

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
