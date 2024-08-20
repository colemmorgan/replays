import { atom } from "recoil";


interface User {
  id: string;
  name: string;
  email: string;
  epicId: string;
  epicUsername: string;
}

export const userState = atom<User | null>({
  key: "userState",
  default: null,
});
