import { Sequelize } from "sequelize";

// const db = new Sequelize("user", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const authDatabase = db.authenticate();

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "notes_database",
});

export default dbPool.promise();
// export default authDatabase;
