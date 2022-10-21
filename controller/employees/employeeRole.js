import { executeQuery } from "../../config/db";
import ErrorHandler from "../../common/errorHandler";
const getAllRole = async (req, res) => {
  try {
    console.log("all the employee_role");
    let employeesData = await executeQuery("select * from employee_role", []);
    res.send(employeesData);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getRoleById = async (req, res, next) => {
  let id = req.query.id;
  try {
    console.log("employee_role by id");
    let employeesData = await executeQuery(
      `select * from employee_role where id=${id}`,
      []
    );
    if (employeesData.length > 0) res.status(200).json(employeesData);
    else {
      next(new ErrorHandler(`no employee_role found with this id ${id}`, 404));
    }
  } catch (err) {
    res.status(500).json(err);
  }
};







export {
  getAllRole,
  getRoleById,

};