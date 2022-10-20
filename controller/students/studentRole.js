import { executeQuery } from "../../config/db";
import ErrorHandler from "../../common/errorHandler";
const getAllRole = async (req, res) => {
  try {
    console.log("all the student_role");
    let studentsData = await executeQuery("select * from student_role", []);
    res.send(studentsData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getRoleById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("student_role by id");
    let studentsData = await executeQuery(
      `select * from student_role where id=${id}`,
      []
    );
    if (studentsData.length > 0) res.status(200).json(studentsData);
    else {
      next(new ErrorHandler(`no student_role found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};







export {
  getAllRole,
  getRoleById,

};