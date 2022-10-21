import { executeQuery } from "../../config/db";
import ErrorHandler from "../../common/errorHandler";
const getAllType = async (req, res) => {
  try {
    console.log("all the question_type");
    let questionsData = await executeQuery("select * from question_type", []);
    res.send(questionsData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTypeById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("question_type by id");
    let questionsData = await executeQuery(
      `select * from question_type where id=${id}`,
      []
    );
    if (questionsData.length > 0) res.status(200).json(questionsData);
    else {
      next(new ErrorHandler(`no question_type found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};







export {
  getAllType,
  getTypeById,

};