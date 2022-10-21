import { executeQuery } from "../../config/db";
import questionsValidation from "../../common/questionsValidator";
import answersValidation from "../../common/answersValidator";
import ErrorHandler from "../../common/errorHandler";

const getAllQuestions = async (req, res) => {
  console.log("req",req.query);
   try {
    
     let limit=req.query.limit
     let page=(req.query.page-1)*limit
     console.log(page);
     console.log("all the questions",limit,page);
     let questionsData = await executeQuery(`select * from questions order by id limit ${page},${limit}`);
    const _totalPages = await executeQuery(`select count(1) as count from questions `);
    // console.log(_totalPages);
    // const totalPages=JSON.stringify(_totalPages);
    // console.log(totalPages);
     var obj= JSON.parse(JSON.stringify(_totalPages));
     console.log( obj[0].count);
     res.send({"questionsData":questionsData, "totalPages": obj[0].count});

   } catch (err) {
     res.status(500).json(err);
   }
 };

const getQuestionsById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("questions by id");
    let questionsData = await executeQuery(
      `select * from questions where id=${id}`,
      []
    );
    console.log("answers by id");
    let answersData = await executeQuery(
      `select * from answers where id=${id}`,
      []
    );
    
    if (questionsData.length > 0,answersData.length > 0,length > 0) res.status(200).json(questionsData,answersData);
    else {
      next(new ErrorHandler(`no questions found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteQuestionsById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let questionsData = await executeQuery(
      "delete from questions where id=?",
      [id]
    );
    res.status(200).json("Questions Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveQuestions = async (req, res) => {
  try {
    console.log("********************************post request1");
    const result = req.body;
    const result1 = req.body;
    console.log(result);
      console.log(result1);


    const { name, image_url, question_type_id, is_delete, is_active, created } = result;
    const { answers1,answers2,answers3,answers4,currectans } = result1;
   
    let { error } = questionsValidation(result);
    let { error1 } = answersValidation(result1);

    if (error,error1) {
             console.log("post request2");
      res.status(400).json(error.details[0].message);

    } else {
      console.log("post request3");
      console.log("post request");
      let questionsData = await executeQuery(
        "insert into questions(name,image_url, question_type_id, is_delete, is_active, created) values(?,?,?,?,?,?)",
        [name,image_url, question_type_id, 1, 1, created]
      );
      console.log("currectans");


  
      if (currectans=="1")
      {
        let answersData1 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers1, questionsData.insertId, "1"]
        );
        let answersData2 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers2, questionsData.insertId, "0"]
        );
        let answersData3 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers3, questionsData.insertId, "0"]
        );
        let answersData4 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers4, questionsData.insertId, "0"]
        ); 
      }
      else if  (currectans=="2")
      {
        let answersData1 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers1, questionsData.insertId, "0"]
        );
        let answersData2 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers2, questionsData.insertId, "1"]
        );
        let answersData3 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers3, questionsData.insertId, "0"]
        );
        let answersData4 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers4, questionsData.insertId, "0"]
        ); 
      }
      else if (currectans=="3")
      {
        let answersData1 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers1, questionsData.insertId, "0"]
        );
        let answersData2 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers2, questionsData.insertId, "0"]
        );
        let answersData3 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers3, questionsData.insertId, "1"]
        );
        let answersData4 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers4, questionsData.insertId, "0"]
        );
      }

      else if (currectans=="4")
      {
        let answersData1 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers1, questionsData.insertId, "0"]
        );
        let answersData2 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers2, questionsData.insertId, "0"]
        );
        let answersData3 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers3, questionsData.insertId, "0"]
        );
        let answersData4 = await executeQuery(
          "insert into answers(answers, question_id, iscurrect) values(?,?,?)",
          [answers4, questionsData.insertId, "1"]
        );
      }


      console.log("**************currectans");
     

      // questionsData = await executeQuery(
      //   `select * from questions where id=${questionsData.insertId}`
      // );
console.log("question_id",questionsData.insertId)
      // res.status(201).json(questionsData);
  
      res.status(201).json(questionsData);
    }
  } catch (err) {
    console.log("post request4",err);
    res.status(400).json(err);
  }
};

const updateQuestions = async (req, res) => {
  let id = req.query.id;
  console.log("id", id);
  const { name,image_url, question_type_id, is_delete, is_active, created} = req.body;
  const { answers, question_id, iscurrect } = req.body;
  console.log("req.body", req.body);
  try {
    let questionsData = await executeQuery(
      "select * from questions where id=?",
      [id]
    );
    let answersData = await executeQuery(
      "select * from answers where id=?",
      [id]
    );
    
    if (questionsData.length > 0,answersData.length>0,length>0) {
      console.log("putrequest", questionsData);
      questionsData = await executeQuery(
        `update questions set name=?,image_url=?,question_type_id=?,is_delete=?,is_active=?,created=? where id=${id}`,
        [name, image_url, question_type_id, is_delete, is_active, created]
      );
      answersData = await executeQuery(
        `update answers set answers=?,question_id=?,iscurrect=? where id=${id}`,
        [ answers,question_id, iscurrect]
      );
     
      
      res.status(200).json(questionsData,answersData);
    } else {
      res.status(400).json(`questions not found on this id=${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllQuestions,
  getQuestionsById,
  deleteQuestionsById,
  saveQuestions,
  updateQuestions,
};