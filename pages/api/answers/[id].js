import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAnswersById,
  deleteAnswersById,
  updateAnswers,
} from "../../../controller/answers/answersAction";

const handler = nc({ onError });
handler.get(getAnswersById);
handler.delete(deleteAnswersById);
handler.put(updateAnswers);
export default handler;