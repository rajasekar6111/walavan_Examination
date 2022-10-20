import { executeQuery } from "../../config/db";
import studentsValidation from "../../common/studentsValidator";
import ErrorHandler from "../../common/errorHandler";
import { v4 as uuidv4 } from 'uuid';
const getAllStudents = async (req, res) => {
  console.log("req",req.query);
   try {
    
     let limit=req.query.limit
     let page=(req.query.page-1)*limit
     console.log(page);
     console.log("all the students",limit,page);
     let studentsData = await executeQuery(`select * from students order by id limit ${page},${limit}`);
    const _totalPages = await executeQuery(`select count(1) as count from students `);
    // console.log(_totalPages);
    // const totalPages=JSON.stringify(_totalPages);
    // console.log(totalPages);
     var obj= JSON.parse(JSON.stringify(_totalPages));
     console.log( obj[0].count);
     res.send({"studentsData":studentsData, "totalPages": obj[0].count});

   } catch (err) {
     res.status(500).json(err);
   }
 };

const getStudentsById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("students by id");
    let studentsData = await executeQuery(
      `select * from students where id=${id}`,
      []
    );
   
    if (studentsData.length > 0) res.status(200).json(studentsData);
    else {
      next(new ErrorHandler(`no students found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteStudentsById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let studentsData = await executeQuery(
      "delete from students where id=?",
      [id]
    );
    res.status(200).json("Students Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveStudents = async (req, res) => {
  try {
    const result = req.body;
   
    const { LastName, FirstName, uuid, DOB, student_role_id, email_id, phone_no, created } = result;
    let { error } = studentsValidation(result);
  
    if (error) {
      res.status(400).json(error.details[0].message);
    } else {
      console.log("post request");
      console.log(DOB,student_role_id);

      let studentsData = await executeQuery(
        "insert into students(LastName,FirstName,uuid,DOB,student_role_id,email_id,phone_no,created) values(?,?,?,?,?,?,?,?)",
        [LastName, FirstName, uuidv4(),DOB, parseInt(student_role_id), email_id, phone_no,created ]
      );
 

res.status(201).json(studentsData);
}
} catch (err) {
console.log("post request4");
res.status(400).json(err);
}
};

const updateStudents = async (req, res) => {
  let id = req.query.id;
  console.log("id", id);
  const { LastName, FirstName, uuid, DOB, student_role_id, email_id, phone_no } = req.body;
  console.log("req.body", req.body);
  try {
    let studentsData = await executeQuery(
      "select * from students where id=?",
      [id]
    );
    if (studentsData.length > 0) {
      console.log("putrequest", studentsData);

      studentsData = await executeQuery(
        `update students set LastName=?,FirstName=?,uuid=?,DOB=?,student_role_id=?,email_id=?,phone_no=? where id=${id}`,
        [LastName, FirstName, uuid, DOB, parseInt(student_role_id), email_id, phone_no]
      );
      res.status(200).json(studentsData);
    } else {
      res.status(400).json(`students not found on this id=${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllStudents,
  getStudentsById,
  deleteStudentsById,
  saveStudents,
  updateStudents,
};