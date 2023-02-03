const AbstractManager = require("./AbstractManager");

class WorkManager extends AbstractManager {
  constructor() {
    super({ table: "work" });
  }

  insert(work) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [work.title]
    );
  }

  update(work) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [work.title, work.id]
    );
  }
}

module.exports = WorkManager;
