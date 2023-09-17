import { response } from "express";
import data from "../data/data.js";
import { addNotes } from "../models/notesModel.js";

const addNote = async (req, res) => {
  const { notes_title, notes_body } = req.body;
  await addNotes(notes_title, notes_body);
  const response = {
    status: 200,
    message: "Notes berhasil ditambahkan",
  };
  return res.status(200).json(response);
};

export default addNote;
