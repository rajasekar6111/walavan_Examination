import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getQuestionsById,
  deleteQuestionsById,
  updateQuestions,
} from "../../../controller/questions/questionsAction";

const handler = nc({ onError });
handler.get(getQuestionsById);
handler.delete(deleteQuestionsById);
handler.put(updateQuestions);
export default handler;