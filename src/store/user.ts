import { defineStore } from "pinia";

export interface IUserInfo {
  username: string;
  token: string;
  email: string;
  channelDescription: string | null;
  avatar: string | null;
}

export const useUserStore = defineStore("user", {
  state: (): IUserInfo => ({
    username: "",
    token: "",
    email: "",
    channelDescription: null,
    avatar: null,
  }),

  actions: {
    saveUserInfo(state: IUserInfo) {
      console.log(state);
    },
  },
});
