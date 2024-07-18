import IndexedDB from "../indexedDB/indexedDB";
// let dbInstance = null; // 全局的数据库
// 初始化
export default async function init() {
  return new IndexedDB("demo");
}
