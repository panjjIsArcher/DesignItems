import IndexedDB from "../indexedDB/indexedDB";
// let dbInstance = null; // 全局的数据库
// 初始化
export default async function init(dbName: string, version?: number) {
  window._DB = new IndexedDB(dbName, version);
  return window._DB;
}
