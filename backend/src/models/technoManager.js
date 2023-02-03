const AbstractManager = require("./AbstractManager");

class technoManager extends AbstractManager {
  constructor() {
    super({ table: "techno" });
  }

  insert(techno) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [techno.title]
    );
  }

  update(techno) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [techno.title, techno.id]
    );
  }
}

module.exports = technoManager;
