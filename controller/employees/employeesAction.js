import { executeQuery } from "../../config/db";
import employeesValidation from "../../common/employeesValidator";
import ErrorHandler from "../../common/errorHandler";
import { v4 as uuidv4 } from 'uuid';

const getAllEmployees = async (req, res) => {
  console.log("req",req.query);
   try {
    
     let limit=req.query.limit
     let page=(req.query.page-1)*limit
     console.log(page);
     console.log("all the employees",limit,page);
     let employeesData = await executeQuery(`select * from employees order by id limit ${page},${limit}`);
    const _totalPages = await executeQuery(`select count(1) as count from employees `);
    // console.log(_totalPages);
    // const totalPages=JSON.stringify(_totalPages);
    // console.log(totalPages);
     var obj= JSON.parse(JSON.stringify(_totalPages));
     console.log( obj[0].count);
     res.send({"employeesData":employeesData, "totalPages": obj[0].count});

   } catch (err) {
     res.status(500).json(err);
   }
 };


const getEmployeesById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("employees by id");
    let employeesData = await executeQuery(
      `select * from employees where id=${id}`,
      []
    );
    if (employeesData.length > 0) res.status(200).json(employeesData);
    else {
      next(new ErrorHandler(`no employees found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteEmployeesById = async (req, res, next) => {
  let id = req.query.id;
  try {
    let employeesData = await executeQuery(
      "delete from employees where id=?",
      [id]
    );
    res.status(200).json("Employees Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};

const saveEmployees = async (req, res) => {
  try {
    const result = req.body;
    const {LastName, FirstName, uuid, DOB, emp_role_id, email_id, created  } = result;
    let { error } = employeesValidation(result);
    if (error) {
      res.status(400).json(error.details[0].message);
    } else {
      console.log(DOB,emp_role_id);
      console.log("post request");
    
      let employeesData = await executeQuery(
        "insert into employees(LastName, FirstName, uuid, DOB, emp_role_id, email_id, created ) values(?,?,?,?,?,?,?)",
        [LastName, FirstName, uuidv4(),DOB, parseInt(emp_role_id), email_id,created]
      );
      employeesData = await executeQuery(
        `select * from employees where id=${employeesData.insertId}`
      );
      res.status(201).json(employeesData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

const updateEmployees = async (req, res) => {
  let id = req.query.id;
  console.log("id", id);
  const {LastName, FirstName, uuid, DOB, emp_role_id, email_id, created } = req.body;
  console.log("req.body", req.body);
  try {
    let employeesData = await executeQuery(
      "select * from employees where id=?",
      [id]
    );
    if (employeesData.length > 0) {
      console.log("putrequest", employeesData);
      employeesData = await executeQuery(
        `update employees set LastName=?,FirstName=?,uuid=?,DOB=?,emp_role_id=?,email_id=? where id=${id}`,
        [LastName, FirstName, uuid, DOB, emp_role_id, email_id, created]
      );
      res.status(200).json(employeesData);
    } else {
      res.status(400).json(`employees not found on this id=${id}`);
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

export {
  getAllEmployees,
  getEmployeesById,
  deleteEmployeesById,
  saveEmployees,
  updateEmployees,
};
