import IndexedDB from "../indexedDB/indexedDB";

const queryCards = async function () {
  const _DB: IndexedDB = window._DB;
  if (_DB.isExist("CARDS")) {
    const res = await _DB.queryByKey("CARDS", 1);
    console.info(_DB);
    return res;
  }

  return [];
};
const URLS: { [key: string]: unknown } = {
  queryCards,
};

export { URLS };
