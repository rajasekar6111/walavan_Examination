import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllRole,

} from "../../../controller/students/studentRole";
const handler = nc(onError);
handler.get(  getAllRole);

export default handler;
