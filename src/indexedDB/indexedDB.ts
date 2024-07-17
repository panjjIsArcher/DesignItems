export default class IndexedDB {
  db!: IDBDatabase;
  constructor(dbName: string, version?: number) {
    this.init(dbName, version).then((db) => {
      this.db = db;
    });
  }
  init(dbName: string, version?: number): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      let db: IDBDatabase;
      const indexedDB = window.indexedDB;
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
}
