import Joi from "joi";

const studentsValidation = (data) => {
  const studentsSchme = Joi.object({
    LastName: Joi.string().required(),
    FirstName: Joi.string().required(),
    uuid: Joi.string().required(),
    DOB: Joi.string().required(),
    student_role_id: Joi.string().required(),
    email_id: Joi.string().required(),
    phone_no: Joi.string().required(),
    created: Joi.string().required(),

  });
  console.log("validation returned")
  return studentsSchme.validate(data);
};

export default studentsValidation;
