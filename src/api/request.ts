import { URLS } from "./api";

// 获取cards列表
const $request = (name: string) => {
  const fn = URLS[name];
  if (typeof fn !== "function") {
    throw new Error("wrong url!");
  }
  return fn();
};

export default $request;
