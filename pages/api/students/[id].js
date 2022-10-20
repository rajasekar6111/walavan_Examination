import nc from "next-connect";
import onError from "../../../common/errormiddleware";
import {
  getStudentsById,
  deleteStudentsById,
  updateStudents,
} from "../../../controller/students/studentsAction";

const handler = nc({ onError });
handler.get(getStudentsById);
handler.delete(deleteStudentsById);
handler.put(updateStudents);
export default handler;
