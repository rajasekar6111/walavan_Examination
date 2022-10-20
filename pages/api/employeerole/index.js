import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllRole,

} from "../../../controller/employee/employeeRole";
const handler = nc(onError);
handler.get(  getAllRole);

export default handler;
