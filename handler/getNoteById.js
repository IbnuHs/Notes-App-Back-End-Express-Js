import data from "../data/data.js";

const getNoteByid = async (req, res) => {
  const { id } = req.params;
  const notes = data.filter((i) => id === i.id);
  //   const params = id;
  const response = {
    status: 200,
    Notes: {
      notes,
    },
  };
  return res.status(200).json(response);
};

export default getNoteByid;
