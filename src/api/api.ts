import { cards } from "../indexedDB/database";
import init from "../util/init";

// 初始化数据库
const indexedDB = await init();
debugger;
const queryCards = async function () {
  return await cards;
};
const URLS: { [key: string]: unknown } = {
  queryCards,
};

export { URLS };
