import { getAllnotes } from "../models/notesModel.js";

const getAllNotes = async (req, res) => {
  const [data] = await getAllnotes();
  const response = {
    Notes: data,
  };
  return res.status(200).json(response);
};

export default getAllNotes;
