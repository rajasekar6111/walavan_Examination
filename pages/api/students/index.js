import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getAllStudents,
  saveStudents,
} from "../../../controller/students/studentsAction";
const handler = nc(onError);
handler.get(getAllStudents);
handler.post(saveStudents);
export default handler;
