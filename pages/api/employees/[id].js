import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getEmployeesById,
  deleteEmployeesById,
  updateEmployees,
} from "../../../controller/employees/employeesAction";

const handler = nc({ onError });
handler.get(getEmployeesById);
handler.delete(deleteEmployeesById);
handler.put(updateEmployees);
export default handler;
