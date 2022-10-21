import nc from "next-connect";
import onError from "../../../../common/errormiddleware";
import {
  getTypeById,
  
} from "../../../controller/questions/questionType";

const handler = nc({ onError });
handler.get( getTypeById);

export default handler;