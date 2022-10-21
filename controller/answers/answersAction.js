import { executeQuery } from "../../config/db";
import answersValidation from "../../common/answersValidator";
import ErrorHandler from "../../common/errorHandler";
const getAllAnswers = async (req, res) => {
  console.log("req",req.query);
   try {
    
     let limit=req.query.limit
     let page=(req.query.page-1)*limit
     console.log(page);
     console.log("all the answers",limit,page);
     let answersData = await executeQuery(`select * from answers order by id limit ${page},${limit}`);
    const _totalPages = await executeQuery(`select count(1) as count from answers `);
    // console.log(_totalPages);
    // const totalPages=JSON.stringify(_totalPages);
    // console.log(totalPages);
     var obj= JSON.parse(JSON.stringify(_totalPages));
     console.log( obj[0].count);
     res.send({"answersData":answersData, "totalPages": obj[0].count});

   } catch (err) {
     res.status(500).json(err);
   }
 };

const getAnswersById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("answers by id");
    let answersData = await executeQuery(
      `select * from answers where id=${id}`,
      []
    );
    if (answersData.length > 0) res.status(200).json(answersData);
    else {
      next(new ErrorHandler(`no answers found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteAnswersById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let answersData = await executeQuery(
      "delete from answers where id=?",
      [id]
    );
    res.status(200).json("Answers Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveAnswers = async (req, res) => {
  try {
    const result = req.body;
   
    const { answers, image_url, question_id, iscurrect } = result;
    let { error } = answersValidation(result);
  
    if (error) {
      res.status(400).json(error.details[0].message);
    } else {
      console.log("post request");
      let answersData = await executeQuery(
        "insert into answers(answers,image_url, question_id, iscurrect) values(?,?,?,?)",
        [answers, image_url, question_id, iscurrect]
      );
      answersData = await executeQuery(
        `select * from answers where id=${answersData.insertId}`
      );
      res.status(201).json(answersData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateAnswers = async (req, res) => {
  let id = req.query.id;
  console.log("id", id);
  const { answers, image_url, question_id, iscurrect } = req.body;
  console.log("req.body", req.body);
  try {
    let answersData = await executeQuery(
      "select * from answers where id=?",
      [id]
    );
    if (answersData.length > 0) {
      console.log("putrequest", answersData);


      answersData = await executeQuery(
        `update answers set answers=?,image_url=?,question_id=?,iscurrect=? where id=${id}`,
        [ answers, image_url, question_id, iscurrect]
      );
      res.status(200).json(answersData);
    } else {
      res.status(400).json(`answers not found on this id=${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllAnswers,
  getAnswersById,
  deleteAnswersById,
  saveAnswers,
  updateAnswers,
};