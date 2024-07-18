import { cards } from "../indexedDB/database";

const queryCards = async function () {
  return await cards;
};
const URLS: { [key: string]: () => Promise<void> } = {
  queryCards: queryCards,
};

export { URLS };
