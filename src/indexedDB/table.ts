import IndexedDB from "./indexedDB";

export default class Table {
  db: IDBDatabase;
  dbName: string;
  tableName!: string;
  constructor(dbName: string) {
    const indexedDB = new IndexedDB(dbName);
    this.db = indexedDB.db;
    this.dbName = dbName;
  }
  // 表是否存在
  isExist(tableName: string) {
    return this.db.objectStoreNames.contains(tableName);
  }
  // 创建表
  create(name: string, options?: IDBObjectStoreParameters) {
    if (this.isExist(name)) {
      return this.db.objectStoreNames;
    }
    this.db.createObjectStore(name, options);
    this.tableName = name;
  }
  /**
   * @description 通过主键查找数据
   * @param {string} tableName 表名称
   * @param {string} key 主键
   */
  queryByKey(tableName: string, key: string) {
    return new Promise((resolve) => {
      const transaction: IDBTransaction = this.db.transaction(tableName);
      const table = transaction.objectStore(tableName);
      const request: IDBRequest = table.get(key);
      request.addEventListener("success", () => {
        resolve(request.result);
      });
    });
  }
}
