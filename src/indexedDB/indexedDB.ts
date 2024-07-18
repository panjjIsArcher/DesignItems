export default class IndexedDB {
  db!: IDBDatabase;
  constructor(dbName: string, version?: number) {
    this.init(dbName, version).then((db) => {
      this.db = db;
    });
  }
  // database是否已经存在
  async isExist(dbName: string): Promise<boolean> {
    const dbs: IDBDatabaseInfo[] = await window.indexedDB.databases();
    return dbs.some((db) => db.name === dbName);
  }
  // database创建
  async init(dbName: string, version?: number): Promise<IDBDatabase> {
    const indexedDB = window.indexedDB;

    return new Promise((resolve, reject) => {
      let db: IDBDatabase;
      const request = indexedDB.open(dbName, version);
      request.addEventListener("success", () => {
        db = request.result;
        resolve(db);
      });
      request.addEventListener("error", () => {
        db = request.result;
        reject(db);
      });
    });
  }
  // database关闭
  close() {
    this.db.close();
  }
}
