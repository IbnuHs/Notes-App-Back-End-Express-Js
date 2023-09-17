import express from "express";
import bodyParser from "body-parser";
import addNote from "./handler/addNotes.js";
import getAllNotes from "./handler/getAllNotes.js";
import getNoteByid from "./handler/getNoteById.js";

const app = express();
const port = 3000;

// main route

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Main Route");
});

app.post("/addbooks", addNote);
app.get("/getAllnotes", getAllNotes);
app.get("/getNote/:id", getNoteByid);

app.listen(port, () => {
  console.log(`Run on port : ${port}`);
});
