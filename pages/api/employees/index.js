import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllEmployees,
  saveEmployees,
} from "../../../controller/employees/employeesAction";
const handler = nc(onError);
handler.get(getAllEmployees);
handler.post(saveEmployees);
export default handler;
