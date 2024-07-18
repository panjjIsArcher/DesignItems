export default class IndexedDB {
  db!: IDBDatabase;
  constructor(dbName: string, version?: number) {
    this.init(dbName, version);
  }
  // database是否已经存在
  async isExist(dbName: string): Promise<boolean> {
    const dbs: IDBDatabaseInfo[] = await window.indexedDB.databases();
    return dbs.some((db) => db.name === dbName);
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
    return request;
  }
  // database关闭
  close() {
    this.db.close();
  }
}
