import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllAnswers,
  saveAnswers,
} from "../../../controller/answers/answersAction";
const handler = nc(onError);
handler.get(getAllAnswers);
handler.post(saveAnswers);
export default handler;