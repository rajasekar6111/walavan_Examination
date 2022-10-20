import nc from "next-connect";
import onError from "../../../../common/errormiddleware";
import {
  getRoleById,
  
} from "../../../controller/students/studentRole";

const handler = nc({ onError });
handler.get( getRoleById);

export default handler;
