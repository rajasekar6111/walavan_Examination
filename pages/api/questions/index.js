import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllQuestions,
  saveQuestions,
} from "../../../controller/questions/questionsAction";
const handler = nc(onError);
handler.get(getAllQuestions);
handler.post(saveQuestions);
export default handler;