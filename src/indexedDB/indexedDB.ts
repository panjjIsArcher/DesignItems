const TABLES = ["CARDS"];
export default class IndexedDB {
  db!: IDBDatabase;
  constructor(dbName: string, version?: number) {
    this.init(dbName, version);
  }

  // database创建
  init(dbName: string, version?: number) {
    const request = window.indexedDB.open(dbName, version);
    request.addEventListener("success", () => {
      console.info("数据库开启");
      this.db = request.result;
      return request.result;
    });
    request.addEventListener("error", () => {
      console.error("数据库创建失败");
      return request.result;
    });
    request.addEventListener("upgradeneeded", () => {
      console.info("数据库更新了");
      const db = request.result;
      this.db = db;
      for (let i = 0; i < TABLES.length; i++) {
        const tableName: string = TABLES[i];
        if (this.isExist(tableName) === false) {
          this.createTable(tableName, { keyPath: "id", autoIncrement: true });
        }
      }
    });
    return request;
  }
  // database关闭
  close() {
    this.db.close();
  }
  // 删除dataBase
  remove(dbName: string) {
    window.indexedDB.deleteDatabase(dbName);
  }
  // 表是否存在
  isExist(tableName: string) {
    return this.db.objectStoreNames.contains(tableName);
  }
  // 创建表
  createTable(name: string, options?: IDBObjectStoreParameters) {
    this.db.createObjectStore(name, options);
  }
  /**
   * @description 通过主键查找数据
   * @param {string} tableName 表名称
   * @param {string} key 主键
   */
  queryByKey(tableName: string, key: string | number) {
    return new Promise((resolve) => {
      const transaction: IDBTransaction = this.db.transaction(tableName);
      const table = transaction.objectStore(tableName);
      const request: IDBRequest = table.get(key);
      request.addEventListener("success", () => {
        resolve(request.result);
      });
    });
  }
  addDataIntoTable(tableName: string, obj: unknown) {
    return new Promise((resolve, reject) => {
      if (!this.isExist(tableName)) {
        reject(false);
      }
      const request = this.db
        .transaction(tableName, "readwrite")
        .objectStore(tableName)
        .add(obj);
      request.addEventListener("success", () => {
        resolve({
          code: 0,
          data: true,
        });
      });
    });
  }
}
