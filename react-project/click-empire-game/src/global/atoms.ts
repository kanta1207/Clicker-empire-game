import { atom } from "recoil";
import { UserInfo } from "../types/types";

export const userInfoState = atom<UserInfo>({
  key: "userInfo",
  default: {
      age: 20,
      budget: 0,
      burgerPerAClick: 1,
      dayCount: 0,
      items : [],
      name: "",
      numOfBurger: 0,
      priceOfBurger: 25,
    },
  },
);
