import dbPool from "../config/database.js";

const getAllnotes = () => {
  const SQLquery = "SELECT * FROM notes_database.notes_table";
  return dbPool.execute(SQLquery);
};

const addNotes = (notes_title, notes_body) => {
  const SQLquery = `INSERT INTO notes_database.notes_table (notes_title, notes_body) VALUES ('${notes_title}', '${notes_body}')`;
  return dbPool.execute(SQLquery);
};

export { getAllnotes, addNotes };
