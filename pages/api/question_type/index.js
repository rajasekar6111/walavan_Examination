import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllType,

} from "../../../controller/questions/questionType";
const handler = nc(onError);
handler.get(  getAllType);

export default handler;